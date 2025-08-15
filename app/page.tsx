"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Menu, X, Mail, Github, Linkedin, Code2, Instagram } from 'lucide-react'
import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { AnimatedBackground } from "@/components/animated-background"
import { OverlappingCards } from "@/components/overlapping-cards"
import { ScrollIndicator } from "@/components/scroll-indicator"

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [portfolioData, setPortfolioData] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  
  // Fetch portfolio data from database
  useEffect(() => {
    const fetchPortfolioData = async () => {
      try {
        const response = await fetch('/api/portfolio')
        if (response.ok) {
          const data = await response.json()
          setPortfolioData(data.data)
        }
      } catch (error) {
        console.error('Error fetching portfolio data:', error)
      } finally {
        setLoading(false)
      }
    }
    
    fetchPortfolioData()
  }, [])
  
  // Fallback certificates data (in case database is not available)
  const fallbackCertificates = [
    {
      title: "Introduction to Modern AI",
      issuer: "Cisco Networking Academy",
      date: "Apr 4, 2025",
      image: "/certificates/cisco-modern-ai.png",
    },
    {
      title: "Python 101 for Data Science",
      issuer: "IBM SkillsBuild",
      date: "Apr 5, 2025",
      image: "/certificates/ibm-python-101.png",
    },
    {
      title: "PCAP - Programming Essentials in Python",
      issuer: "Cisco Networking Academy",
      date: "Jun 1, 2024",
      image: "/certificates/cisco-pcap.png",
    },
    {
      title: "Prompt Engineering Crash Course for Beginners",
      issuer: "Udemy",
      date: "Feb 27, 2025",
      image: "/certificates/udemy-prompt-engineering.png",
    },
  ]
  
  // Use database data or fallback
  const certificates = portfolioData?.certifications?.items || fallbackCertificates
  
  const CertificateImage = ({ src, alt }: { src: string; alt: string }) => {
    const [imgSrc, setImgSrc] = useState(src)
    return (
      <div className="bg-white/95 dark:bg-white rounded-t-xl p-3 border-b border-gray-200/20">
        <Image
          src={imgSrc}
          alt={alt}
          width={1200}
          height={900}
          className="w-full h-48 md:h-56 object-contain"
          onError={() => setImgSrc('/placeholder.jpg')}
        />
      </div>
    )
  }

  const CertificateCard = ({ title, issuer, date, image }: { title: string; issuer: string; date: string; image: string }) => (
    <Card className="group rounded-xl border border-gray-700/80 bg-[#111827] shadow-[0_8px_30px_rgb(0,0,0,0.25)] overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgb(0,0,0,0.35)]">
      <CertificateImage src={image} alt={title} />
      <CardContent className="pt-5 pb-5">
        <h3 className="font-serif text-lg text-white tracking-tight">{title}</h3>
        <Separator className="my-3 bg-gray-700/70" />
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-300">{issuer}</span>
          <span className="text-gray-500">{date}</span>
        </div>
      </CardContent>
    </Card>
  )

  if (loading) {
    return (
      <div className="min-h-screen bg-[#1a1a1a] flex items-center justify-center">
        <div className="text-white text-xl">Loading portfolio...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white content-layer">
      <AnimatedBackground />
      <ScrollIndicator />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#1a1a1a]/80 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/login" className="text-xl font-bold text-teal-400 hover:text-teal-300 transition-colors cursor-pointer">
                VK
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#hero" className="text-gray-300 hover:text-white text-sm">Home</Link>
                <Link href="#work" className="text-gray-300 hover:text-white text-sm">Projects</Link>
                <Link href="#skills" className="text-gray-300 hover:text-white text-sm">Skills</Link>
                <Link href="#experience" className="text-gray-300 hover:text-white text-sm">Education</Link>
                <Link href="#certifications" className="text-gray-300 hover:text-white text-sm">Certifications</Link>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white text-sm">Resume</a>
                <Link href="#contact" className="text-gray-300 hover:text-white text-sm">Contact</Link>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0a0a0a] border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link href="#hero" className="block px-3 py-2 text-gray-300 hover:text-white text-sm">Home</Link>
              <Link href="#work" className="block px-3 py-2 text-gray-300 hover:text-white text-sm">Projects</Link>
              <Link href="#skills" className="block px-3 py-2 text-gray-300 hover:text-white text-sm">Skills</Link>
              <Link href="#experience" className="block px-3 py-2 text-gray-300 hover:text-white text-sm">Education</Link>
              <Link href="#certifications" className="block px-3 py-2 text-gray-300 hover:text-white text-sm">Certifications</Link>
              <Link href="#contact" className="block px-3 py-2 text-gray-300 hover:text-white text-sm">Contact</Link>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="block px-3 py-2 text-gray-300 hover:text-white text-sm">Resume</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-64 h-64 mx-auto mb-4 rounded-full overflow-hidden border-2 border-teal-400">
                <Image
                  src="/images/varun-new.jpg"
                  alt="Varun Kumar"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              Meet {portfolioData?.hero?.name || 'Varun Kumar'}
            </h1>
            
            <p className="text-gray-400 text-lg mb-8 max-w-2xl mx-auto">
              {portfolioData?.hero?.description || 'Welcome to my world, My journey in tech has been shaped by hands-on experience in Android and cross-platform applications.I enjoy creating meaningful, user-focused solutions and have worked on projects involving AI integration, real-time databases, and secure authentication.'}
            </p>

            {/* Social Media Icons with Auto Scroll */}
            <div className="flex justify-center mb-8">
              <div className="relative overflow-hidden w-full max-w-md">
                <div className="flex space-x-8 animate-scroll">
                  <Link href="mailto:varunkumar615768@gmail.com" className="flex-shrink-0 group">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </Link>
                  <Link href="https://github.com/varxnnnn" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/varun-kumar40" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </Link>
                  <Link href="https://leetcode.com/u/varunkumar48/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Code2 className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </Link>
                  <Link href="https://instagram.com/_varxnnnn" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </Link>
                  {/* Duplicate icons for seamless scrolling */}
                  <Link href="mailto:varunkumar615768@gmail.com" className="flex-shrink-0 group">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Mail className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </Link>
                  <Link href="https://github.com/varxnnnn" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Github className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </Link>
                  <Link href="https://www.linkedin.com/in/varun-kumar40" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </Link>
                  <Link href="https://leetcode.com/u/varunkumar48/" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Code2 className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </Link>
                  <Link href="https://instagram.com/_varxnnnn" target="_blank" rel="noopener noreferrer" className="flex-shrink-0 group">
                    <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center group-hover:bg-teal-500 transition-colors duration-300">
                      <Instagram className="w-6 h-6 text-gray-300 group-hover:text-white" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work">
        <OverlappingCards />
      </section>



      {/* Skills Section */}
      <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Skills</h2>
          
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h3 className="text-white font-semibold md:w-40">Programming</h3>
              <div className="flex flex-wrap gap-3">
                {(portfolioData?.skills?.programming || ['Java', 'Python', 'JavaScript', 'Dart']).map((skill: string) => (
                  <Badge key={skill} variant="outline" className="bg-gray-800 border-gray-600 text-gray-300 py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h3 className="text-white font-semibold md:w-40">Frameworks</h3>
              <div className="flex flex-wrap gap-3">
                {(portfolioData?.skills?.frameworks || ['Flutter', 'React', 'Node.js']).map((skill: string) => (
                  <Badge key={skill} variant="outline" className="bg-gray-800 border-gray-600 text-gray-300 py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h3 className="text-white font-semibold md:w-40">Backend</h3>
              <div className="flex flex-wrap gap-3">
                {(portfolioData?.skills?.backend || ['MongoDB', 'Express', 'Firebase']).map((skill: string) => (
                  <Badge key={skill} variant="outline" className="bg-gray-800 border-gray-600 text-gray-300 py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h3 className="text-white font-semibold md:w-40">Tools</h3>
              <div className="flex flex-wrap gap-3">
                {(portfolioData?.skills?.tools || ['Git', 'Figma', 'Docker', 'Kubernetes', 'n8n']).map((skill: string) => (
                  <Badge key={skill} variant="outline" className="bg-gray-800 border-gray-600 text-gray-300 py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-3">
              <h3 className="text-white font-semibold md:w-40">Soft Skills</h3>
              <div className="flex flex-wrap gap-3">
                {(portfolioData?.skills?.softSkills || ['Leadership', 'Teamwork', 'Time Management', 'Communication']).map((skill: string) => (
                  <Badge key={skill} variant="outline" className="bg-gray-800 border-gray-600 text-gray-300 py-2 px-4">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="experience" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Education</h2>
          
          <div className="space-y-8">
            {(portfolioData?.experience?.education || [
              {
                degree: "B.Tech in Computer Science Engineering",
                institution: "Vignan Institute of Technology and Science",
                period: "2022 - 2026",
                description: "Computer Science Engineering"
              },
              {
                degree: "Intermediate",
                institution: "Rishi Junior College",
                period: "2020 - 2022",
                description: "GPA: 84%"
              },
              {
                degree: "Schooling",
                institution: "Prerana Brilliant High School",
                period: "2020",
                description: "GPA: 9.8"
              }
            ]).map((edu: any, index: number) => (
              <div key={index} className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold text-white">{edu.degree}</h3>
                  <p className="text-gray-400">{edu.institution}</p>
                  {edu.description && <p className="text-gray-500 text-sm">{edu.description}</p>}
                </div>
                <div className="text-right">
                  <p className="text-gray-400 text-sm">{edu.period}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certificates.map((cert: any) => (
              <CertificateCard
                key={cert.title}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                image={cert.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-white text-center">Get In Touch</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-semibold mb-6 text-white">Let's Connect</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, interesting projects, or just having a friendly chat about technology and development.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <a href={`mailto:${portfolioData?.contact?.email || 'varunkumar615768@gmail.com'}`} className="text-gray-400 hover:text-teal-400 transition-colors">
                      {portfolioData?.contact?.email || 'varunkumar615768@gmail.com'}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">LinkedIn</p>
                    <a href={portfolioData?.contact?.linkedin || "https://www.linkedin.com/in/varun-kumar40"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                      {portfolioData?.contact?.linkedin ? portfolioData.contact.linkedin.split('/').pop() : 'linkedin.com/in/varun-kumar40'}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <Github className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">GitHub</p>
                    <a href={portfolioData?.contact?.github || "https://github.com/varxnnnn"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                      {portfolioData?.contact?.github ? portfolioData.contact.github.split('/').pop() : 'github.com/varxnnnn'}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center">
                    <Code2 className="w-6 h-6 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">LeetCode</p>
                    <a href={portfolioData?.contact?.leetcode || "https://leetcode.com/u/varunkumar48/"} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                      {portfolioData?.contact?.leetcode ? portfolioData.contact.leetcode.split('/').pop() : 'leetcode.com/u/varunkumar48'}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your project or just say hello!"
                  ></textarea>
                </div>
                
                <Button className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 transition-colors">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div className="text-gray-400 text-sm">
              © 2025 Varun Kumar. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
