# Vercel Deployment Guide for CryptoVest

This project has been optimized for deployment on Vercel following their recommended protocols.

## Project Structure (Vercel Optimized)

```
project-root/
├── api/                    # Serverless functions for Vercel
│   ├── index.js           # Main API handler (CommonJS)
│   ├── storage.js         # Storage layer (CommonJS)
│   ├── schema.js          # Validation schemas (CommonJS)
│   └── package.json       # API dependencies
├── client/                # React frontend
│   ├── src/
│   └── index.html
├── server/                # Development server (not deployed)
├── shared/                # Shared TypeScript schemas
├── vercel.json            # Vercel configuration
├── .vercelignore          # Files to exclude from deployment
└── package.json           # Main project dependencies
```

## Key Vercel Optimizations Implemented

### 1. Serverless API Structure
- **Moved Express app to `/api/index.js`** - Follows Vercel's serverless function pattern
- **CommonJS format** - Required for Vercel Node.js runtime
- **Proper exports** - Express app exported as module for serverless execution
- **Optimized middleware** - Minimal middleware for serverless performance

### 2. Vercel Configuration (`vercel.json`)
```json
{
  "version": 2,
  "builds": [
    {
      "src": "api/index.js",
      "use": "@vercel/node"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "/api/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "/api/index.js"
    }
  ],
  "functions": {
    "api/index.js": {
      "maxDuration": 30
    }
  }
}
```

### 3. Performance Optimizations
- **Response Caching** - API responses cached with appropriate headers
- **Error Handling** - Proper serverless error handling to prevent function hanging
- **CORS Configuration** - Optimized for Vercel's edge network
- **Bundle Size** - Minimal dependencies in API functions

### 4. Environment Variables
Set these in Vercel Dashboard or using Vercel CLI:

```bash
# Database (if using external DB)
DATABASE_URL=your_database_url

# Node Environment (automatically set by Vercel)
NODE_ENV=production
VERCEL_ENV=production
```

## Deployment Methods

### Method 1: Git Integration (Recommended)
1. Push your code to GitHub/GitLab
2. Connect repository to Vercel
3. Automatic deployments on push to main branch
4. Preview deployments for feature branches

### Method 2: Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Deploy preview
vercel
```

### Method 3: Manual Upload
1. Create production build: `npm run build`
2. Upload to Vercel dashboard
3. Configure build settings

## Build Configuration

The project uses:
- **Frontend Build**: `vite build` (outputs to `dist/public`)
- **API Build**: No build required (Node.js runtime handles CommonJS)
- **Build Command**: `vite build` (set in `vercel.json`)
- **Output Directory**: `dist/public`

## Environment-Specific Behavior

### Development (Local)
- Uses original Express server (`npm run dev`)
- TypeScript with hot reloading
- Vite dev server for frontend

### Production (Vercel)
- Serverless functions in `/api/`
- Static file serving for React app
- Optimized for edge caching

## Database Considerations

### Current Setup (In-Memory)
- Uses in-memory storage for development
- Data resets on each function cold start
- Suitable for demos and prototypes

### Production Database Setup
For production, consider:
1. **Neon Database** (PostgreSQL) - Already configured with Drizzle ORM
2. **Vercel Postgres** - Native integration
3. **PlanetScale** (MySQL) - Serverless-friendly
4. **MongoDB Atlas** - Document database

### Database Migration
If migrating to external database:
1. Set `DATABASE_URL` environment variable
2. Update storage implementation in `api/storage.js`
3. Run database migrations using Drizzle Kit

## Performance Monitoring

### Vercel Analytics
- Enable in Vercel dashboard
- Monitors Core Web Vitals
- Function execution metrics

### Recommended Monitoring
- **Error Tracking**: Integrate Sentry
- **Performance**: Web Vitals dashboard
- **Database**: Connection pool monitoring

## Security Best Practices

### Environment Variables
- Never commit secrets to repository
- Use Vercel environment variables for sensitive data
- Separate values for development/preview/production

### CORS Configuration
- Configured for specific domains
- Update allowed origins in `api/index.js`
- Remove localhost origins for production

### Headers
- Proper cache headers set
- Security headers recommended for production

## Troubleshooting

### Common Issues
1. **Cold Starts**: First request may be slower
2. **Function Timeout**: Increase maxDuration if needed
3. **Module Resolution**: Ensure correct CommonJS exports
4. **CORS Errors**: Update allowed origins

### Debug Commands
```bash
# Test locally with Vercel environment
vercel dev

# Check function logs
vercel logs [function-name]

# Inspect build output
vercel inspect [deployment-url]
```

## Migration from Development to Production

1. **Database Setup**: Configure external database
2. **Environment Variables**: Set production values
3. **Domain Configuration**: Add custom domain if needed
4. **Monitoring**: Enable analytics and error tracking
5. **Performance Testing**: Load test API endpoints

## Maintenance

### Updates
- Frontend updates trigger automatic rebuilds
- API updates require new deployment
- Environment variable changes apply immediately

### Scaling
- Vercel handles automatic scaling
- Monitor function execution times
- Consider edge functions for global performance

This deployment configuration follows Vercel's best practices for serverless applications and provides optimal performance for the CryptoVest platform.