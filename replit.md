# Overview

CryptoVest is a professional cryptocurrency investment platform that provides institutional-grade security, real-time market data, and expert guidance for cryptocurrency investors. The application features a modern React frontend with a Node.js/Express backend, offering users a comprehensive suite of tools including live cryptocurrency pricing, portfolio management, automated trading features, and contact/consultation services.

**Recent Update (Aug 1, 2025)**: Project optimized for Vercel deployment following their recommended protocols including serverless functions, proper build configuration, and production-ready structure.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **Routing**: Wouter for client-side routing (lightweight alternative to React Router)
- **State Management**: TanStack Query (React Query) for server state management and API caching
- **Form Handling**: React Hook Form with Zod validation schemas
- **Responsive Design**: Mobile-first approach with Tailwind CSS breakpoints

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful API endpoints with JSON responses
- **Development**: TSX for hot reloading and development server
- **Production Build**: ESBuild for server bundling

## Data Storage Solutions
- **Database**: PostgreSQL configured through Drizzle ORM
- **Connection**: Neon Database serverless PostgreSQL instance
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **ORM**: Drizzle ORM with type-safe queries and schema definitions

## Database Schema
- **Cryptocurrencies Table**: Stores crypto data (symbol, name, price, market cap, 24h change, volume)
- **Contact Requests Table**: Manages user consultation requests with personal details and investment amounts
- **Users Table**: Basic user authentication structure (prepared for future implementation)

## API Architecture
- **Cryptocurrency Endpoints**: 
  - GET `/api/cryptocurrencies` - Fetch all supported cryptocurrencies
  - GET `/api/cryptocurrencies/:symbol` - Fetch specific cryptocurrency data
- **Contact Management**:
  - POST `/api/contact` - Submit consultation requests with validation
- **Middleware**: Request logging, JSON parsing, error handling
- **Validation**: Zod schemas for type-safe request validation

## Development Tools
- **Build System**: Vite for frontend, ESBuild for backend
- **Type Safety**: TypeScript with strict configuration
- **Code Quality**: Shared TypeScript configuration across client/server
- **Hot Reloading**: Vite HMR for frontend, TSX for backend development

## Deployment Configuration

### Vercel Optimization (Added Aug 1, 2025)
- **Serverless Functions**: Express API converted to Vercel-compatible serverless functions in `/api/` directory
- **Build Configuration**: `vercel.json` with optimized routing and build settings
- **Environment Setup**: Development vs production environment handling
- **Performance**: Caching headers, CORS optimization, error handling for serverless
- **File Structure**: Separate CommonJS modules for Vercel deployment alongside TypeScript development files

### Deployment Files
- `vercel.json` - Vercel deployment configuration
- `api/index.js` - Serverless API entry point (CommonJS)
- `api/storage.js` - Storage layer for serverless environment
- `api/schema.js` - Validation schemas for serverless functions
- `.vercelignore` - Files excluded from deployment
- `VERCEL_DEPLOYMENT.md` - Comprehensive deployment guide

# External Dependencies

## UI and Styling
- **Radix UI**: Accessible component primitives for complex UI elements
- **Tailwind CSS**: Utility-first CSS framework with custom design tokens
- **Lucide React**: Icon library for consistent iconography
- **Font Awesome**: Additional icons for cryptocurrency and financial themes

## Data Management
- **TanStack Query**: Server state management, caching, and synchronization
- **React Hook Form**: Form state management and validation
- **Zod**: Runtime type validation and schema definition
- **Date-fns**: Date manipulation and formatting utilities

## Database and ORM
- **Drizzle ORM**: Type-safe database toolkit with PostgreSQL support
- **Neon Database**: Serverless PostgreSQL database hosting
- **Drizzle Kit**: Database migration and introspection tools

## Development Infrastructure
- **Vite**: Frontend build tool and development server
- **ESBuild**: Fast JavaScript/TypeScript bundler for production
- **TSX**: TypeScript execution for development
- **PostCSS**: CSS processing with Tailwind and Autoprefixer

## Routing and Navigation
- **Wouter**: Lightweight client-side routing library
- **React DOM**: DOM rendering and manipulation

## Type Safety and Validation
- **TypeScript**: Static type checking across the entire stack
- **Zod**: Runtime validation and type inference
- **Class Variance Authority**: Type-safe utility classes for component variants