'use client'

import { motion } from 'framer-motion'
import { Layout, Palette, Code, Zap } from 'lucide-react'
import type { Design } from '@/lib/designData'

interface DesignPreviewProps {
  design: Design
  prompt: string
}

export default function DesignPreview({ design, prompt }: DesignPreviewProps) {
  return (
    <div className="space-y-6">
      {/* Preview Header */}
      <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">{design.name}</h2>
            <p className="text-gray-400">{design.description}</p>
          </div>
          <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">
            {design.category}
          </span>
        </div>

        {/* Prompt Display */}
        <div className="bg-black/30 rounded-lg p-4 border border-white/10">
          <p className="text-sm text-gray-300 leading-relaxed">{prompt}</p>
        </div>
      </div>

      {/* Visual Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 overflow-hidden"
      >
        <div className={`h-64 ${design.gradient} relative`}>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          
          {/* Mock UI Elements */}
          <div className="absolute inset-0 p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white/10 backdrop-blur-md rounded-lg p-4 max-w-md"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white/20 rounded-full" />
                <div className="flex-1">
                  <div className="h-3 bg-white/40 rounded-full w-24 mb-2" />
                  <div className="h-2 bg-white/30 rounded-full w-16" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-white/30 rounded-full" />
                <div className="h-2 bg-white/30 rounded-full w-5/6" />
                <div className="h-2 bg-white/30 rounded-full w-4/6" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Design Details */}
        <div className="p-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="text-center">
              <Layout className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Layout</p>
              <p className="text-white font-medium">Modern</p>
            </div>
            <div className="text-center">
              <Palette className="w-8 h-8 text-pink-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Colors</p>
              <p className="text-white font-medium">{design.colors.length}</p>
            </div>
            <div className="text-center">
              <Code className="w-8 h-8 text-blue-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Features</p>
              <p className="text-white font-medium">{design.features.length}</p>
            </div>
            <div className="text-center">
              <Zap className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <p className="text-sm text-gray-400">Style</p>
              <p className="text-white font-medium">AI</p>
            </div>
          </div>

          {/* Color Palette */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-white mb-3">Color Palette</h4>
            <div className="flex gap-2">
              {design.colors.map((color, idx) => (
                <div key={idx} className="flex-1">
                  <div 
                    className="h-16 rounded-lg border-2 border-white/20 mb-2"
                    style={{ backgroundColor: color }}
                  />
                  <p className="text-xs text-gray-400 text-center font-mono">{color}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div>
            <h4 className="text-sm font-semibold text-white mb-3">Key Features</h4>
            <div className="grid grid-cols-2 gap-2">
              {design.features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 rounded-lg px-3 py-2 border border-white/10"
                >
                  <p className="text-sm text-gray-300">{feature}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Additional Info */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h4 className="text-sm font-semibold text-white mb-3">Design Principles</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
              User-centered design approach
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
              Accessibility standards (WCAG 2.1)
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
              Mobile-first responsive design
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
              Performance optimized
            </li>
          </ul>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10">
          <h4 className="text-sm font-semibold text-white mb-3">Technical Stack</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
              React / Next.js
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
              Tailwind CSS
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
              Framer Motion
            </li>
            <li className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 bg-pink-400 rounded-full" />
              TypeScript
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
