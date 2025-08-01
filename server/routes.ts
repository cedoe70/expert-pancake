import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactRequestSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  // Get all cryptocurrencies
  app.get("/api/cryptocurrencies", async (req, res) => {
    try {
      const cryptocurrencies = await storage.getCryptocurrencies();
      res.json(cryptocurrencies);
    } catch (error) {
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
      
      res.json(cryptocurrency);
    } catch (error) {
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
      if (error instanceof Error) {
        res.status(400).json({ message: error.message });
      } else {
        res.status(500).json({ message: "Failed to submit contact request" });
      }
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
