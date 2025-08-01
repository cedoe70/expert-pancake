const { z } = require("zod");

// Contact request validation schema for CommonJS
const insertContactRequestSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().optional(),
  investmentAmount: z.string().min(1, "Investment amount is required"),
  message: z.string().optional(),
});

// User validation schema
const insertUserSchema = z.object({
  username: z.string().min(1, "Username is required"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

// Cryptocurrency validation schema
const insertCryptocurrencySchema = z.object({
  symbol: z.string().min(1, "Symbol is required"),
  name: z.string().min(1, "Name is required"),
  price: z.number().positive("Price must be positive"),
  change24h: z.number(),
  volume24h: z.number().positive("Volume must be positive"),
  marketCap: z.number().positive("Market cap must be positive"),
  icon: z.string().min(1, "Icon is required"),
});

module.exports = {
  insertContactRequestSchema,
  insertUserSchema,
  insertCryptocurrencySchema,
};