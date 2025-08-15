'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  Edit, 
  Plus, 
  Trash2, 
  LogOut, 
  Settings, 
  User, 
  Briefcase, 
  GraduationCap, 
  Award,
  MessageSquare,
  Home
} from 'lucide-react'
import Link from 'next/link'

interface PortfolioSection {
  _id: string
  sectionName: string
  title: string
  content: any
  lastUpdated: string
}

export default function AdminDashboard() {
  const [sections, setSections] = useState<PortfolioSection[]>([])
  const [selectedSection, setSelectedSection] = useState<PortfolioSection | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    checkAuth()
    fetchSections()
  }, [])

  const checkAuth = () => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      router.push('/login')
    }
  }

  const fetchSections = async () => {
    try {
      const response = await fetch('/api/sections', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setSections(data.sections)
      }
    } catch (error) {
      console.error('Error fetching sections:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleLogout = () => {
    localStorage.removeItem('authToken')
    router.push('/login')
  }

  const handleSectionSelect = (section: PortfolioSection) => {
    setSelectedSection(section)
  }

  const handleEditSection = (sectionId: string) => {
    router.push(`/admin/edit/${sectionId}`)
  }



  const handleDeleteSection = async (sectionId: string) => {
    if (confirm('Are you sure you want to delete this section?')) {
      try {
        const response = await fetch(`/api/sections/${sectionId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('authToken')}`
          }
        })
        
        if (response.ok) {
          fetchSections()
          if (selectedSection?._id === sectionId) {
            setSelectedSection(null)
          }
        }
      } catch (error) {
        console.error('Error deleting section:', error)
      }
    }
  }

  const sectionIcons = {
    hero: Home,
    skills: Settings,
    projects: Briefcase,
    experience: GraduationCap,
    certifications: Award,
    contact: MessageSquare
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="bg-gray-900/95 border-b border-gray-800 px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-teal-500 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold">Admin Dashboard</h1>
              <p className="text-gray-400 text-sm">Manage your portfolio content</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                <Home className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </Link>
            <Button onClick={handleLogout} variant="outline" className="border-red-600 text-red-400 hover:bg-red-600/10">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-80 bg-gray-900/50 border-r border-gray-800 min-h-screen p-6">
          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-4">Portfolio Sections</h2>
            <p className="text-sm text-gray-400 mb-4">Edit existing sections to update your portfolio</p>
          </div>

          <div className="space-y-2">
            {sections.map((section) => {
              const Icon = sectionIcons[section.sectionName as keyof typeof sectionIcons] || Settings
              return (
                <Card
                  key={section._id}
                  className={`cursor-pointer transition-all ${
                    selectedSection?._id === section._id
                      ? 'bg-teal-600/20 border-teal-500'
                      : 'bg-gray-800/50 border-gray-700 hover:bg-gray-800'
                  }`}
                  onClick={() => handleSectionSelect(section)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-teal-400" />
                      <div className="flex-1">
                        <h3 className="font-medium capitalize">{section.sectionName}</h3>
                        <p className="text-sm text-gray-400">{section.title}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          {selectedSection ? (
            <div>
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold capitalize">{selectedSection.sectionName}</h2>
                  <p className="text-gray-400">{selectedSection.title}</p>
                </div>
                <div className="flex gap-2">
                  <Button onClick={() => handleEditSection(selectedSection._id)} className="bg-teal-600 hover:bg-teal-700">
                    <Edit className="w-4 h-4 mr-2" />
                    Edit Section
                  </Button>
                  <Button 
                    onClick={() => handleDeleteSection(selectedSection._id)} 
                    variant="outline" 
                    className="border-red-600 text-red-400 hover:bg-red-600/10"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Delete
                  </Button>
                </div>
              </div>

              <Card className="bg-gray-900/50 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-white">Section Content</CardTitle>
                  <p className="text-gray-400 text-sm">
                    Last updated: {new Date(selectedSection.lastUpdated).toLocaleDateString()}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Section Name</h4>
                      <Badge variant="outline" className="bg-gray-800 border-gray-600 text-gray-300">
                        {selectedSection.sectionName}
                      </Badge>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">Title</h4>
                      <p className="text-gray-300">{selectedSection.title}</p>
                    </div>

                    <Separator className="bg-gray-700" />

                    <div>
                      <h4 className="font-semibold text-white mb-2">Content Preview</h4>
                      <div className="bg-gray-800/50 rounded-lg p-4 max-h-96 overflow-y-auto">
                        <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                          {JSON.stringify(selectedSection.content, null, 2)}
                        </pre>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-6">
                <Settings className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-300 mb-2">Select a Section</h3>
              <p className="text-gray-500">
                Choose a section from the sidebar to view and edit its content
              </p>
            </div>
          )}
        </main>
      </div>
    </div>
  )
}
