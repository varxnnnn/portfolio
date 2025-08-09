import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface ProjectCardProps {
  title: string
  description: string
  image: string
  metrics: {
    label1: string
    value1: string
    label2: string
    value2: string
  }
}

export function ProjectCard({ title, description, image, metrics }: ProjectCardProps) {
  return (
    <Card className="bg-gray-900 border-gray-800 overflow-hidden hover:border-gray-700 transition-colors">
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-4 text-white">
          {title}
        </h3>
        <p className="text-gray-400 text-sm mb-6 leading-relaxed">
          {description}
        </p>
        <div className="mb-6">
          <div className="w-full h-48 bg-gradient-to-br from-teal-500 to-blue-600 rounded-lg flex items-center justify-center">
            <div className="w-24 h-24 bg-black/20 rounded-full flex items-center justify-center">
              <div className="w-16 h-16 border-2 border-white/30 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mb-4">
          <div>
            <div className="text-xs text-gray-500 mb-1">{metrics.label1}</div>
            <div className="text-2xl font-bold text-white">{metrics.value1}</div>
          </div>
          <div>
            <div className="text-xs text-gray-500 mb-1">{metrics.label2}</div>
            <div className="text-2xl font-bold text-white">{metrics.value2}</div>
          </div>
        </div>
        <Button variant="outline" size="sm" className="border-gray-600 text-white hover:bg-gray-800">
          View case study
        </Button>
      </CardContent>
    </Card>
  )
}
