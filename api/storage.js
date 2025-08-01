const { randomUUID } = require("crypto");

// Storage interface implementation for CommonJS
class MemStorage {
  constructor() {
    this.users = new Map();
    this.cryptocurrencies = new Map();
    this.contactRequests = new Map();
    
    // Initialize with sample cryptocurrency data
    this.initializeCryptocurrencies();
  }

  initializeCryptocurrencies() {
    const cryptos = [
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
      },
      {
        id: randomUUID(),
        symbol: "DOT",
        name: "Polkadot",
        price: 6.78,
        change24h: -1.23,
        volume24h: 156000000,
        marketCap: 8900000000,
        icon: "polkadot",
        lastUpdated: new Date(),
      },
      {
        id: randomUUID(),
        symbol: "AVAX",
        name: "Avalanche",
        price: 23.45,
        change24h: 4.67,
        volume24h: 285000000,
        marketCap: 8700000000,
        icon: "avalanche",
        lastUpdated: new Date(),
      }
    ];

    cryptos.forEach(crypto => {
      this.cryptocurrencies.set(crypto.symbol, crypto);
    });
  }

  async getUser(id) {
    return this.users.get(id);
  }

  async getUserByUsername(username) {
    for (const user of this.users.values()) {
      if (user.username === username) {
        return user;
      }
    }
    return undefined;
  }

  async createUser(user) {
    const newUser = {
      id: randomUUID(),
      ...user,
    };
    this.users.set(newUser.id, newUser);
    return newUser;
  }

  async getCryptocurrencies() {
    return Array.from(this.cryptocurrencies.values());
  }

  async getCryptocurrency(symbol) {
    return this.cryptocurrencies.get(symbol);
  }

  async createContactRequest(request) {
    const newRequest = {
      id: randomUUID(),
      ...request,
      createdAt: new Date(),
    };
    this.contactRequests.set(newRequest.id, newRequest);
    return newRequest;
  }
}

// Export singleton instance
const storage = new MemStorage();
module.exports = { storage, MemStorage };