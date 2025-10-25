'use client'

import { useState, useEffect } from 'react'
import { Sparkles, RefreshCw, Grid3x3, Eye, Code, Palette, Wand2 } from 'lucide-react'
import DesignShowcase from '@/components/DesignShowcase'
import PromptGenerator from '@/components/PromptGenerator'
import DesignPreview from '@/components/DesignPreview'
import { designTemplates, generateRandomDesign } from '@/lib/designData'

export default function Home() {
  const [selectedDesign, setSelectedDesign] = useState<any>(null)
  const [autoGenerate, setAutoGenerate] = useState(false)
  const [currentPrompt, setCurrentPrompt] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'preview'>('grid')

  useEffect(() => {
    if (autoGenerate) {
      const interval = setInterval(() => {
        const randomDesign = generateRandomDesign()
        setSelectedDesign(randomDesign)
        setCurrentPrompt(randomDesign.prompt)
      }, 5000)

      return () => clearInterval(interval)
    }
  }, [autoGenerate])

  const handleGenerateNew = () => {
    const randomDesign = generateRandomDesign()
    setSelectedDesign(randomDesign)
    setCurrentPrompt(randomDesign.prompt)
  }

  const handleSelectDesign = (design: any) => {
    setSelectedDesign(design)
    setCurrentPrompt(design.prompt)
    setViewMode('preview')
  }

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Header */}
      <header className="border-b border-white/10 bg-black/20 backdrop-blur-lg">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-purple-500 to-pink-500 p-2 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">AI Design Showcase</h1>
                <p className="text-sm text-gray-400">Interactive Web Design Gallery</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode(viewMode === 'grid' ? 'preview' : 'grid')}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                  viewMode === 'preview' 
                    ? 'bg-purple-600 text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                {viewMode === 'grid' ? <Eye className="w-4 h-4" /> : <Grid3x3 className="w-4 h-4" />}
                {viewMode === 'grid' ? 'Preview' : 'Grid'}
              </button>
              
              <button
                onClick={handleGenerateNew}
                className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg flex items-center gap-2 hover:from-purple-700 hover:to-pink-700 transition-all"
              >
                <RefreshCw className="w-4 h-4" />
                Generate New
              </button>
              
              <button
                onClick={() => setAutoGenerate(!autoGenerate)}
                className={`px-4 py-2 rounded-lg flex items-center gap-2 transition-all ${
                  autoGenerate 
                    ? 'bg-green-600 text-white' 
                    : 'bg-white/10 text-gray-300 hover:bg-white/20'
                }`}
              >
                <Wand2 className="w-4 h-4" />
                {autoGenerate ? 'Stop Auto' : 'Auto Generate'}
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* Left Sidebar - Prompt Generator */}
          <div className="lg:col-span-1">
            <PromptGenerator 
              currentPrompt={currentPrompt}
              onPromptChange={setCurrentPrompt}
              onGenerate={handleGenerateNew}
            />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            {viewMode === 'grid' ? (
              <DesignShowcase 
                designs={designTemplates}
                onSelectDesign={handleSelectDesign}
                selectedDesign={selectedDesign}
              />
            ) : (
              <DesignPreview 
                design={selectedDesign || designTemplates[0]}
                prompt={currentPrompt}
              />
            )}
          </div>
        </div>

        {/* Stats Footer */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <Palette className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">{designTemplates.length}</p>
                <p className="text-sm text-gray-400">Design Templates</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-pink-500/20 p-3 rounded-lg">
                <Code className="w-6 h-6 text-pink-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">8</p>
                <p className="text-sm text-gray-400">Style Categories</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <Sparkles className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">AI</p>
                <p className="text-sm text-gray-400">Powered</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
            <div className="flex items-center gap-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <Eye className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <p className="text-2xl font-bold text-white">Live</p>
                <p className="text-sm text-gray-400">Preview</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
