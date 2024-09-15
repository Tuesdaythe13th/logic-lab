'use client'

import { motion } from 'framer-motion'
import { Lightbulb } from 'lucide-react'

export function LogicLabMockup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 to-pink-200 p-4">
      <div className="w-72 h-[36rem] bg-white rounded-3xl shadow-lg overflow-hidden border-2 border-black">
        <div className="flex flex-col items-center justify-center h-full p-6 space-y-6">
          <motion.div
            className="relative"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-32 h-32 bg-coral-100 rounded-full flex items-center justify-center">
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <Lightbulb size={48} className="text-black" />
              </motion.div>
            </div>
          </motion.div>
          
          <motion.h1 
            className="text-3xl font-bold text-black"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Logic Lab
          </motion.h1>
          
          <motion.p 
            className="text-sm text-gray-600 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Your very own temple of reason.
          </motion.p>
          
          <motion.button 
            className="px-8 py-3 bg-gradient-to-r from-gray-700 to-black text-white rounded-full font-semibold shadow-md hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            START
          </motion.button>
        </div>
      </div>
    </div>
  )
}