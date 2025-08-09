'use client'

export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Main animated gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/40 via-purple-900/20 via-pink-900/20 to-black/40 animate-gradient-shift"></div>
      
      {/* Floating gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-black/20 via-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-black/20 via-pink-500/30 to-blue-500/30 rounded-full blur-3xl animate-float-reverse"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-gradient-to-r from-black/20 via-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-float-diagonal"></div>
      
      {/* Additional smaller orbs for depth */}
      <div className="absolute top-1/6 right-1/3 w-48 h-48 bg-gradient-to-r from-black/15 via-purple-400/20 to-pink-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute bottom-1/4 left-1/6 w-56 h-56 bg-gradient-to-r from-black/15 via-pink-400/20 to-blue-400/20 rounded-full blur-2xl animate-float-up"></div>
      
      {/* Mesh gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-black/10 via-purple-500/5 to-black/10 animate-mesh-move"></div>
      <div className="absolute inset-0 bg-gradient-to-bl from-black/10 via-pink-500/5 to-black/10 animate-mesh-move-reverse"></div>
      <div className="absolute inset-0 bg-gradient-to-tl from-black/10 via-blue-500/5 to-black/10 animate-mesh-move-diagonal"></div>
    </div>
  )
}
