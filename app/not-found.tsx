import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AnimatedBackground } from "@/components/animated-background"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#2a2a2a] text-white">
      <AnimatedBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#2a2a2a]/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-teal-400">JS</Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="/#work" className="text-gray-300 hover:text-white text-sm">Work</Link>
                <Link href="/#experience" className="text-gray-300 hover:text-white text-sm">Experience</Link>
                <Link href="/#blog" className="text-gray-300 hover:text-white text-sm">Blog</Link>
                <Link href="/#faq" className="text-gray-300 hover:text-white text-sm">FAQ</Link>
                <Link href="/#proposal" className="text-gray-300 hover:text-white text-sm">Proposal</Link>
                <Link href="/#nicey" className="text-gray-300 hover:text-white text-sm">Nicey Studio</Link>
                <Link href="/#contact" className="text-gray-300 hover:text-white text-sm">Contact Creator</Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* 404 Content */}
      <div className="flex items-center justify-center min-h-screen px-4">
        <div className="text-center">
          <h1 className="text-8xl md:text-9xl font-light text-teal-400 mb-8">
            Oopsie
          </h1>
          <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link href="/">
            <Button 
              variant="link" 
              className="text-teal-400 hover:text-teal-300 underline text-base p-0"
            >
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
