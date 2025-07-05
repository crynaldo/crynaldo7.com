"use client"

import type React from "react"

import Link from "next/link"
import { useState, useEffect } from "react"

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false)
  const [currentTime, setCurrentTime] = useState("")
  const [githubText, setGithubText] = useState("Github")
  const [twitterText, setTwitterText] = useState("Twitter")
  const [discordText, setDiscordText] = useState("Discord")
  const [githubClicked, setGithubClicked] = useState(false)
  const [twitterClicked, setTwitterClicked] = useState(false)
  const [discordClicked, setDiscordClicked] = useState(false)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours().toString().padStart(2, "0")
      const minutes = now.getMinutes().toString().padStart(2, "0")
      setCurrentTime(`${hours}:${minutes}`)
    }

    // Update time immediately
    updateTime()

    // Update time every minute
    const interval = setInterval(updateTime, 60000)

    return () => clearInterval(interval)
  }, [])

  const handleCareerClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsTransitioning(true)

    // Wait for animation to complete before navigating
    setTimeout(() => {
      window.location.href = "/career"
    }, 800)
  }

  const handleGithubClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setGithubClicked(true)
    setGithubText("crynaldoreal@gmail.com")
    setTimeout(() => {
      setGithubText("Github")
      setGithubClicked(false)
    }, 1000)
  }

  const handleTwitterClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setTwitterClicked(true)
    setTwitterText("No twitter account yet :(")
    setTimeout(() => {
      setTwitterText("Twitter")
      setTwitterClicked(false)
    }, 1000)
  }

  const handleDiscordClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setDiscordClicked(true)
    setDiscordText("alba.1iq")
    setTimeout(() => {
      setDiscordText("Discord")
      setDiscordClicked(false)
    }, 1000)
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
          <div className="text-white text-4xl font-bold animate-pulse">Loading Career...</div>
        </div>
      </div>

      {/* Background Image */}
      <div
        className={`absolute inset-0 bg-cover bg-center bg-no-repeat animate-subtle-zoom transition-all duration-800 ${
          isTransitioning ? "scale-110 blur-sm" : "scale-100 blur-0"
        }`}
        style={{
          backgroundImage:
            "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image.png-9ia6eDunJrVNBR7E2DifbnS2SRdvu9.jpeg')",
        }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Developer Title */}
      <div
        className={`relative z-10 text-center pt-4 animate-fade-in-down transition-all duration-800 ${
          isTransitioning ? "opacity-0 -translate-y-20" : "opacity-100 translate-y-0"
        }`}
      >
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-2 hover:scale-105 transition-transform duration-300">
          Developer
        </h2>
        <p className="text-gray-300 text-sm animate-slide-in-left">Contributed to MPS Leagues</p>
        <p className="text-gray-400 text-xs mt-1 animate-slide-in-right">HTML • CSS • JS • Luau • C++ • Python</p>
      </div>

      {/* Navigation */}
      <nav
        className={`relative z-10 flex justify-center pt-6 md:pt-8 animate-fade-in transition-all duration-800 ${
          isTransitioning ? "opacity-0 -translate-y-10" : "opacity-100 translate-y-0"
        }`}
      >
        <div className="flex space-x-8">
          <Link
            href="/"
            className="text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-base font-normal hover:scale-110 hover:glow-cyan"
          >
            Home
          </Link>
          <button
            onClick={handleCareerClick}
            className="text-white hover:text-gray-300 transition-all duration-300 text-base font-normal hover:scale-110 hover:glow-white bg-transparent border-none cursor-pointer"
          >
            Career
          </button>
        </div>
      </nav>

      {/* Location and Time - Conditionally Rendered with Transition */}
      <div
        className={`relative z-10 text-center mt-8 transition-all duration-700 ease-out ${
          isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 -translate-y-8 scale-95 pointer-events-none"
        } ${isTransitioning ? "opacity-0 translate-x-20" : ""}`}
      >
        <p className="text-gray-400 text-sm animate-pulse-subtle">{`Portugal | ${currentTime}`}</p>
      </div>

      {/* Main Content */}
      <div
        className={`relative z-10 flex flex-col items-center justify-center min-h-[60vh] px-6 transition-all duration-800 ${
          isTransitioning ? "opacity-0 scale-90 rotate-3" : "opacity-100 scale-100 rotate-0"
        }`}
      >
        {/* Main Title - Always Visible */}
        <div className="text-center mb-8 animate-title-entrance">
          <h1
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-white leading-tight drop-shadow-2xl shadow-white/20 hover:scale-105 transition-all duration-500 cursor-default animate-glow-pulse"
            style={{
              textShadow:
                "0 0 20px rgba(255, 255, 255, 0.5), 0 0 40px rgba(255, 255, 255, 0.3), 0 0 60px rgba(255, 255, 255, 0.2)",
            }}
          >
            crynaldo
          </h1>
        </div>

        {/* Open/Close Button */}
        <div className="mb-4 animate-bounce-in">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-6 py-3 bg-black/30 border border-gray-400 rounded-full text-gray-300 hover:text-white hover:border-gray-300 transition-all duration-300 text-sm hover:scale-110 hover:bg-black/50 hover:shadow-lg hover:shadow-cyan-500/20 active:scale-95"
          >
            {isOpen ? "Close" : "Open"}
          </button>
        </div>

        {/* Scrolling Role Text - Conditionally Rendered with Transition */}
        <div
          className={`w-80 max-w-full mb-8 transition-all duration-700 ease-out ${
            isOpen
              ? "opacity-100 translate-y-0 scale-100 rotate-0"
              : "opacity-0 translate-y-8 scale-90 rotate-3 pointer-events-none"
          }`}
        >
          <div className="border border-gray-400 rounded-full px-4 py-2 overflow-hidden bg-black/20 hover:bg-black/30 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="scrolling-text whitespace-nowrap">
              <span className="text-gray-300 text-sm font-mono hover:text-cyan-300 transition-colors duration-300">
                C-End Developer | Game Programmer | Tech Enthusiast | Creative Coder |
              </span>
            </div>
          </div>
        </div>

        {/* Greeting - Conditionally Rendered with Transition */}
        <div
          className={`text-center mb-6 transition-all duration-700 ease-out delay-100 ${
            isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-6 scale-90 pointer-events-none"
          }`}
        >
          <p className="text-gray-300 text-base italic hover:text-white transition-colors duration-300 hover:scale-110 cursor-default">
            yo yo
          </p>
        </div>

        {/* Message - Conditionally Rendered with Transition */}
        <div
          className={`text-center mb-12 max-w-md transition-all duration-700 ease-out delay-200 ${
            isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95 pointer-events-none"
          }`}
        >
          <p className="text-gray-400 text-sm leading-relaxed hover:text-gray-300 transition-colors duration-300">
            Welcome to my website, yes this is the real crynaldo_7 website, the other ones are fake
          </p>
        </div>

        {/* Social Links and Contact - Conditionally Rendered with Transition */}
        <div
          className={`text-center transition-all duration-700 ease-out delay-300 ${
            isOpen ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-90 pointer-events-none"
          }`}
        >
          <div className="flex justify-center items-center gap-2 mb-4">
            <button
              onClick={handleGithubClick}
              className={`text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm cursor-pointer bg-transparent border-none hover:scale-110 active:scale-95 ${
                githubClicked ? "animate-click-flash scale-110 text-white" : ""
              }`}
            >
              {githubText}
            </button>
            <span className="text-gray-500 text-sm animate-pulse-subtle">-</span>
            <button
              onClick={handleTwitterClick}
              className={`text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm cursor-pointer bg-transparent border-none hover:scale-110 active:scale-95 ${
                twitterClicked ? "animate-click-flash scale-110 text-white" : ""
              }`}
            >
              {twitterText}
            </button>
            <span className="text-gray-500 text-sm animate-pulse-subtle">-</span>
            <button
              onClick={handleDiscordClick}
              className={`text-cyan-400 hover:text-cyan-300 transition-all duration-300 text-sm cursor-pointer bg-transparent border-none hover:scale-110 active:scale-95 ${
                discordClicked ? "animate-click-flash scale-110 text-white" : ""
              }`}
            >
              {discordText}
            </button>
          </div>
          <p className="text-gray-400 text-sm hover:text-gray-300 transition-colors duration-300 hover:scale-105 cursor-default">
            crynaldoreal@gmail.com
          </p>
        </div>
      </div>
    </div>
  )
}
