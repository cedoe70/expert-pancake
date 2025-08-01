const express = require("express");
const path = require("path");

// Import storage and schema (CommonJS versions)
const { storage } = require("./storage");
const { insertContactRequestSchema } = require("./schema");

const app = express();

// Essential middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// CORS configuration for Vercel
app.use((req, res, next) => {
  const allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:5000',
    'https://your-domain.vercel.app'  // Replace with your actual domain
  ];
  
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Credentials', true);
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Request logging middleware
app.use((req, res, next) => {
  const start = Date.now();
  const originalResJson = res.json;
  let capturedJsonResponse = undefined;

  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (req.path.startsWith("/api")) {
      let logLine = `${req.method} ${req.path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }
      console.log(logLine.length > 80 ? logLine.slice(0, 79) + "…" : logLine);
    }
  });

  next();
});

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() });
});

// Get all cryptocurrencies
app.get("/api/cryptocurrencies", async (req, res) => {
  try {
    const cryptocurrencies = await storage.getCryptocurrencies();
    res.setHeader('Cache-Control', 'public, max-age=60'); // Cache for 1 minute
    res.json(cryptocurrencies);
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    res.status(500).json({ message: "Failed to fetch cryptocurrencies" });
  }
});

// Get specific cryptocurrency by symbol
app.get("/api/cryptocurrencies/:symbol", async (req, res) => {
  try {
    const { symbol } = req.params;
    const cryptocurrency = await storage.getCryptocurrency(symbol.toUpperCase());
    
    if (!cryptocurrency) {
      return res.status(404).json({ message: "Cryptocurrency not found" });
    }
    
    res.setHeader('Cache-Control', 'public, max-age=60'); // Cache for 1 minute
    res.json(cryptocurrency);
  } catch (error) {
    console.error('Error fetching cryptocurrency:', error);
    res.status(500).json({ message: "Failed to fetch cryptocurrency" });
  }
});

// Submit contact request
app.post("/api/contact", async (req, res) => {
  try {
    const validatedData = insertContactRequestSchema.parse(req.body);
    const contactRequest = await storage.createContactRequest(validatedData);
    res.status(201).json({ 
      message: "Contact request submitted successfully",
      id: contactRequest.id
    });
  } catch (error) {
    console.error('Error creating contact request:', error);
    if (error instanceof Error) {
      res.status(400).json({ message: error.message });
    } else {
      res.status(500).json({ message: "Failed to submit contact request" });
    }
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  const status = err.status || err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ message });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/public/index.html'));
});

// Export for Vercel serverless
module.exports = app;