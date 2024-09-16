'use client'

import { useState } from 'react'
import { Battery, Wifi, Signal, Mic, Keyboard, Power } from 'lucide-react'

export function DilemmaGenerator() {
  const [dilemma, setDilemma] = useState("")
  const [isCreating, setIsCreating] = useState(false)
  const [navigationMethod, setNavigationMethod] = useState<'voice' | 'text' | null>(null)

  const generateDilemma = () => {
    setIsCreating(true)
    setTimeout(() => {
      setDilemma("You have 5 minutes to decide whether to sacrifice one person to save five others.")
      setIsCreating(false)
    }, 2000)
  }

  return (
    <div className="w-[375px] h-[812px] bg-white rounded-[60px] overflow-hidden shadow-xl border-[14px] border-black relative">
      {/* iPhone-style notch */}
      <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl"></div>
      
      {/* Status bar */}
      <div className="relative z-10 flex justify-between items-center px-6 pt-2 text-black text-sm">
        <div className="flex items-center space-x-2">
          <Signal size={16} />
          <Wifi size={16} />
        </div>
        <div className="flex items-center space-x-2">
          <span>80%</span>
          <Battery size={16} />
        </div>
      </div>

      <div className="h-full overflow-hidden flex flex-col bg-white pt-8 px-4">
        {/* Title Section */}
        <div className="bg-gradient-to-r from-pink-400 to-pink-600 rounded-lg p-4 my-4 shadow-md">
          <h1 className="text-3xl font-bold text-white text-center">DILEMMA GENERATOR</h1>
        </div>

        {/* Dilemma Button */}
        <button 
          onClick={generateDilemma} 
          className="bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full w-40 h-40 mx-auto my-4 hover:animate-pulse transition-all duration-300 transform hover:scale-105 flex flex-col items-center justify-center"
        >
          <Power className={`w-12 h-12 mb-2 ${isCreating ? 'animate-bounce' : ''}`} />
          {isCreating ? "Creating..." : "Generate Dilemma"}
        </button>

        {/* Dilemma Box */}
        <div className="bg-black text-white rounded-lg p-4 m-4 shadow-lg min-h-[100px] flex items-center justify-center">
          <p className="text-center">
            {dilemma || "Click the button to generate a dilemma!"}
          </p>
        </div>

        {/* Navigation Selection */}
        <div className="border-2 border-pink-400 rounded-lg p-4 m-4">
          <p className="text-black font-semibold mb-2">Voice or Text Navigation?</p>
          <div className="flex justify-between">
            <button 
              onClick={() => setNavigationMethod('voice')}
              className={`flex items-center justify-center w-[48%] py-2 rounded-lg transition-colors duration-300 ${
                navigationMethod === 'voice' ? 'bg-pink-500 text-white' : 'bg-white text-black border border-pink-500'
              }`}
            >
              <Mic className="w-5 h-5 mr-2" />
              Voice
            </button>
            <button 
              onClick={() => setNavigationMethod('text')}
              className={`flex items-center justify-center w-[48%] py-2 rounded-lg transition-colors duration-300 ${
                navigationMethod === 'text' ? 'bg-pink-500 text-white' : 'bg-white text-black border border-pink-500'
              }`}
            >
              <Keyboard className="w-5 h-5 mr-2" />
              Text
            </button>
          </div>
        </div>

        {/* Let's Navigate Button */}
        <button className="bg-gradient-to-r from-pink-200 to-pink-400 text-black font-semibold rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 mt-2 mb-4">
          Let&apos;s Navigate
        </button>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
    </div>
  )
}
