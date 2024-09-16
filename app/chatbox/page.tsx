"use client";

import { useState, useEffect } from 'react'
import { Mic, Send, Battery, Wifi, Signal, ChevronLeft, ChevronRight, Inbox } from 'lucide-react'

export default function Component() {
  const [message, setMessage] = useState('')
  const [chatMessages, setChatMessages] = useState([])
  const [currentTime, setCurrentTime] = useState('')
  const [carouselIndex, setCarouselIndex] = useState(0)

  const avatars = [
    '👩‍💼', '👨‍💼', '👩‍🔬', '👨‍🔬', '👩‍🚀', '👨‍🚀'
  ]

  const professions = [
    'Social Scientist', 'Economist', 'Psychologist', 'Lawyer', 'College Student', 'Politician'
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }))
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  const handleSend = () => {
    if (message.trim()) {
      setChatMessages([...chatMessages, { text: message, sender: 'user' }])
      setMessage('')
      // Simulate a response
      setTimeout(() => {
        setChatMessages(prev => [...prev, { text: "This is a sample response.", sender: 'bot' }])
      }, 1000)
    }
  }

  const handleMicClick = () => {
    console.log('Microphone clicked')
  }

  const handleCarouselChange = (direction) => {
    setCarouselIndex(prevIndex => {
      if (direction === 'next') {
        return (prevIndex + 1) % professions.length
      } else {
        return prevIndex === 0 ? professions.length - 1 : prevIndex - 1
      }
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-[375px] h-[812px] bg-black rounded-[60px] overflow-hidden shadow-xl border-[14px] border-black relative">
        {/* iPhone-style notch */}
        <div className="absolute top-0 inset-x-0 h-6 bg-black rounded-b-3xl"></div>
        
        {/* Status bar */}
        <div className="relative z-10 flex justify-between items-center px-6 pt-2 text-white text-sm">
          <span>{currentTime}</span>
          <div className="flex items-center space-x-2">
            <Signal size={16} />
            <Wifi size={16} />
            <Battery size={16} />
          </div>
        </div>

        <div className="h-full overflow-hidden flex flex-col bg-gradient-to-b from-pink-300 to-pink-100 pt-8">
          {/* App header */}
          <header className="bg-pink-500 py-4 px-6 shadow-md flex flex-col items-center">
            <h1 className="text-4xl font-bold text-black mb-2">ChatBox</h1>
            <Inbox className="text-white w-10 h-10 animate-bounce" />
          </header>

          {/* Avatar selection */}
          <div className="bg-black p-3 mx-4 mt-3 rounded-lg">
            <div className="flex justify-around w-full mb-2">
              {avatars.map((avatar, index) => (
                <button
                  key={index}
                  className="w-10 h-10 rounded-full bg-white border border-pink-200 flex items-center justify-center text-xl hover:scale-110 transition-transform duration-300"
                >
                  {avatar}
                </button>
              ))}
            </div>
            <div className="mt-2 px-3 py-1 bg-pink-200 rounded-full text-pink-600 font-semibold animate-pulse text-center text-sm">
              Choose a persona
            </div>
          </div>

          {/* Profession carousel */}
          <div className="flex items-center justify-between px-4 py-2 bg-white mt-2">
            <button onClick={() => handleCarouselChange('prev')} className="text-pink-500">
              <ChevronLeft size={20} />
            </button>
            <button className="px-3 py-1 bg-pink-100 rounded-full text-pink-600 font-semibold text-sm">
              {professions[carouselIndex]}
            </button>
            <button onClick={() => handleCarouselChange('next')} className="text-pink-500">
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Chat display area */}
          <div className="flex-1 overflow-y-auto p-3 bg-white mt-2">
            {chatMessages.map((msg, index) => (
              <div
                key={index}
                className={`mb-2 p-2 rounded-lg text-black text-sm animate-fade-in ${
                  msg.sender === 'user' ? 'bg-pink-100 ml-auto' : 'bg-gray-100'
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Message box */}
          <div className="bg-white p-3 rounded-t-3xl shadow-lg">
            <div className="bg-pink-50 rounded-2xl p-2">
              {/* Input area */}
              <div className="flex items-center">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1 p-2 bg-transparent border-none focus:outline-none text-black text-sm"
                />
                <button
                  onClick={handleMicClick}
                  className="p-1 text-pink-500 hover:text-pink-600 transition-colors duration-300"
                >
                  <Mic size={20} />
                </button>
                <button
                  onClick={handleSend}
                  className="p-1 bg-pink-500 text-white rounded-full hover:bg-pink-600 transition-colors duration-300"
                >
                  <Send size={20} />
                </button>
              </div>
            </div>
            {/* Add to notebook button */}
            <button className="w-full mt-2 py-2 bg-pink-200 text-pink-600 rounded-full font-semibold hover:bg-pink-300 transition-colors duration-300 text-sm">
              Add to my notebook
            </button>
          </div>

          {/* Extra space to ensure everything fits */}
          <div className="h-4"></div>
        </div>

        {/* Home indicator */}
        <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-white rounded-full"></div>
      </div>
    </div>
  )
}