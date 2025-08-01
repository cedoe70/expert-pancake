import { NextRequest, NextResponse } from 'next/server'
import { storage } from '../../../lib/storage'
import { insertContactRequestSchema } from '../../../../shared/schema'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const validatedData = insertContactRequestSchema.parse(body)
    const contactRequest = await storage.createContactRequest(validatedData)
    
    return NextResponse.json({ 
      message: "Contact request submitted successfully",
      id: contactRequest.id
    }, { status: 201 })
  } catch (error) {
    console.error('Error creating contact request:', error)
    if (error instanceof Error) {
      return NextResponse.json(
        { message: error.message },
        { status: 400 }
      )
    } else {
      return NextResponse.json(
        { message: "Failed to submit contact request" },
        { status: 500 }
      )
    }
  }
}