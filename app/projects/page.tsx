"use client"

import { projectsData } from "@/lib/projects"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white content-layer pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-baseline justify-between mb-8">
          <h1 className="text-3xl font-bold">All Projects</h1>
          <Link href="/#work">
            <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800">Back to portfolio</Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project) => (
            <Card key={project.id} className="bg-gray-900/95 border-gray-700 overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className={`w-full h-40 bg-gradient-to-br ${project.gradient} rounded-xl flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                    <div className="absolute inset-4 bg-black/10 rounded-xl" />
                    <span className="absolute top-2 left-2 text-xs font-semibold text-white bg-black/30 rounded-full px-2 py-1">#{project.id}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4">{project.description}</p>
                <div className="flex items-center justify-between text-sm bg-gray-800/50 rounded-lg p-3 border border-gray-700/50 mb-4">
                  <div>
                    <div className="text-xs text-gray-500">{project.metrics.label1}</div>
                    <div className="font-semibold text-white">{project.metrics.value1}</div>
                  </div>
                  <div className="w-px h-8 bg-gray-600" />
                  <div>
                    <div className="text-xs text-gray-500">{project.metrics.label2}</div>
                    <div className="font-semibold text-white">{project.metrics.value2}</div>
                  </div>
                </div>
                {project.githubUrl ? (
                  <Button asChild className="w-full bg-teal-600 hover:bg-teal-700 text-white text-sm py-2">
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      View GitHub Repo →
                    </a>
                  </Button>
                ) : (
                  <Button 
                    disabled
                    className="w-full bg-gray-600 text-gray-400 text-sm py-2 cursor-not-allowed"
                  >
                    No Repository Available
                  </Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}


