/**
 * v0 by Vercel.
 * @see https://v0.dev/t/cpEbo3FSAH3
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import Link from "next/link";
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Battery, Wifi, Signal, Star, ChevronDown, ChevronUp } from 'lucide-react'

export default function Component() {
  const [showHistory, setShowHistory] = useState(false)

  const historicalEvents = [
    "1969 - Apollo 11 lands on the moon",
    "1989 - Fall of the Berlin Wall",
    "2001 - Wikipedia is launched",
    "2008 - Barack Obama elected as US President"
  ]

  return (
    <div className="flex items-center justify-center h-screen bg-white">
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

        <div className="h-full flex flex-col items-center justify-center bg-white px-4">
          {/* Animated black circle with star icon and text */}
          <motion.div
            className="w-64 h-64 bg-black rounded-full flex flex-col items-center justify-center text-white mb-8"
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Star size={48} className="text-pink-300 mb-4" />
            </motion.div>
            <h1 className="text-2xl font-bold text-center leading-tight">
              Glad you&apos;re back,<br />Tuesday!
            </h1>
          </motion.div>

          {/* Quote */}
          <p className="text-center text-gray-600 italic mb-8 px-4">
            &quot;Every existing thing is born without reason, prolongs itself out of weakness, and dies by chance.&quot;
            <br />— JEAN-PAUL SARTRE
          </p>

          {/* Buttons */}
          <div className="space-y-4 w-full max-w-xs">
            <motion.button
              className="w-full bg-black text-white py-3 rounded-lg font-semibold relative overflow-hidden"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowHistory(!showHistory)}
            >
              Today in history
              {showHistory ? <ChevronUp className="absolute right-4 top-1/2 transform -translate-y-1/2" /> : <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2" />}
            </motion.button>

            <AnimatePresence>
              {showHistory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="bg-gray-100 rounded-lg p-4 space-y-2"
                >
                  {historicalEvents.map((event, index) => (
                    <p key={index} className="text-sm">{event}</p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.button
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-3 rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
            
                Go back to my last activity
              
            </motion.button>
            <motion.button
              className="w-full bg-gradient-to-r from-pink-400 to-pink-600 text-white py-3 rounded-lg font-semibold"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/directory">
                Start a new activity in Logic Lab
              </Link>
            </motion.button>
          </div>
        </div>
        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
      </div>
    </div>
  )
}
