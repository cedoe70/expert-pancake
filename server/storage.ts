import { type User, type InsertUser, type Cryptocurrency, type InsertCryptocurrency, type ContactRequest, type InsertContactRequest } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  getCryptocurrencies(): Promise<Cryptocurrency[]>;
  getCryptocurrency(symbol: string): Promise<Cryptocurrency | undefined>;
  createContactRequest(request: InsertContactRequest): Promise<ContactRequest>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private cryptocurrencies: Map<string, Cryptocurrency>;
  private contactRequests: Map<string, ContactRequest>;

  constructor() {
    this.users = new Map();
    this.cryptocurrencies = new Map();
    this.contactRequests = new Map();
    
    // Initialize with sample cryptocurrency data
    this.initializeCryptocurrencies();
  }

  private initializeCryptocurrencies() {
    const cryptos: Cryptocurrency[] = [
      {
        id: randomUUID(),
        symbol: "BTC",
        name: "Bitcoin",
        price: 43250.32,
        change24h: 2.45,
        volume24h: 28500000000,
        marketCap: 847000000000,
        icon: "bitcoin",
        lastUpdated: new Date(),
      },
      {
        id: randomUUID(),
        symbol: "ETH",
        name: "Ethereum", 
        price: 2650.78,
        change24h: 1.82,
        volume24h: 15200000000,
        marketCap: 318000000000,
        icon: "ethereum",
        lastUpdated: new Date(),
      },
      {
        id: randomUUID(),
        symbol: "ADA",
        name: "Cardano",
        price: 0.465,
        change24h: -0.95,
        volume24h: 287000000,
        marketCap: 16400000000,
        icon: "cardano",
        lastUpdated: new Date(),
      },
      {
        id: randomUUID(),
        symbol: "SOL",
        name: "Solana",
        price: 98.23,
        change24h: 3.21,
        volume24h: 1800000000,
        marketCap: 42100000000,
        icon: "solana",
        lastUpdated: new Date(),
      }
    ];

    cryptos.forEach(crypto => {
      this.cryptocurrencies.set(crypto.symbol, crypto);
    });
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async getCryptocurrencies(): Promise<Cryptocurrency[]> {
    return Array.from(this.cryptocurrencies.values());
  }

  async getCryptocurrency(symbol: string): Promise<Cryptocurrency | undefined> {
    return this.cryptocurrencies.get(symbol);
  }

  async createContactRequest(request: InsertContactRequest): Promise<ContactRequest> {
    const id = randomUUID();
    const contactRequest: ContactRequest = {
      ...request,
      id,
      createdAt: new Date(),
    };
    this.contactRequests.set(id, contactRequest);
    return contactRequest;
  }
}

export const storage = new MemStorage();
