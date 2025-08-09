'use client'

import { useEffect, useRef, useState } from 'react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { projectsData } from "@/lib/projects"

const projects = projectsData

export function OverlappingCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return
      
      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const containerHeight = container.offsetHeight
      const windowHeight = window.innerHeight
      
      // Calculate scroll progress based on container position
      const scrollStart = rect.top + window.scrollY - windowHeight
      const scrollEnd = scrollStart + containerHeight + windowHeight
      const currentScroll = window.scrollY
      
      const progress = Math.max(0, Math.min(1, (currentScroll - scrollStart) / (scrollEnd - scrollStart)))
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial call to set correct state
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate these values once per render cycle
  // Give first card 25% of scroll time, distribute remaining 75% among other cards
  const firstCardTime = 0.25;
  const remainingTime = 0.75;
  const otherCardsTime = remainingTime / (projects.slice(0, 5).length - 1);
  
  let activeCardIndex = 0;
  let progressInSegment = 0;
  
  if (scrollProgress <= firstCardTime) {
    // First card
    activeCardIndex = 0;
    progressInSegment = scrollProgress / firstCardTime;
  } else {
    // Other cards
    const adjustedProgress = scrollProgress - firstCardTime;
    activeCardIndex = Math.floor(adjustedProgress / otherCardsTime) + 1;
    progressInSegment = (adjustedProgress % otherCardsTime) / otherCardsTime;
    
    // Ensure we don't exceed the number of cards
    if (activeCardIndex >= projects.slice(0, 5).length) {
      activeCardIndex = projects.slice(0, 5).length - 1;
      progressInSegment = 1;
    }
  }

  return (
    <div ref={containerRef} className="relative min-h-[500vh] py-16">
      <div className="sticky top-0 h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-5xl h-[600px] card-stack">
          {projects.slice(0, 5).map((project, index) => {
            let translateY = 0;
            let opacity = 1;
            let scale = 1;
            let currentZIndex = projects.length - index; // Base z-index for stacking behind
            let pointerEvents: 'auto' | 'none' = 'none';

            // Default animation start threshold for subsequent cards
            let animationStartThreshold = 0.5; 

            // Special threshold for the first card's transition
            if (activeCardIndex === 0 && index === 1) {
              animationStartThreshold = 0.95; // Make the second card start animating later (95% through the first segment)
            }

            if (index < activeCardIndex) {
              // Past cards: visible, slightly scaled down, pushed back
              const offset = activeCardIndex - index;
              translateY = offset * -10; // Stack them slightly upwards
              scale = 1 - (offset * 0.02); // Slightly smaller
              opacity = 1; // Keep them visible
              currentZIndex = projects.length - offset; // Lower z-index
            } else if (index === activeCardIndex) {
              // Current active card: fully visible, static
              translateY = 0;
              opacity = 1;
              scale = 1;
              currentZIndex = projects.length + 1; // Highest z-index for the one being covered
              pointerEvents = 'auto';
            } else if (index === activeCardIndex + 1) {
              // Next card coming into view
              if (progressInSegment < animationStartThreshold) {
                // Before animation starts, keep it off-screen at the bottom
                translateY = 100; // Start 100px below its final position
                opacity = 0;
                scale = 1;
              } else {
                // Animate in
                const animationProgress = (progressInSegment - animationStartThreshold) / (1 - animationStartThreshold);
                translateY = (1 - animationProgress) * 100; // From 100px to 0px
                opacity = animationProgress; // From 0 to 1
                scale = 1;
              }
              currentZIndex = projects.length + 2; // Even higher z-index to come on top of the active card
            } else {
              // Future cards: initially off-screen, waiting their turn
              translateY = 200; // Far below
              opacity = 0;
              scale = 1;
              currentZIndex = projects.length - index; // Standard z-index for future cards
            }
            
            return (
              <Card
                key={project.id}
                className="absolute inset-0 bg-gray-900/95 border-gray-700 overflow-hidden backdrop-blur-sm shadow-2xl project-card"
                style={{
                  transform: `translateY(${translateY}px) scale(${scale})`,
                  opacity: opacity,
                  zIndex: currentZIndex,
                  transformOrigin: 'center center',
                  willChange: 'transform, opacity',
                  pointerEvents,
                }}
              >
                <CardContent className="p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse"></div>
                      <span className="text-teal-400 text-sm font-medium">Case Study #{project.id}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold mb-6 text-white leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-base md:text-lg mb-8 leading-relaxed max-w-2xl">
                      {project.description}
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
                    <div>
                      <div className="flex justify-between items-center mb-6 bg-gray-800/50 rounded-lg p-4 border border-gray-700/50">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-2">{project.metrics.label1}</div>
                          <div className="text-3xl font-bold text-white">{project.metrics.value1}</div>
                        </div>
                        <div className="w-px h-12 bg-gray-600"></div>
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-2">{project.metrics.label2}</div>
                          <div className="text-3xl font-bold text-white">{project.metrics.value2}</div>
                        </div>
                      </div>
                      {project.githubUrl ? (
                        <Button asChild className="w-full bg-white text-black hover:bg-gray-200 font-semibold py-3 transition-all duration-300 hover:scale-105 shadow-lg">
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
                          className="w-full bg-gray-600 text-gray-400 font-semibold py-3 cursor-not-allowed"
                        >
                          No Repository Available
                        </Button>
                      )}
                    </div>
                    
                    <div className="flex justify-center lg:justify-end">
                      <div className={`w-72 h-48 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden`}>
                        {/* Mockup content */}
                        <div className="absolute inset-4 bg-black/10 rounded-xl flex items-center justify-center backdrop-blur-sm">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                            <div className="w-8 h-8 border-2 border-white/60 rounded-full animate-pulse"></div>
                          </div>
                        </div>
                        {/* Floating elements */}
                        <div className="absolute top-4 right-4 w-4 h-4 bg-white/30 rounded-full animate-bounce"></div>
                        {/* Project number */}
                        <div className="absolute top-2 left-2 w-8 h-8 bg-black/30 rounded-full flex items-center justify-center">
                          <span className="text-white text-sm font-bold">{project.id}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
          {/* See all projects CTA - appears after the 5th card */}
          <div className="absolute -bottom-16 left-0 right-0 flex justify-center pointer-events-auto" style={{ zIndex: projects.length + 3 }}>
            <Button asChild variant="outline" className="bg-transparent border border-gray-500 text-white hover:bg-white/5 font-semibold px-6 py-3">
              <Link href="/projects">See all projects</Link>
            </Button>
          </div>
        </div>
        
        {/* Progress indicator - only visible when viewing projects section */}
        {scrollProgress > 0 && scrollProgress < 1 && (
          <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 pointer-events-none">
            <div className="flex flex-col gap-2">
              {projects.slice(0, 5).map((_, index) => {
                const isPassed = index < activeCardIndex;
                const isActive = index === activeCardIndex;
                
                return (
                  <div
                    key={index}
                    className={`w-1 h-6 rounded-full transition-all duration-300 progress-indicator ${
                      isPassed 
                        ? 'bg-gray-500 opacity-50' 
                        : isActive 
                          ? 'bg-teal-400 shadow-lg shadow-teal-400/50' 
                          : 'bg-gray-600'
                    }`}
                  />
                )
              })}
            </div>
          </div>
        )}
      </div>
      
    </div>
  )
}
