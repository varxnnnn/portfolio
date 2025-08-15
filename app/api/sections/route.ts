import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'
import PortfolioSection from '@/lib/models/PortfolioSection'

const JWT_SECRET = 'your-secret-key-change-in-production'

// Middleware to verify JWT token
function verifyToken(authHeader: string | null) {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null
  }

  const token = authHeader.substring(7)
  
  try {
    return jwt.verify(token, JWT_SECRET) as any
  } catch (error) {
    return null
  }
}

export async function GET(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    const decoded = verifyToken(authHeader)
    
    if (!decoded) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }

    await connectDB()
    
    const sections = await PortfolioSection.find().sort({ sectionName: 1 })
    
    return NextResponse.json({
      success: true,
      sections
    })
  } catch (error) {
    console.error('Error fetching sections:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get('authorization')
    const decoded = verifyToken(authHeader)
    
    if (!decoded) {
      return NextResponse.json(
        { success: false, message: 'Unauthorized' },
        { status: 401 }
      )
    }

    const { sectionName, title, content } = await request.json()
    
    if (!sectionName || !title || !content) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      )
    }

    await connectDB()
    
    const section = new PortfolioSection({
      sectionName,
      title,
      content
    })
    
    await section.save()
    
    return NextResponse.json({
      success: true,
      section
    })
  } catch (error) {
    console.error('Error creating section:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
