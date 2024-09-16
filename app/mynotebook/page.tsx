"use client"

import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Battery, Wifi, Signal, Plus, Save, Search, Bold, Italic, Underline, List, ChevronLeft, ChevronRight, Book } from 'lucide-react'
import Confetti from 'react-confetti'

export default function Component() {
  const [notes, setNotes] = useState([
    { id: 1, title: 'Research on AI Ethics', content: 'AI ethics is a complex field...', category: 'Research' },
    { id: 2, title: 'New Product Idea', content: 'A smart device that...', category: 'Ideas' },
    { id: 3, title: 'Meeting Notes', content: 'Discussed project timeline...', category: 'To-Dos' },
  ])
  const [currentNote, setCurrentNote] = useState({ id: 0, title: '', content: '', category: 'Research' })
  const [currentNoteIndex, setCurrentNoteIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState('')
  const [perplexityAnswer, setPerplexityAnswer] = useState('')
  const [isEditing, setIsEditing] = useState(false)
  const [showSavedNotes, setShowSavedNotes] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)

  const handleSave = useCallback(() => {
    const updatedNotes = notes.map(note => 
      note.id === currentNote.id ? currentNote : note
    )
    setNotes(updatedNotes)
    setIsEditing(false)
  }, [currentNote, notes])

  useEffect(() => {
    const autoSaveInterval = setInterval(() => {
      if (isEditing) {
        handleSave()
      }
    }, 30000) // Auto-save every 30 seconds

    return () => clearInterval(autoSaveInterval)
  }, [isEditing, handleSave])

  const handleNewNote = () => {
    const newNote = { id: notes.length + 1, title: 'New Note', content: '', category: 'Research' }
    setNotes([...notes, newNote])
    setCurrentNote(newNote)
    setCurrentNoteIndex(notes.length)
    setIsEditing(true)
  }

  const handleNoteNavigation = (direction: 'prev' | 'next') => {
    let newIndex = direction === 'prev' ? currentNoteIndex - 1 : currentNoteIndex + 1
    if (newIndex < 0) newIndex = notes.length - 1
    if (newIndex >= notes.length) newIndex = 0
    setCurrentNoteIndex(newIndex)
    setCurrentNote(notes[newIndex])
    setIsEditing(false)
  }

  const applyFormatting = (format: 'bold' | 'italic' | 'underline' | 'list') => {
    setCurrentNote({ ...currentNote, content: `[${format}]${currentNote.content}[/${format}]` })
  }

  const handleSearch = () => {
    setPerplexityAnswer(`Here's what I found about "${searchQuery}": ...`)
  }

  const handleShowSavedNotes = () => {
    setShowSavedNotes(true)
    setShowConfetti(true)
    setTimeout(() => setShowConfetti(false), 5000) // Stop confetti after 5 seconds
  }

  return (
    <div className="w-[375px] h-[812px] bg-white rounded-[60px] overflow-hidden shadow-xl border-[14px] border-black relative">
      {showConfetti && <Confetti width={375} height={812} recycle={false} />}
      
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
        {/* Glowing Book Icon and Title */}
        <div className="flex flex-col items-center mb-4">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Book size={48} className="text-pink-500" />
          </motion.div>
          <h1 className="text-3xl font-bold mt-2 text-center">My Notebook</h1>
        </div>

        {/* Perplexity Search Bar */}
        <div className="mb-4 relative">
          <input
            type="text"
            placeholder="Search Perplexity..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-2 pr-10 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-500"
          />
          <button
            onClick={handleSearch}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-pink-500"
          >
            <Search size={20} />
          </button>
        </div>

        {/* Perplexity Answer Box */}
        {perplexityAnswer && (
          <div className="mb-4 p-3 bg-pink-100 rounded-lg">
            <h3 className="font-bold mb-2">Perplexity Answer:</h3>
            <p>{perplexityAnswer}</p>
          </div>
        )}

        {/* Note Navigation */}
        <div className="flex justify-between items-center mb-4">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNoteNavigation('prev')}
            className="text-pink-500"
          >
            <ChevronLeft size={24} />
          </motion.button>
          <span className="font-bold">{currentNote.title}</span>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handleNoteNavigation('next')}
            className="text-pink-500"
          >
            <ChevronRight size={24} />
          </motion.button>
        </div>

        {/* Rich Text Editor */}
        <div className="mb-4">
          <div className="flex justify-between mb-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => applyFormatting('bold')}
              className="text-pink-500"
            >
              <Bold size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => applyFormatting('italic')}
              className="text-pink-500"
            >
              <Italic size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => applyFormatting('underline')}
              className="text-pink-500"
            >
              <Underline size={20} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => applyFormatting('list')}
              className="text-pink-500"
            >
              <List size={20} />
            </motion.button>
          </div>
          <textarea
            value={currentNote.content}
            onChange={(e) => {
              setCurrentNote({ ...currentNote, content: e.target.value })
              setIsEditing(true)
            }}
            className="w-full h-48 p-2 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-500"
            placeholder="Start typing your note..."
          />
        </div>

        {/* Note Category */}
        <div className="mb-4">
          <select
            value={currentNote.category}
            onChange={(e) => setCurrentNote({ ...currentNote, category: e.target.value })}
            className="w-full p-2 border-2 border-pink-300 rounded-lg focus:outline-none focus:border-pink-500"
          >
            <option value="Research">Research</option>
            <option value="Ideas">Ideas</option>
            <option value="To-Dos">To-Dos</option>
          </select>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNewNote}
            className="bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full p-3 shadow-lg"
          >
            <Plus size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleSave}
            className="bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full p-3 shadow-lg"
          >
            <Save size={24} />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleShowSavedNotes}
            className="bg-gradient-to-r from-pink-400 to-pink-600 text-white rounded-full p-3 shadow-lg"
          >
            <Book size={24} />
          </motion.button>
        </div>

        {/* Saved Notes Modal */}
        {showSavedNotes && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <div className="bg-white p-4 rounded-lg w-80">
              <h2 className="text-xl font-bold mb-4">Saved Notes</h2>
              <ul>
                {notes.map(note => (
                  <li key={note.id} className="mb-2">
                    <button
                      onClick={() => {
                        setCurrentNote(note)
                        setShowSavedNotes(false)
                      }}
                      className="text-left w-full hover:bg-pink-100 p-2 rounded"
                    >
                      {note.title}
                    </button>
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setShowSavedNotes(false)}
                className="mt-4 bg-pink-500 text-white px-4 py-2 rounded"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Home indicator */}
      <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-300 rounded-full"></div>
    </div>
  )
}
