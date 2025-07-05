"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function CareerPage() {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    // Trigger entrance animation after component mounts
    setTimeout(() => {
      setIsLoaded(true)
    }, 100)
  }, [])

  const handleHomeClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsTransitioning(true)

    // Wait for animation to complete before navigating
    setTimeout(() => {
      window.location.href = "/"
    }, 800)
  }

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Page Transition Overlay */}
      <div
        className={`fixed inset-0 z-50 bg-black transition-all duration-800 ease-in-out ${
          isTransitioning ? "opacity-100 scale-100" : "opacity-0 scale-150 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-white text-4xl font-bold animate-pulse">Loading Home...</div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ${
          isLoaded ? "scale-100 blur-0 opacity-100" : "scale-110 blur-md opacity-0"
        } ${isTransitioning ? "scale-110 blur-sm" : ""}`}
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-9ia6eDunJrVNBR7E2DifbnS2SRdvu9.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Developer Title */}
      <div
        className={`relative z-10 text-center pt-4 transition-all duration-1000 delay-200 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-20"
        } ${isTransitioning ? "opacity-0 -translate-y-20" : ""}`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">Developer</h2>
        <p className="text-gray-300 text-sm">Contributed to MPS Leagues</p>
        <p className="text-gray-400 text-xs mt-1">HTML • CSS • JS • Luau • C++ • Python</p>
      </div>

      {/* Navigation */}
      <nav
        className={`relative z-10 flex justify-center pt-6 md:pt-8 transition-all duration-1000 delay-300 ${
          isLoaded ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
        } ${isTransitioning ? "opacity-0 -translate-y-10" : ""}`}
      >
        <div className="flex space-x-8">
          <button
            onClick={handleHomeClick}
            className="text-white hover:text-gray-300 transition-colors duration-200 text-base font-normal bg-transparent border-none cursor-pointer hover:scale-110 hover:glow-white"
          >
            Home
          </button>
          <Link
            href="/career"
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 text-base font-normal hover:scale-110 hover:glow-cyan"
          >
            Career
          </Link>
        </div>
      </nav>

      {/* Career Content */}
      <div
        className={`relative z-10 max-w-4xl mx-auto px-6 md:px-8 py-12 transition-all duration-1000 delay-500 ${
          isLoaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-20 scale-95"
        } ${isTransitioning ? "opacity-0 scale-90 rotate-3" : ""}`}
      >
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-8 animate-glow-pulse">Career</h1>

          {/* MPS Career Section */}
          <div className="bg-black/20 backdrop-blur-sm border border-gray-400/20 rounded-lg p-8 mb-8 hover:bg-black/30 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">MPS Career</h2>

            {/* Achievements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-black/30 rounded-lg p-4 hover:bg-black/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-cyan-400 font-semibold mb-2">🏆 Champions League</h3>
                <p className="text-white text-2xl font-bold">5x Winner</p>
              </div>

              <div className="bg-black/30 rounded-lg p-4 hover:bg-black/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-cyan-400 font-semibold mb-2">🏆 UEFA Europa League</h3>
                <p className="text-white text-2xl font-bold">4x Winner</p>
              </div>

              <div className="bg-black/30 rounded-lg p-4 hover:bg-black/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-cyan-400 font-semibold mb-2">🏆 Premier League</h3>
                <p className="text-white text-2xl font-bold">1x Winner</p>
              </div>

              <div className="bg-black/30 rounded-lg p-4 hover:bg-black/40 transition-all duration-300 hover:scale-105">
                <h3 className="text-cyan-400 font-semibold mb-2">⚽ Ballon d'Or</h3>
                <p className="text-white text-2xl font-bold">2x Winner</p>
              </div>
            </div>

            {/* Next Target */}
            <div className="border-t border-gray-400/20 pt-6">
              <h3 className="text-xl font-semibold text-white mb-2">🎯 Next Target</h3>
              <p className="text-cyan-400 text-lg font-bold">EUROS / World Cup</p>
            </div>
          </div>

          {/* Development Skills */}
          <div className="bg-black/20 backdrop-blur-sm border border-gray-400/20 rounded-lg p-8 hover:bg-black/30 transition-all duration-300">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">Development Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="bg-black/30 rounded-lg p-3 hack-button cursor-pointer">
                <p className="text-cyan-400 font-semibold hack-text" data-text="HTML">
                  HTML
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-3 hack-button cursor-pointer">
                <p className="text-cyan-400 font-semibold hack-text" data-text="CSS">
                  CSS
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-3 hack-button cursor-pointer">
                <p className="text-cyan-400 font-semibold hack-text" data-text="JavaScript">
                  JavaScript
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-3 hack-button cursor-pointer">
                <p className="text-cyan-400 font-semibold hack-text" data-text="Luau">
                  Luau
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-3 hack-button cursor-pointer">
                <p className="text-cyan-400 font-semibold hack-text" data-text="C++">
                  C++
                </p>
              </div>
              <div className="bg-black/30 rounded-lg p-3 hack-button cursor-pointer">
                <p className="text-cyan-400 font-semibold hack-text" data-text="Python">
                  Python
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
