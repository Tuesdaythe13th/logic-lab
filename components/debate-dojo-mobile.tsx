"use client"

import { useState } from 'react'
import { Send, MessageSquare, Mic, PlayCircle, PauseCircle, FileText, Award, Cast } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import React from 'react';

interface AnimatedIconProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  animation: string;
  className?: string;
}

const AnimatedIcon = ({ icon: Icon, animation, className = '' }: AnimatedIconProps) => (
  <div className={`${animation} ${className}`}>
    <Icon className="h-5 w-5" />
  </div>
)

const GradientBox = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-gradient-to-r from-pink-100 to-gray-100 rounded-lg p-4 shadow-md">
    {children}
  </div>
)

interface ControlButtonProps {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  animation: string;
  onClick: () => void;
  bgColor: string;
  hoverColor: string;
}

const ControlButton = ({ icon: Icon, text, animation, onClick, bgColor, hoverColor }: ControlButtonProps) => (
  <Button 
    variant="outline" 
    className={`rounded-lg p-2 ${bgColor} text-white hover:${hoverColor} flex flex-col items-center transition-all duration-300`}
    onClick={onClick}
  >
    <AnimatedIcon icon={Icon} animation={animation} className="text-white" />
    <span className="text-xs mt-1">{text}</span>
  </Button>
)

interface GaugeButtonProps {
  label: string;
  value: number;
}

const GaugeButton = ({ label, value }: GaugeButtonProps) => (
  <Button variant="outline" className="flex flex-col items-center p-2 h-auto border-pink-200 text-black hover:bg-pink-50 transition-all duration-300">
    <span className="text-xs mb-1">{label}</span>
    <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
      <div
        className="h-full bg-pink-500"
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </Button>
)

export default function DebateDojo() {
  const [message, setMessage] = useState<string>('')
  const [isRecording, setIsRecording] = useState<boolean>(false)

  const handleSend = () => {
    console.log('Message sent:', message)
    setMessage('')
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-[375px] h-[812px] bg-white rounded-[60px] shadow-xl overflow-hidden border-8 border-black relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-6 bg-black rounded-b-3xl"></div>
        <div className="h-full overflow-y-auto px-4 py-8 bg-gradient-to-b from-pink-50 to-gray-50">
          <header className="text-center mb-4">
            <h1 className="text-3xl font-bold mb-2 text-black">DEBATE DOJO</h1>
            <div className="flex items-center justify-center">
              <AnimatedIcon icon={Cast} animation="animate-pulse text-red-500" />
              <p className="text-sm font-semibold text-black ml-2">The Debate is LIVE!</p>
            </div>
          </header>

          <GradientBox>
            <h2 className="text-lg font-semibold mb-2 text-black text-center">PREMISE</h2>
            <p className="text-sm text-gray-700 text-center">
              Defend your argument. The state of New York had every right to ban large sugary drinks.
            </p>
          </GradientBox>

          <div className="flex mt-4 mb-2">
            <div className="w-1/2 pr-2 border-r border-gray-300">
              <h2 className="text-sm font-semibold mb-1 text-pink-500 text-center">Player 1</h2>
              <div className="bg-pink-50 p-2 rounded text-xs text-center">Player 1 info</div>
            </div>
            <div className="w-1/2 pl-2">
              <h2 className="text-sm font-semibold mb-1 text-gray-700 text-center">Player 2</h2>
              <div className="bg-gray-50 p-2 rounded text-xs text-center">Player 2 info</div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-2 mb-2 border border-gray-200 h-32 overflow-auto">
            <p className="text-xs text-gray-500 text-center">Chat messages will appear here...</p>
          </div>

          <div className="flex mb-4 items-center">
            <div className="relative flex-grow mr-2">
              <Input
                type="text"
                placeholder="Type your argument..."
                value={message}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
                className="w-full text-sm border-gray-300 pr-10"
              />
              <Mic
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 cursor-pointer transition-colors duration-200"
                onClick={() => console.log('Voice input')}
              />
            </div>
            <Button
              size="icon"
              className="bg-pink-500 hover:bg-pink-600 text-white transition-all duration-300"
              onClick={handleSend}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <ControlButton
              icon={MessageSquare}
              text="Text"
              animation="animate-bounce"
              onClick={() => console.log('Text')}
              bgColor="bg-purple-500"
              hoverColor="bg-purple-600"
            />
            <ControlButton
              icon={Mic}
              text="Voice"
              animation="animate-pulse"
              onClick={() => console.log('Voice')}
              bgColor="bg-pink-500"
              hoverColor="bg-pink-600"
            />
            <ControlButton
              icon={isRecording ? PauseCircle : PlayCircle}
              text={isRecording ? 'Pause' : 'Record'}
              animation={isRecording ? 'animate-spin' : 'animate-bounce'}
              onClick={toggleRecording}
              bgColor={isRecording ? 'bg-red-500' : 'bg-green-500'}
              hoverColor={isRecording ? 'bg-red-600' : 'bg-green-600'}
            />
            <ControlButton
              icon={FileText}
              text="Transcript"
              animation="animate-pulse"
              onClick={() => console.log('Transcript')}
              bgColor="bg-blue-500"
              hoverColor="bg-blue-600"
            />
          </div>

          <div className="mb-4">
            <h3 className="text-sm font-semibold mb-2 text-black text-center">Analysis</h3>
            <div className="flex justify-between">
              <GaugeButton label="Sentiment" value={75} />
              <GaugeButton label="Tone" value={60} />
              <GaugeButton label="Confidence" value={80} />
              <GaugeButton label="Accuracy" value={70} />
            </div>
          </div>

          <Button className="w-full bg-black text-pink-500 text-sm py-2 shadow-lg hover:shadow-pink-300/50 transition-shadow duration-300">
            <Award className="mr-2 h-4 w-4" />
            Get your score
          </Button>
        </div>
      </div>
    </div>
  )
}
