import { NextRequest, NextResponse } from 'next/server'
import connectDB from '@/lib/mongodb'
import PortfolioSection from '@/lib/models/PortfolioSection'

export async function GET(request: NextRequest) {
  try {
    await connectDB()
    
    const sections = await PortfolioSection.find().sort({ sectionName: 1 })
    
    // Transform the data to match the portfolio structure
    const portfolioData = {
      hero: sections.find(s => s.sectionName === 'hero')?.content || {},
      skills: sections.find(s => s.sectionName === 'skills')?.content || {},
      projects: sections.find(s => s.sectionName === 'projects')?.content || {},
      experience: sections.find(s => s.sectionName === 'experience')?.content || {},
      certifications: sections.find(s => s.sectionName === 'certifications')?.content || {},
      contact: sections.find(s => s.sectionName === 'contact')?.content || {}
    }
    
    return NextResponse.json({
      success: true,
      data: portfolioData
    })
  } catch (error) {
    console.error('Error fetching portfolio data:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
