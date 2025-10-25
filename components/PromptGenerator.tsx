'use client'

import { useState } from 'react'
import { Wand2, Copy, Check } from 'lucide-react'
import { promptTemplates } from '@/lib/designData'

interface PromptGeneratorProps {
  currentPrompt: string
  onPromptChange: (prompt: string) => void
  onGenerate: () => void
}

export default function PromptGenerator({ currentPrompt, onPromptChange, onGenerate }: PromptGeneratorProps) {
  const [copied, setCopied] = useState(false)
  const [selectedStyle, setSelectedStyle] = useState('')
  const [selectedPurpose, setSelectedPurpose] = useState('')
  const [selectedColor, setSelectedColor] = useState('')

  const handleCopy = () => {
    navigator.clipboard.writeText(currentPrompt)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const generateCustomPrompt = () => {
    if (selectedStyle && selectedPurpose && selectedColor) {
      const customPrompt = `Create a ${selectedStyle} ${selectedPurpose} with ${selectedColor} color scheme`
      onPromptChange(customPrompt)
    }
  }

  return (
    <div className="space-y-4">
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <div className="flex items-center gap-2 mb-4">
          <Wand2 className="w-5 h-5 text-purple-400" />
          <h3 className="text-lg font-bold text-white">AI Prompt Generator</h3>
        </div>

        {/* Current Prompt Display */}
        <div className="mb-6">
          <label className="text-sm text-gray-400 mb-2 block">Current Prompt</label>
          <div className="bg-black/30 rounded-lg p-4 border border-white/10 relative">
            <p className="text-sm text-gray-200 leading-relaxed mb-3">
              {currentPrompt || 'Select options below to generate a prompt...'}
            </p>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
              title="Copy prompt"
            >
              {copied ? (
                <Check className="w-4 h-4 text-green-400" />
              ) : (
                <Copy className="w-4 h-4 text-gray-400" />
              )}
            </button>
          </div>
        </div>

        {/* Style Selection */}
        <div className="mb-4">
          <label className="text-sm text-gray-400 mb-2 block">Design Style</label>
          <select
            value={selectedStyle}
            onChange={(e) => {
              setSelectedStyle(e.target.value)
              setTimeout(generateCustomPrompt, 100)
            }}
            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select a style...</option>
            {promptTemplates.styles.map((style) => (
              <option key={style} value={style} className="bg-gray-900">
                {style.charAt(0).toUpperCase() + style.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Purpose Selection */}
        <div className="mb-4">
          <label className="text-sm text-gray-400 mb-2 block">Purpose</label>
          <select
            value={selectedPurpose}
            onChange={(e) => {
              setSelectedPurpose(e.target.value)
              setTimeout(generateCustomPrompt, 100)
            }}
            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select a purpose...</option>
            {promptTemplates.purposes.map((purpose) => (
              <option key={purpose} value={purpose} className="bg-gray-900">
                {purpose.charAt(0).toUpperCase() + purpose.slice(1)}
              </option>
            ))}
          </select>
        </div>

        {/* Color Selection */}
        <div className="mb-4">
          <label className="text-sm text-gray-400 mb-2 block">Color Scheme</label>
          <select
            value={selectedColor}
            onChange={(e) => {
              setSelectedColor(e.target.value)
              setTimeout(generateCustomPrompt, 100)
            }}
            className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Select colors...</option>
            {promptTemplates.colors.map((color) => (
              <option key={color} value={color} className="bg-gray-900">
                {color.charAt(0).toUpperCase() + color.slice(1)}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={onGenerate}
          className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg py-3 flex items-center justify-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all font-medium"
        >
          <Wand2 className="w-4 h-4" />
          Generate Random Design
        </button>
      </div>

      {/* Quick Templates */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <h4 className="text-sm font-semibold text-white mb-3">Quick Templates</h4>
        <div className="space-y-2">
          {promptTemplates.styles.slice(0, 5).map((style) => (
            <button
              key={style}
              onClick={() => {
                setSelectedStyle(style)
                onPromptChange(`Create a ${style} website design`)
              }}
              className="w-full text-left px-3 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm text-gray-300 transition-colors"
            >
              {style.charAt(0).toUpperCase() + style.slice(1)}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
