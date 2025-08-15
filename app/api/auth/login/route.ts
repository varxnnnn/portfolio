import { NextRequest, NextResponse } from 'next/server'
import jwt from 'jsonwebtoken'
import connectDB from '@/lib/mongodb'
import User from '@/lib/models/User'

const JWT_SECRET = 'your-secret-key-change-in-production'

export async function POST(request: NextRequest) {
  try {
    const { userId, password } = await request.json()

    // Check hardcoded credentials
    if (userId === '615768' && password === 'Varun@540') {
      // Create or find user in database
      await connectDB()
      
      let user = await User.findOne({ userId })
      
      if (!user) {
        // Create new user if doesn't exist
        user = new User({
          userId,
          password: 'Varun@540' // Will be hashed by the model
        })
        await user.save()
      }

      // Generate JWT token
      const token = jwt.sign(
        { userId: user.userId, id: user._id },
        JWT_SECRET,
        { expiresIn: '24h' }
      )

      return NextResponse.json({
        success: true,
        token,
        user: {
          userId: user.userId
        }
      })
    }

    return NextResponse.json(
      { success: false, message: 'Invalid credentials' },
      { status: 401 }
    )
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    )
  }
}
