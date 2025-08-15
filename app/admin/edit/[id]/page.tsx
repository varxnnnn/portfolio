'use client'

import { useState, useEffect } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, ArrowLeft, Save } from 'lucide-react'
import Link from 'next/link'

interface PortfolioSection {
  _id: string
  sectionName: string
  title: string
  content: any
  lastUpdated: string
}

export default function EditSectionPage() {
  const [section, setSection] = useState<PortfolioSection | null>(null)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const params = useParams()

  useEffect(() => {
    checkAuth()
    fetchSection()
  }, [])

  const checkAuth = () => {
    const token = localStorage.getItem('authToken')
    if (!token) {
      router.push('/login')
    }
  }

  const fetchSection = async () => {
    try {
      const response = await fetch(`/api/sections/${params.id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        }
      })
      
      if (response.ok) {
        const data = await response.json()
        setSection(data.section)
        setTitle(data.section.title)
        setContent(JSON.stringify(data.section.content, null, 2))
      } else {
        setError('Failed to fetch section')
      }
    } catch (error) {
      setError('An error occurred while fetching the section')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSaving(true)

    try {
      let parsedContent
      try {
        parsedContent = JSON.parse(content)
      } catch {
        setError('Content must be valid JSON')
        setSaving(false)
        return
      }

      const response = await fetch(`/api/sections/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify({
          sectionName: section?.sectionName,
          title,
          content: parsedContent
        }),
      })

      if (response.ok) {
        router.push('/admin')
      } else {
        const errorData = await response.json()
        setError(errorData.message || 'Failed to update section')
      }
    } catch (err) {
      setError('An error occurred. Please try again.')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!section) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-white text-xl">Section not found</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      {/* Header */}
      <header className="bg-gray-900/95 border-b border-gray-800 px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/admin">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold">Edit Section</h1>
            <p className="text-gray-400 text-sm">
              Update content for {section.sectionName} section
            </p>
          </div>
        </div>
      </header>

      <div className="max-w-4xl mx-auto p-6">
        <Card className="bg-gray-900/50 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Section Information</CardTitle>
            <p className="text-gray-400 text-sm">
              Make changes to your portfolio section content
            </p>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="sectionName" className="text-white">
                    Section Name
                  </Label>
                  <Input
                    id="sectionName"
                    type="text"
                    value={section.sectionName}
                    className="bg-gray-700 border-gray-600 text-gray-300 cursor-not-allowed"
                    disabled
                  />
                  <p className="text-gray-400 text-xs">
                    Section name cannot be changed
                  </p>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="title" className="text-white">
                    Section Title *
                  </Label>
                  <Input
                    id="title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500"
                    placeholder="e.g., My Skills, Work Experience"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content" className="text-white">
                  Content (JSON) *
                </Label>
                <Textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-teal-500 font-mono text-sm"
                  placeholder="Enter JSON content for this section"
                  rows={15}
                  required
                />
                <p className="text-gray-400 text-xs">
                  Content must be valid JSON format. Make sure to maintain the proper structure.
                </p>
              </div>

              <div className="bg-gray-800/50 rounded-lg p-4">
                <h4 className="font-semibold text-white mb-2">Last Updated</h4>
                <p className="text-gray-300 text-sm">
                  {new Date(section.lastUpdated).toLocaleString()}
                </p>
              </div>

              {error && (
                <Alert className="border-red-500 bg-red-500/10">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <AlertDescription className="text-red-400">
                    {error}
                  </AlertDescription>
                </Alert>
              )}

              <div className="flex gap-4">
                <Button
                  type="submit"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-6"
                  disabled={saving}
                >
                  {saving ? 'Saving...' : (
                    <>
                      <Save className="w-4 h-4 mr-2" />
                      Save Changes
                    </>
                  )}
                </Button>
                
                <Link href="/admin">
                  <Button type="button" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                    Cancel
                  </Button>
                </Link>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
