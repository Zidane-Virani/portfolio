"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Navigation } from "@/components/navigation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/3 left-1/3 w-1.5 h-1.5 bg-purple-400 rounded-full animate-pulse delay-500"></div>
        </div>
        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Zidane Virani
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">ML Engineer & Software Engineering Student</p>
          <p className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
            Building scalable ML systems and automation pipelines. Passionate about AI, distributed systems, and solving
            real-world problems with code.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3">Get In Touch</Button>
            </Link>
            <Link href="/projects">
              <Button
                variant="outline"
                className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white px-8 py-3 bg-transparent"
              >
                View Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
