import { NextRequest, NextResponse } from 'next/server'
import { storage } from '../../../../lib/storage'

export async function GET(
  request: NextRequest,
  { params }: { params: { symbol: string } }
) {
  try {
    const { symbol } = params
    const cryptocurrency = await storage.getCryptocurrency(symbol.toUpperCase())
    
    if (!cryptocurrency) {
      return NextResponse.json(
        { message: "Cryptocurrency not found" },
        { status: 404 }
      )
    }
    
    const response = NextResponse.json(cryptocurrency)
    response.headers.set('Cache-Control', 'public, max-age=60')
    
    return response
  } catch (error) {
    console.error('Error fetching cryptocurrency:', error)
    return NextResponse.json(
      { message: "Failed to fetch cryptocurrency" },
      { status: 500 }
    )
  }
}