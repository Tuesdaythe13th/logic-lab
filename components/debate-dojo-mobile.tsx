"use client"

import { useState } from 'react'
import { Send, Radio, MessageSquare, Mic, PlayCircle, PauseCircle, FileText, Award } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"

const AnimatedIcon = ({ icon: Icon, animation }) => (
  <div className={`${animation} text-pink-500`}>
    <Icon className="h-5 w-5" />
  </div>
)

const GradientBox = ({ children }) => (
  <div className="bg-gradient-to-r from-pink-100 to-gray-100 rounded-lg p-4 shadow-md">
    {children}
  </div>
)

const ControlButton = ({ icon: Icon, text, animation, onClick }) => (
  <Button 
    variant="outline" 
    className="rounded-lg p-2 bg-black text-pink-500 hover:bg-gray-900 flex flex-col items-center"
    onClick={onClick}
  >
    <AnimatedIcon icon={Icon} animation={animation} />
    <span className="text-xs mt-1">{text}</span>
  </Button>
)

const GaugeButton = ({ label, value }) => (
  <Button variant="outline" className="flex flex-col items-center p-2 h-auto border-pink-200 text-black hover:bg-pink-50 transition-all duration-300">
    <span className="text-xs mb-1">{label}</span>
    <Progress value={value} className="w-12 h-2" indicatorColor="bg-pink-500" />
  </Button>
)

export function DebateDojoMobile() {
  const [message, setMessage] = useState('')
  const [isRecording, setIsRecording] = useState(false)

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
              <AnimatedIcon icon={Radio} animation="animate-pulse" />
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

          <div className="flex mb-4">
            <Input
              type="text"
              placeholder="Type your argument..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-grow mr-2 text-sm border-gray-300"
            />
            <Button
              size="icon"
              className="bg-pink-500 hover:bg-pink-600 text-white mr-2"
              onClick={() => console.log('Voice input')}
            >
              <Mic className="h-4 w-4" />
              <span className="sr-only">Voice input</span>
            </Button>
            <Button
              size="icon"
              className="bg-pink-500 hover:bg-pink-600 text-white"
              onClick={handleSend}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-2 mb-4">
            <ControlButton icon={MessageSquare} text="Text" animation="animate-bounce" onClick={() => console.log('Text')} />
            <ControlButton icon={Mic} text="Voice" animation="animate-pulse" onClick={() => console.log('Voice')} />
            <ControlButton
              icon={isRecording ? PauseCircle : PlayCircle}
              text={isRecording ? "Pause" : "Record"}
              animation={isRecording ? "animate-spin" : "animate-bounce"}
              onClick={toggleRecording}
            />
            <ControlButton icon={FileText} text="Transcript" animation="animate-pulse" onClick={() => console.log('Transcript')} />
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