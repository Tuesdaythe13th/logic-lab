'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Battery, Wifi, Signal, Mic, Square, ChevronDown } from 'lucide-react'
import Lottie from 'lottie-react'
import voiceWaveformAnimation from './voiceWaveformAnimation.json'

export function DilemmaNavigation() {
  const [timeLeft, setTimeLeft] = useState(300) // 5 minutes in seconds
  const [navigationMethod, setNavigationMethod] = useState<'voice' | 'text'>('text')
  const [isRecording, setIsRecording] = useState(false)
  const [inputText, setInputText] = useState('')
  const [timerStopped, setTimerStopped] = useState(false)
  const [showScores, setShowScores] = useState(false)

  const dilemma = "You have five minutes to decide to save someone and sacrifice all 5 others"

  const scores = [
    { name: "Empathy", score: 7.5 },
    { name: "Sympathy", score: 8.0 },
    { name: "Logic", score: 6.5 },
    { name: "Ethics", score: 7.0 },
    { name: "Decision making", score: 6.0 },
    { name: "Fairness", score: 7.5 },
    { name: "Certainty", score: 5.5 },
    { name: "Emotion", score: 8.5 },
  ]

  useEffect(() => {
    if (!timerStopped && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [timeLeft, timerStopped])

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
  }

  const handleTimeUp = () => {
    setTimerStopped(true)
  }

  const toggleRecording = () => {
    setIsRecording(!isRecording)
  }

  const analyzeResponse = () => {
    setShowScores(true)
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

      <div className="h-full overflow-y-auto flex flex-col bg-white pt-8 px-4">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center mb-4">NAVIGATE THIS DILEMMA</h1>

        {/* Dilemma Box */}
        <div className="bg-pink-100 border-2 border-pink-300 rounded-lg p-4 mb-4">
          <p className="text-center text-gray-800">{dilemma}</p>
        </div>

        {/* Timer Section */}
        <motion.div
          className="text-center text-4xl font-bold mb-4"
          animate={timeLeft < 30 ? { scale: [1, 1.1, 1], color: ['#000', '#f00', '#000'] } : {}}
          transition={{ duration: 0.5, repeat: Infinity }}
        >
          {formatTime(timeLeft)}
        </motion.div>

        {/* Input Section */}
        <AnimatePresence mode="wait">
          {navigationMethod === 'voice' ? (
            <motion.div
              key="voice"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col items-center mb-4"
            >
              <p className="mb-4">{isRecording ? 'Recording...' : 'Press to record'}</p>
              <button
                onClick={toggleRecording}
                className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center"
              >
                {isRecording ? (
                  <Square className="w-8 h-8 text-white" />
                ) : (
                  <Mic className="w-8 h-8 text-white" />
                )}
              </button>
              {isRecording && (
                <div className="w-full h-24 mt-4">
                  <Lottie animationData={voiceWaveformAnimation} loop={true} />
                </div>
              )}
            </motion.div>
          ) : (
            <motion.div
              key="text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="mb-4"
            >
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Type your answer here..."
                className="w-full h-32 p-4 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-500 transition-all duration-300"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* "Times Up!" Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-400 to-pink-600 text-white font-bold rounded-full px-6 py-3 mb-4 shadow-md"
          onClick={handleTimeUp}
        >
          Times Up!
        </motion.button>

        {/* "Analyze My Response" Button */}
        <AnimatePresence>
          {timerStopped && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-gradient-to-r from-pink-500 to-white text-black font-bold rounded-lg p-4 text-center mb-4"
              onClick={analyzeResponse}
            >
              Analyze My Response
            </motion.button>
          )}
        </AnimatePresence>

        {/* Scores Dropdown */}
        <AnimatePresence>
          {showScores && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white border-2 border-pink-300 rounded-lg overflow-hidden"
            >
              {scores.map((score, index) => (
                <div key={index} className="flex justify-between items-center p-2 border-b border-pink-200 last:border-b-0">
                  <span className="font-semibold">{score.name}</span>
                  <span className="text-pink-600">{score.score.toFixed(1)}</span>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
    </div>
  )
}