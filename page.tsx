"use client"

import { Button } from "@/components/ui/button"
import { Upload, Brain, BookOpen, FileText, Search, Users, Target, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <div
        className="fixed inset-0 pointer-events-none opacity-15 mix-blend-multiply"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 30%, rgba(0,0,0,0.3) 1px, transparent 1px),
            radial-gradient(circle at 80% 70%, rgba(0,0,0,0.2) 1px, transparent 1px),
            radial-gradient(circle at 40% 80%, rgba(0,0,0,0.25) 1px, transparent 1px),
            linear-gradient(45deg, transparent 48%, rgba(0,0,0,0.1) 49%, rgba(0,0,0,0.1) 51%, transparent 52%),
            linear-gradient(-45deg, transparent 48%, rgba(0,0,0,0.08) 49%, rgba(0,0,0,0.08) 51%, transparent 52%)
          `,
          backgroundSize: "30px 30px, 45px 45px, 25px 25px, 15px 15px, 20px 20px",
          filter: "blur(0.5px) contrast(1.2)",
        }}
      />

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={`splatter-${i}`}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
            }}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" className="text-black">
              <path
                d={`M20,20 Q${15 + Math.random() * 10},${10 + Math.random() * 10} ${25 + Math.random() * 10},${15 + Math.random() * 10} Q${30 + Math.random() * 5},${20 + Math.random() * 10} ${20 + Math.random() * 15},${25 + Math.random() * 10} Q${10 + Math.random() * 10},${30 + Math.random() * 5} 20,20`}
                fill="currentColor"
                opacity="0.6"
              />
            </svg>
          </div>
        ))}
      </div>

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
              filter: "blur(0.3px)",
            }}
          >
            <svg width="20" height="40" viewBox="0 0 20 40" className="text-gray-300">
              <path
                d="M10 0C15 10 20 20 10 40C5 20 0 10 10 0Z"
                fill="currentColor"
                stroke="black"
                strokeWidth="1"
                style={{
                  filter: "drop-shadow(1px 1px 2px rgba(0,0,0,0.3))",
                }}
              />
            </svg>
          </div>
        ))}

        {[...Array(8)].map((_, i) => (
          <div
            key={`line-${i}`}
            className="absolute opacity-10"
            style={{
              left: `${i * 15}%`,
              top: `${20 + i * 10}%`,
              width: "200px",
              height: "3px",
              background: `linear-gradient(90deg, transparent, black, transparent)`,
              transform: `rotate(${-20 + i * 5}deg)`,
              animation: `slide ${4 + i}s linear infinite`,
              filter: "blur(0.5px)",
              borderRadius: "50%",
            }}
          />
        ))}
      </div>

      <div
        className="fixed inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, black 1px, transparent 0)`,
          backgroundSize: "20px 20px",
        }}
      ></div>

      <nav
        className="border-4 border-black bg-white shadow-xl relative"
        style={{ filter: "drop-shadow(3px 3px 6px rgba(0,0,0,0.3))" }}
      >
        <div
          className="absolute inset-0 bg-gradient-to-r from-white via-gray-50 to-white"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(0,0,0,0.1) 1px, transparent 1px)`,
            backgroundSize: "15px 15px",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12" style={{ filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.4))" }}>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full border-2 border-black"
                  style={{
                    backgroundImage: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.3) 2px, transparent 2px)`,
                    backgroundSize: "8px 8px",
                  }}
                ></div>
                <div className="absolute inset-1 bg-gradient-to-tr from-yellow-300 to-orange-400 rounded-full"></div>
                <div className="absolute inset-3 bg-gradient-to-bl from-red-500 to-pink-500 rounded-full"></div>
                <div className="absolute top-2 left-2 w-2 h-2 bg-gradient-to-r from-cyan-300 to-green-300 rounded-full"></div>
              </div>
              <span
                className="text-3xl font-black bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent tracking-wider"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(0,0,0,0.3))",
                  textShadow: "1px 1px 2px rgba(0,0,0,0.2)",
                }}
              >
                ASTRA
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <div className="border-2 border-black bg-white px-4 py-2 transform hover:scale-105 transition-transform shadow-lg">
                <Link
                  href="#features"
                  className="text-gray-800 hover:text-blue-600 transition-colors text-sm font-bold uppercase tracking-wide"
                >
                  Features
                </Link>
              </div>
              <div className="border-2 border-black bg-white px-4 py-2 transform hover:scale-105 transition-transform shadow-lg">
                <Link
                  href="#demo"
                  className="text-gray-800 hover:text-green-600 transition-colors text-sm font-bold uppercase tracking-wide"
                >
                  Demo Account
                </Link>
              </div>
              <div className="border-2 border-black bg-white px-4 py-2 transform hover:scale-105 transition-transform shadow-lg">
                <Link
                  href="#about"
                  className="text-gray-800 hover:text-purple-600 transition-colors text-sm font-bold uppercase tracking-wide"
                >
                  About Us
                </Link>
              </div>
              <Button
                size="lg"
                className="bg-black text-white border-2 border-black font-bold text-sm uppercase tracking-wide transform hover:scale-105 shadow-lg"
              >
                Sign Up
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute top-0 right-0 w-32 h-full overflow-hidden opacity-15">
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-black transform rotate-12"
                style={{
                  width: `${20 + i * 10}px`,
                  height: "2px",
                  top: `${10 + i * 8}px`,
                  right: `${i * 5}px`,
                  animation: `pulse ${2 + i * 0.3}s ease-in-out infinite`,
                  borderRadius: "50%",
                  filter: "blur(0.3px)",
                }}
              />
            ))}
          </div>
        </div>
      </nav>

      <section className="py-12 px-4 max-w-4xl mx-auto">
        <div
          className="relative border-4 border-black bg-white shadow-2xl"
          style={{
            filter: "drop-shadow(5px 5px 10px rgba(0,0,0,0.3))",
            borderImage: `url("data:image/svg+xml,%3csvg width='100' height='100' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='m0,0 l100,0 l100,100 l0,100 z' stroke='black' strokeWidth='4' fill='none' strokeDasharray='2,1'/%3e%3c/svg%3e") 4`,
          }}
        >
          <div className="absolute inset-0 overflow-hidden opacity-5">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-black"
                style={{
                  width: "2px",
                  height: `${100 + Math.random() * 200}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  transform: `rotate(${-45 + Math.random() * 90}deg)`,
                  opacity: Math.random() * 0.3,
                }}
              />
            ))}
          </div>

          <div className="relative p-8">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 bg-black border-2 border-black rounded-lg flex items-center justify-center shadow-lg">
                <BookOpen className="w-8 h-8 text-orange-200" />
              </div>
              <div className="flex-1">
                <h1 className="text-4xl font-black text-blue-900 mb-4 tracking-wide drop-shadow-lg">
                  WELCOME, DEAR STUDENT!
                </h1>
                <div className="relative bg-white border-3 border-black rounded-2xl p-6 shadow-xl">
                  <p className="text-lg text-gray-800 font-medium leading-relaxed">
                    "Astra is here to kick-start your study in a more smart and efficient way!"
                  </p>
                  <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-8 border-r-8 border-t-12 border-l-transparent border-r-transparent border-t-black"></div>
                  <div className="absolute -bottom-3 left-8 w-0 h-0 border-l-6 border-r-6 border-t-9 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </div>
            </div>

            <div className="border-3 border-black bg-gray-50 p-6 mb-6 shadow-xl">
              <h2 className="text-2xl font-black text-purple-900 mb-6 text-center tracking-wide drop-shadow-lg">
                DOCUMENT ANALYZER
              </h2>

              <div className="bg-white border-2 border-black rounded p-6 mb-4 shadow-lg">
                <div
                  className="border-2 border-dashed border-gray-400 rounded p-8 text-center hover:border-black transition-colors cursor-pointer shadow-inner"
                  id="upload-area"
                  onClick={() => document.getElementById("file-input")?.click()}
                  onDragOver={(e) => {
                    e.preventDefault()
                    e.currentTarget.classList.add("border-black", "bg-gray-50")
                  }}
                  onDragLeave={(e) => {
                    e.currentTarget.classList.remove("border-black", "bg-gray-50")
                  }}
                  onDrop={(e) => {
                    e.preventDefault()
                    e.currentTarget.classList.remove("border-black", "bg-gray-50")
                    const files = e.dataTransfer.files
                    if (files.length > 0) {
                      handleFileUpload(files[0])
                    }
                  }}
                >
                  <Upload className="w-12 h-12 text-blue-400 mx-auto mb-4 drop-shadow-lg" />
                  <p className="text-lg font-bold text-gray-800 mb-2">Drag & Drop Your Document</p>
                  <p className="text-sm text-gray-600">Or click to browse files</p>
                  <p className="text-xs text-gray-500 mt-2">Supports PDF, TXT, DOCX files</p>
                </div>
                <input
                  type="file"
                  id="file-input"
                  className="hidden"
                  accept=".pdf,.txt,.docx"
                  onChange={(e) => {
                    if (e.target.files && e.target.files[0]) {
                      handleFileUpload(e.target.files[0])
                    }
                  }}
                />
              </div>

              <Button
                className="w-full bg-black text-white border-2 border-black font-bold text-lg py-3 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl"
                id="analyze-btn"
                onClick={handleAnalyze}
              >
                <Brain className="w-5 h-5 mr-2 text-green-200" />
                ANALYZE DOCUMENT
              </Button>

              <div className="bg-white border-2 border-black rounded p-4 mt-4 hidden shadow-xl" id="results-panel">
                <h3 className="text-xl font-bold text-red-900 mb-3 drop-shadow-lg">AI Analysis Results</h3>
                <div id="analysis-content" className="space-y-3">
                  {/* Results will be populated here */}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Button
                size="lg"
                className="bg-white text-gray-800 border-2 border-black font-bold text-lg py-4 transform hover:scale-105 shadow-xl"
              >
                <Upload className="w-5 h-5 mr-2 text-orange-400" />
                UPLOAD DOCUMENTS
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="bg-black text-white border-2 border-black font-bold text-lg py-4 transform hover:scale-105 shadow-xl"
              >
                <Search className="w-5 h-5 mr-2 text-yellow-200" />
                GET EXPLANATION
              </Button>
            </div>
          </div>

          <div className="absolute top-4 right-4 text-red-700 font-black text-sm transform rotate-12 drop-shadow-lg">
            POW!
          </div>
          <div className="absolute bottom-4 left-4 text-blue-700 font-black text-sm transform -rotate-12 drop-shadow-lg">
            SMART!
          </div>
          <div className="absolute top-1/2 right-8 text-green-700 font-black text-xs transform rotate-45 opacity-60">
            ZAP!
          </div>
        </div>
      </section>

      <section id="features" className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-black mb-6 text-green-900 tracking-wide drop-shadow-lg">CORE FEATURES</h2>
          <div className="bg-white border-2 border-black rounded-lg p-4 inline-block shadow-xl">
            <p className="text-xl text-gray-800 font-medium">Discover the power of AI-driven learning!</p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="border-4 border-black bg-white shadow-2xl transform hover:rotate-1 transition-transform">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-black border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Brain className="w-10 h-10 text-blue-200" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-blue-900 drop-shadow-lg">AI CHATBOT</h3>
                <div className="bg-gray-50 border-2 border-black rounded-lg p-4 mb-4 shadow-lg">
                  <p className="text-gray-800 font-medium text-sm">
                    Engage with our AI companion for instant explanations and personalized learning!
                  </p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-black text-white border-2 border-black font-bold transform hover:scale-105 shadow-lg"
                >
                  START CHAT
                </Button>
              </div>
            </div>
          </div>

          <div className="border-4 border-black bg-white shadow-2xl transform hover:-rotate-1 transition-transform">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-black border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <FileText className="w-10 h-10 text-orange-200" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-orange-900 drop-shadow-lg">SHORT NOTES</h3>
                <div className="bg-gray-50 border-2 border-black rounded-lg p-4 mb-4 shadow-lg">
                  <p className="text-gray-800 font-medium text-sm">
                    Transform complex documents into bite-sized notes perfect for quick review!
                  </p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-black text-white border-2 border-black font-bold transform hover:scale-105 shadow-lg"
                >
                  CREATE NOTES
                </Button>
              </div>
            </div>
          </div>

          <div className="border-4 border-black bg-white shadow-2xl transform hover:rotate-1 transition-transform">
            <div className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-black border-2 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <Search className="w-10 h-10 text-green-200" />
                </div>
                <h3 className="text-2xl font-black mb-4 text-green-900 drop-shadow-lg">SEARCH & DISCOVER</h3>
                <div className="bg-gray-50 border-2 border-black rounded-lg p-4 mb-4 shadow-lg">
                  <p className="text-gray-800 font-medium text-sm">
                    Search through documents and discover amazing online resources for learning!
                  </p>
                </div>
                <Button
                  size="sm"
                  className="w-full bg-black text-white border-2 border-black font-bold transform hover:scale-105 shadow-lg"
                >
                  START SEARCH
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="demo"
        className="py-16 bg-gradient-to-br from-yellow-100 via-orange-100 to-red-100 relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute"
              style={{
                left: `${i * 20}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${4 + i}s ease-in-out infinite`,
                animationDelay: `${i * 0.5}s`,
              }}
            >
              <svg width="60" height="60" viewBox="0 0 60 60" className="text-black">
                <circle
                  cx="30"
                  cy="30"
                  r="25"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeDasharray="5,5"
                />
              </svg>
            </div>
          ))}
        </div>

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <div className="relative inline-block mb-8">
            <h2 className="text-6xl font-black text-red-900 transform -skew-x-12 drop-shadow-xl">
              CREATE DEMO ACCOUNT
            </h2>
            <div className="absolute -top-6 -right-6 bg-red-500 border-4 border-black px-4 py-2 transform rotate-12 shadow-xl">
              <span className="text-white font-black text-xl">FREE!</span>
            </div>
          </div>

          <div className="relative bg-white border-4 border-black rounded-lg p-4 inline-block shadow-lg mb-8">
            <p className="text-xl text-gray-800 font-bold">
              Experience the FULL POWER of Astra with a free demo account!
            </p>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative border-4 border-black bg-gradient-to-br from-cyan-200 to-blue-300 shadow-2xl transform -rotate-2">
              <div className="p-6">
                <h3 className="text-3xl font-black mb-4 text-blue-900 transform -skew-x-6 drop-shadow-lg">
                  DEMO FEATURES
                </h3>
                <ul className="text-left space-y-3 text-gray-800 font-bold">
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-500 border-2 border-black rounded-full"></div>
                    Upload up to 5 documents
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-yellow-400 border-2 border-black rounded-full"></div>
                    Generate 10 AI-powered notes
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-500 border-2 border-black rounded-full"></div>
                    Access to chatbot conversations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-purple-500 border-2 border-black rounded-full"></div>
                    Search and discovery tools
                  </li>
                </ul>
              </div>
              <div className="absolute top-2 right-2 bg-yellow-400 border-2 border-black px-2 py-1 text-xs font-black text-yellow-900 transform rotate-12 shadow-lg">
                EPIC!
              </div>
            </div>

            <div className="relative border-4 border-black bg-gradient-to-br from-pink-200 to-purple-300 shadow-2xl transform rotate-2">
              <div className="p-6">
                <h3 className="text-3xl font-black mb-4 text-purple-900 transform -skew-x-6 drop-shadow-lg">
                  QUICK SETUP
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-800 font-bold">
                    <div className="w-10 h-10 bg-red-500 border-4 border-black rounded-full flex items-center justify-center text-white font-black text-lg">
                      1
                    </div>
                    <span>Enter your email address</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-800 font-bold">
                    <div className="w-10 h-10 bg-yellow-400 border-4 border-black rounded-full flex items-center justify-center text-black font-black text-lg">
                      2
                    </div>
                    <span>Verify your account</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-800 font-bold">
                    <div className="w-10 h-10 bg-green-500 border-4 border-black rounded-full flex items-center justify-center text-white font-black text-lg">
                      3
                    </div>
                    <span>Start learning immediately</span>
                  </div>
                </div>
              </div>
              <div className="absolute bottom-2 left-2 bg-orange-400 border-2 border-black px-2 py-1 text-xs font-black text-orange-900 transform -rotate-12 shadow-lg">
                EASY!
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="relative">
              <Button
                size="lg"
                className="text-xl px-8 py-6 bg-red-500 text-white border-4 border-black font-black transform hover:scale-105 shadow-lg"
              >
                <Upload className="w-5 h-5 mr-2" />
                CREATE FREE DEMO!
              </Button>
              <div className="absolute -top-3 -right-3 bg-yellow-400 border-2 border-black px-2 py-1 text-xs font-black transform rotate-12 shadow-lg">
                NOW!
              </div>
            </div>
            <Button
              variant="outline"
              size="lg"
              className="text-xl px-8 py-6 border-4 border-black bg-white text-black font-black transform hover:scale-105 shadow-lg"
            >
              SCHEDULE LIVE DEMO
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <h2 className="text-6xl font-black mb-6 text-purple-900 transform -skew-x-12 drop-shadow-xl">ABOUT US</h2>
              <div className="absolute -top-4 -left-4 bg-blue-500 border-4 border-black px-4 py-2 transform -rotate-12 shadow-xl">
                <span className="text-white font-black text-lg">TEAM!</span>
              </div>
            </div>
            <div className="relative bg-white border-4 border-black rounded-lg p-4 inline-block shadow-lg">
              <p className="text-xl text-gray-800 font-bold">
                Revolutionizing education through the POWER of artificial intelligence!
              </p>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
              <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white"></div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="relative border-4 border-black bg-gradient-to-br from-red-200 to-orange-300 shadow-2xl transform -rotate-1">
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Target className="w-10 h-10 text-red-600" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-red-900 transform -skew-x-6 drop-shadow-lg">
                  OUR MISSION
                </h3>
                <div className="relative bg-white border-4 border-black rounded-lg p-3 shadow-lg">
                  <p className="text-gray-800 font-bold text-sm">
                    To make learning more ACCESSIBLE, efficient, and engaging through cutting-edge AI technology!
                  </p>
                  <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
                  <div className="absolute -bottom-1 left-6 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </div>
            </div>

            <div className="relative border-4 border-black bg-gradient-to-br from-green-200 to-cyan-300 shadow-2xl transform rotate-1">
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Users className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-green-900 transform -skew-x-6 drop-shadow-lg">OUR TEAM</h3>
                <div className="relative bg-white border-4 border-black rounded-lg p-3 shadow-lg">
                  <p className="text-gray-800 font-bold text-sm">
                    A passionate group of educators, AI researchers, and developers dedicated to TRANSFORMING education!
                  </p>
                  <div className="absolute -bottom-2 right-6 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-black"></div>
                  <div className="absolute -bottom-1 right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </div>
            </div>

            <div className="relative border-4 border-black bg-gradient-to-br from-purple-200 to-pink-300 shadow-2xl transform -rotate-2">
              <div className="p-6 text-center">
                <div className="w-20 h-20 bg-white border-4 border-black rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <Award className="w-10 h-10 text-purple-600" />
                </div>
                <h3 className="text-2xl font-black mb-3 text-purple-900 transform -skew-x-6 drop-shadow-lg">
                  OUR VISION
                </h3>
                <div className="relative bg-white border-4 border-black rounded-lg p-3 shadow-lg">
                  <p className="text-gray-800 font-bold text-sm">
                    A world where every learner has access to PERSONALIZED, intelligent tutoring!
                  </p>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-black"></div>
                  <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-6 border-r-6 border-t-6 border-l-transparent border-r-transparent border-t-white"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="relative border-4 border-black bg-gradient-to-br from-yellow-200 via-orange-200 to-red-200 shadow-2xl transform rotate-1">
            <div className="p-8">
              <h3 className="text-4xl font-black mb-4 text-orange-900 text-center transform -skew-x-6 drop-shadow-lg">
                WHY CHOOSE ASTRA?
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="relative bg-white border-4 border-black rounded-lg p-4 shadow-lg">
                  <h4 className="text-lg font-black mb-2 text-gray-800">ADVANCED AI TECHNOLOGY</h4>
                  <p className="text-gray-700 font-bold text-sm">
                    Our platform leverages STATE-OF-THE-ART machine learning models!
                  </p>
                </div>
                <div className="relative bg-white border-4 border-black rounded-lg p-4 shadow-lg">
                  <h4 className="text-lg font-black mb-2 text-gray-800">PERSONALIZED LEARNING</h4>
                  <p className="text-gray-700 font-bold text-sm">
                    Every interaction is tailored to YOUR learning style and goals!
                  </p>
                </div>
                <div className="relative bg-white border-4 border-black rounded-lg p-4 shadow-lg">
                  <h4 className="text-lg font-black mb-2 text-gray-800">MULTI-FORMAT SUPPORT</h4>
                  <p className="text-gray-700 font-bold text-sm">
                    Upload documents, paste text, or connect to ONLINE resources!
                  </p>
                </div>
                <div className="relative bg-white border-4 border-black rounded-lg p-4 shadow-lg">
                  <h4 className="text-lg font-black mb-2 text-gray-800">CONTINUOUS INNOVATION</h4>
                  <p className="text-gray-700 font-bold text-sm">
                    We're constantly improving our AI models and adding NEW features!
                  </p>
                </div>
              </div>
            </div>
            <div className="absolute top-2 right-2 bg-green-400 border-2 border-black px-2 py-1 text-xs font-black text-green-900 transform rotate-12 shadow-lg">
              AMAZING!
            </div>
          </div>
        </div>
      </section>

      <footer
        className="border-t-4 border-black py-16 bg-black relative overflow-hidden"
        style={{
          backgroundImage: `
          radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 1px, transparent 1px),
          radial-gradient(circle at 75% 75%, rgba(255,255,255,0.08) 1px, transparent 1px)
        `,
          backgroundSize: "20px 20px, 30px 30px",
        }}
      >
        <div className="absolute inset-0 opacity-5">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 bg-white"
              style={{
                left: `${i * 10}%`,
                height: `${50 + Math.random() * 100}px`,
                top: `${Math.random() * 100}%`,
                animation: `pulse ${3 + i * 0.2}s ease-in-out infinite`,
              }}
            />
          ))}
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-3 mb-4 md:mb-0">
              <div className="relative w-16 h-16" style={{ filter: "drop-shadow(2px 2px 4px rgba(255,255,255,0.2))" }}>
                <div
                  className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-white"
                  style={{
                    backgroundImage: `radial-gradient(circle at 40% 40%, rgba(255,255,255,0.3) 2px, transparent 2px)`,
                    backgroundSize: "10px 10px",
                  }}
                ></div>
                <div className="absolute inset-2 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full"></div>
                <div className="absolute inset-4 bg-gradient-to-bl from-yellow-400 to-orange-500 rounded-full"></div>
                <div className="absolute top-4 left-4 w-2 h-2 bg-gradient-to-r from-green-300 to-lime-400 rounded-full"></div>
              </div>
              <span
                className="text-4xl font-black bg-gradient-to-r from-cyan-300 via-purple-300 to-pink-300 bg-clip-text text-transparent tracking-wider"
                style={{
                  filter: "drop-shadow(2px 2px 4px rgba(255,255,255,0.2))",
                  textShadow: "1px 1px 2px rgba(255,255,255,0.1)",
                }}
              >
                ASTRA
              </span>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        
        @keyframes slide {
          0% { transform: translateX(-100px) rotate(var(--rotation)); }
          100% { transform: translateX(100vw) rotate(var(--rotation)); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>
    </div>
  )
}

function handleFileUpload(file) {
  const uploadArea = document.getElementById("upload-area")
  const analyzeBtn = document.getElementById("analyze-btn")

  // Update UI to show file is uploaded
  uploadArea.innerHTML = `
    <div class="flex items-center justify-center gap-3">
      <div class="w-12 h-12 bg-green-500 border-4 border-black rounded-full flex items-center justify-center shadow-xl">
        <span class="text-white font-black text-xl">✓</span>
      </div>
      <div class="text-left">
        <p class="text-lg font-black text-black">${file.name}</p>
        <p class="text-sm text-gray-600 font-bold">Ready to analyze!</p>
      </div>
    </div>
  `

  // Enable analyze button
  analyzeBtn.disabled = false
  analyzeBtn.classList.remove("disabled:opacity-50", "disabled:cursor-not-allowed")
}

function handleAnalyze() {
  const resultsPanel = document.getElementById("results-panel")
  const analysisContent = document.getElementById("analysis-content")
  const analyzeBtn = document.getElementById("analyze-btn")

  // Show loading state
  analyzeBtn.innerHTML = `
    <div class="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"></div>
    ANALYZING...
  `
  analyzeBtn.disabled = true

  // Simulate AI processing
  setTimeout(() => {
    const mockResults = generateMockAnalysis("uploaded-file.pdf")

    analysisContent.innerHTML = `
      <div class="space-y-4">
        <div class="bg-yellow-100 border-4 border-black rounded-lg p-3 shadow-lg">
          <h4 class="font-black text-black mb-2">📝 SUMMARY</h4>
          <p class="text-sm text-black font-bold">${mockResults.summary}</p>
        </div>
        
        <div class="bg-blue-100 border-4 border-black rounded-lg p-3 shadow-lg">
          <h4 class="font-black text-black mb-2">🔑 KEY POINTS</h4>
          <ul class="text-sm text-black font-bold space-y-1">
            ${mockResults.keyPoints.map((point) => `<li>• ${point}</li>`).join("")}
          </ul>
        </div>
        
        <div class="bg-green-100 border-4 border-black rounded-lg p-3 shadow-lg">
          <h4 class="font-black text-black mb-2">❓ STUDY QUESTIONS</h4>
          <ul class="text-sm text-black font-bold space-y-1">
            ${mockResults.questions.map((q) => `<li>• ${q}</li>`).join("")}
          </ul>
        </div>
        
        <div class="flex gap-2 mt-4">
          <button class="bg-purple-500 text-white border-4 border-black font-black px-4 py-2 text-sm transform hover:scale-105 shadow-lg">
            💬 CHAT ABOUT THIS
          </button>
          <button class="bg-orange-500 text-white border-4 border-black font-black px-4 py-2 text-sm transform hover:scale-105 shadow-lg">
            📋 CREATE NOTES
          </button>
        </div>
      </div>
    `

    resultsPanel.classList.remove("hidden")

    // Reset analyze button
    analyzeBtn.innerHTML = `
      <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
      ANALYSIS COMPLETE!
    `
    analyzeBtn.disabled = false
  }, 3000)
}

function generateMockAnalysis(filename) {
  const topics = ["Mathematics", "Science", "History", "Literature", "Computer Science"]
  const randomTopic = topics[Math.floor(Math.random() * topics.length)]

  return {
    summary: `This document appears to be about ${randomTopic.toLowerCase()}. It contains comprehensive information that would be valuable for students studying this subject. The content is well-structured and covers fundamental concepts.`,
    keyPoints: [
      `Core concepts in ${randomTopic} are clearly explained`,
      `Multiple examples and case studies are provided`,
      `Important formulas and definitions are highlighted`,
      `Practice problems are included for better understanding`,
    ],
    questions: [
      `What are the main principles discussed in this ${randomTopic} document?`,
      `How do the examples relate to the theoretical concepts?`,
      `What are the key takeaways for exam preparation?`,
      `Which areas need more detailed study?`,
    ],
  }
}
