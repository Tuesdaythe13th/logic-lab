"use client";

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Battery, Wifi, Signal, Brain, Lightbulb, MessageCircle, Share2, BookOpen } from 'lucide-react'

export default function Component() {
  const [selectedChallenge, setSelectedChallenge] = useState('Logic Lab')

  const challenges = [
    { name: 'Logic Lab', icon: Brain, color: 'text-blue-500' },
    { name: 'Dilemma Generator', icon: Lightbulb, color: 'text-yellow-500' },
    { name: 'Debate Dojo', icon: MessageCircle, color: 'text-green-500' },
  ]

  const leaderboardData = {
    'Logic Lab': [
      { name: 'Alice', score: 950 },
      { name: 'Bob', score: 920 },
      { name: 'Charlie', score: 890 },
      { name: 'David', score: 860 },
      { name: 'Eve', score: 830 },
    ],
    'Dilemma Generator': [
      { name: 'Frank', score: 880 },
      { name: 'Grace', score: 850 },
      { name: 'Henry', score: 820 },
      { name: 'Ivy', score: 790 },
      { name: 'Jack', score: 760 },
    ],
    'Debate Dojo': [
      { name: 'Kate', score: 910 },
      { name: 'Liam', score: 880 },
      { name: 'Mia', score: 850 },
      { name: 'Noah', score: 820 },
      { name: 'Olivia', score: 790 },
    ],
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
        <h1 className="text-3xl font-bold text-center mb-6">Leaderboard</h1>

        {/* Challenge selection */}
        <div className="flex justify-around mb-6">
          {challenges.map((challenge) => (
            <motion.button
              key={challenge.name}
              className={`flex flex-col items-center p-2 rounded-lg ${
                selectedChallenge === challenge.name ? 'bg-pink-100' : ''
              }`}
              onClick={() => setSelectedChallenge(challenge.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className={`${challenge.color} mb-1`}
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <challenge.icon size={24} />
              </motion.div>
              <span className="text-xs text-center">{challenge.name}</span>
            </motion.button>
          ))}
        </div>

        {/* Leaderboard */}
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <h2 className="text-xl font-semibold mb-4">{selectedChallenge} Top Scores</h2>
          <ul className="space-y-2">
            {leaderboardData[selectedChallenge].map((entry, index) => (
              <motion.li
                key={entry.name}
                className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <span className="font-medium">{entry.name}</span>
                <span className="text-pink-600 font-bold">{entry.score}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Action buttons */}
        <div className="flex justify-around">
          <motion.button
            className="flex items-center justify-center bg-gradient-to-r from-pink-400 to-pink-600 text-white px-4 py-2 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(236, 72, 153)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 size={20} className="mr-2" />
            Share Score
          </motion.button>
          <motion.button
            className="flex items-center justify-center bg-gradient-to-r from-pink-400 to-pink-600 text-white px-4 py-2 rounded-full shadow-lg"
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 8px rgb(236, 72, 153)" }}
            whileTap={{ scale: 0.95 }}
          >
            <BookOpen size={20} className="mr-2" />
            Study Resources
          </motion.button>
        </div>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
    </div>
  )
}