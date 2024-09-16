'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Battery, Wifi, Signal, Heart, Volume2, CheckSquare, FileText, ChevronDown, ChevronUp, Lightbulb, MessageSquare } from 'lucide-react'

export function IdeaFarm() {
  const [expandedSection, setExpandedSection] = useState<string | null>(null)

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section)
  }

  const feedbackItems = [
    { icon: Heart, text: "Improve your empathy" },
    { icon: Volume2, text: "Less aggressive tone suggested" },
    { icon: CheckSquare, text: "Use fewer red herring arguments" },
    { icon: CheckSquare, text: "Use fewer ad hominem attacks" },
  ]

  const improvements = [
    "Facts have increased in accuracy.",
    "Confidence scores in spoken arguments have improved!",
  ]

  const savedDilemmas = [
    { title: "Trolley Problem", preview: "You see a runaway trolley moving toward five tied-up people lying on the tracks..." },
    { title: "Lying to Protect", preview: "Your friend asks you if their new haircut looks good, but you don't like it..." },
    { title: "Whistleblower's Dilemma", preview: "You've discovered unethical practices in your workplace..." },
  ]

  const savedArguments = [
    { title: "Utilitarianism vs. Deontology", preview: "Comparing the ethical frameworks of utilitarianism and deontology..." },
    { title: "Climate Change Action", preview: "Arguing for immediate action on climate change based on scientific evidence..." },
    { title: "AI Rights", preview: "Exploring the potential rights and ethical considerations for artificial intelligence..." },
  ]

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
        {/* Animated Lightbulb and Header */}
        <div className="flex flex-col items-center mb-6">
          <motion.div
            initial={{ rotate: 0 }}
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Lightbulb size={64} className="text-pink-500" />
          </motion.div>
          <h1 className="text-3xl font-bold mt-2 text-gray-800">Idea Farm</h1>
        </div>

        {/* Navigation Tool (Feedback Section) */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Your Scores Suggest:</h2>
          <ul className="space-y-2">
            {feedbackItems.map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-pink-500"
                >
                  <item.icon size={20} />
                </motion.div>
                <span className="text-gray-800">{item.text}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Improvements Section */}
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-2">Improvements:</h2>
          <ul className="space-y-2">
            {improvements.map((improvement, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-2"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="text-pink-500"
                >
                  <Lightbulb size={20} />
                </motion.div>
                <span className="text-gray-800">{improvement}</span>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Saved Dilemmas Section */}
        <div className="mb-6">
          <motion.button
            className="w-full flex items-center justify-between bg-gradient-to-r from-pink-200 to-pink-300 p-3 rounded-lg shadow-md"
            onClick={() => toggleSection('dilemmas')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-2">
              <FileText className="text-pink-600" size={24} />
              <span className="font-bold text-gray-800">Saved Dilemmas</span>
            </div>
            {expandedSection === 'dilemmas' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </motion.button>
          <AnimatePresence>
            {expandedSection === 'dilemmas' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="mt-2 space-y-2">
                  {savedDilemmas.map((dilemma, index) => (
                    <motion.li
                      key={index}
                      className="bg-white border border-pink-200 rounded-lg p-3 shadow-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="font-bold text-gray-800">{dilemma.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{dilemma.preview}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Saved Arguments Section */}
        <div className="mb-6">
          <motion.button
            className="w-full flex items-center justify-between bg-gradient-to-r from-pink-200 to-pink-300 p-3 rounded-lg shadow-md"
            onClick={() => toggleSection('arguments')}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center space-x-2">
              <MessageSquare className="text-pink-600" size={24} />
              <span className="font-bold text-gray-800">Saved Arguments</span>
            </div>
            {expandedSection === 'arguments' ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
          </motion.button>
          <AnimatePresence>
            {expandedSection === 'arguments' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                <ul className="mt-2 space-y-2">
                  {savedArguments.map((argument, index) => (
                    <motion.li
                      key={index}
                      className="bg-white border border-pink-200 rounded-lg p-3 shadow-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <h3 className="font-bold text-gray-800">{argument.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{argument.preview}</p>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Open Notebook Button */}
        <motion.button
          className="w-full bg-black text-white p-4 rounded-lg shadow-md font-bold text-lg"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Open my notebook
        </motion.button>
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
    </div>
  )
}