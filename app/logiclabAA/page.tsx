/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/17kzxVu2URM
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { Brain, Mic, Send, AlertTriangle, UserX, XCircle } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Confetti from 'react-confetti'

const AnimatedBrain = () => (
  <div className="animate-pulse mb-4">
    <Brain className="h-16 w-16 text-pink-500" />
  </div>
)

const GlowingButton = ({ icon: Icon, text, onClick }: { icon: any, text: string, onClick: () => void }) => (
  <Button
    variant="outline"
    className="bg-white hover:bg-pink-100 text-gray-700 border-pink-300 transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg hover:shadow-pink-200"
    onClick={onClick}
  >
    <Icon className="mr-2 h-4 w-4" />
    {text}
  </Button>
)

export default function Component() {
  const [selectedModel, setSelectedModel] = useState('Claude')
  const [argument, setArgument] = useState('')
  const [analysis, setAnalysis] = useState('')
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSend = () => {
    setAnalysis(`Analysis of "${argument}" using ${selectedModel}...`)
    setShowConfetti(true)
  }

  useEffect(() => {
    if (showConfetti) {
      const timer = setTimeout(() => setShowConfetti(false), 5000)
      return () => clearTimeout(timer)
    }
  }, [showConfetti])

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="w-[375px] h-[667px] bg-white rounded-[40px] shadow-lg p-6 flex flex-col relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-300 to-pink-400 opacity-20 pointer-events-none" />
        
        <div className="flex flex-col items-center mb-4">
          <AnimatedBrain />
          <h1 className="text-2xl font-bold text-gray-800 text-center">Argument Analyzer</h1>
        </div>
        
        <h2 className="text-xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 text-center">
          Create an Argument
        </h2>
        
        <Select value={selectedModel} onValueChange={setSelectedModel}>
          <SelectTrigger className="w-full mb-4 bg-white border-pink-300">
            <SelectValue placeholder="Select AI Model" />
          </SelectTrigger>
          <SelectContent>
            {['Claude', 'Gemini', 'GPT', 'Grok', 'LLama'].map((model) => (
              <SelectItem key={model} value={model}>
                {model}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="flex-grow bg-white border border-pink-300 rounded-lg p-4 mb-4 overflow-auto">
          <p className="text-gray-700">{analysis || 'Analysis results will appear here...'}</p> 
        </div>

        <div className="relative mb-4">
          <Input
            type="text"
            placeholder="Type your argument..."
            value={argument}
            onChange={(e) => setArgument(e.target.value)}
            className="w-full pr-24 border-pink-300"
          />
          <Button
            size="icon"
            variant="ghost"
            className="absolute right-12 top-0 h-full hover:bg-pink-100 hover:shadow-lg hover:shadow-pink-200"
            onClick={() => {}}  
          >
            <Mic className="h-4 w-4" />
            <span className="sr-only">Voice input</span>
          </Button>
          <Button
            size="icon"
            className="absolute right-0 top-0 h-full bg-pink-500 hover:bg-pink-600 text-white hover:shadow-lg hover:shadow-pink-300"
            onClick={handleSend}
          >
            <Send className="h-4 w-4" />
            <span className="sr-only">Send</span>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-2">
          <GlowingButton icon={AlertTriangle} text="Red herring argument detected" onClick={() => {}} />
          <GlowingButton icon={UserX} text="Ad hominem attack detected" onClick={() => {}} />
          <GlowingButton icon={XCircle} text="Fact check: Debunked" onClick={() => {}} />
        </div>

        {showConfetti && <Confetti width={375} height={667} recycle={false} numberOfPieces={200} />}
      </div>
    </div>
  )
}