import { NextResponse } from 'next/server'
import { storage } from '../../../lib/storage'

export async function GET() {
  try {
    const cryptocurrencies = await storage.getCryptocurrencies()
    
    const response = NextResponse.json(cryptocurrencies)
    response.headers.set('Cache-Control', 'public, max-age=60')
    
    return response
  } catch (error) {
    console.error('Error fetching cryptocurrencies:', error)
    return NextResponse.json(
      { message: "Failed to fetch cryptocurrencies" },
      { status: 500 }
    )
  }
}