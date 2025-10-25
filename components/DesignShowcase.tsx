'use client'

import { motion } from 'framer-motion'
import { Eye, Sparkles } from 'lucide-react'
import type { Design } from '@/lib/designData'

interface DesignShowcaseProps {
  designs: Design[]
  onSelectDesign: (design: Design) => void
  selectedDesign: Design | null
}

export default function DesignShowcase({ designs, onSelectDesign, selectedDesign }: DesignShowcaseProps) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-purple-400" />
          Design Gallery
        </h2>
        <p className="text-gray-400">{designs.length} templates</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {designs.map((design, index) => (
          <motion.div
            key={design.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className={`design-card bg-white/5 backdrop-blur-lg rounded-xl border cursor-pointer overflow-hidden ${
              selectedDesign?.id === design.id 
                ? 'border-purple-500 ring-2 ring-purple-500' 
                : 'border-white/10 hover:border-purple-400'
            }`}
            onClick={() => onSelectDesign(design)}
          >
            <div className={`h-32 ${design.gradient} relative`}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute top-3 right-3 bg-black/30 backdrop-blur-md px-3 py-1 rounded-full">
                <p className="text-xs text-white font-medium">{design.category}</p>
              </div>
            </div>
            
            <div className="p-4">
              <h3 className="text-lg font-bold text-white mb-2">{design.name}</h3>
              <p className="text-sm text-gray-400 mb-3 line-clamp-2">{design.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {design.features.slice(0, 2).map((feature, idx) => (
                  <span 
                    key={idx}
                    className="text-xs bg-purple-500/20 text-purple-300 px-2 py-1 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex gap-1">
                  {design.colors.slice(0, 3).map((color, idx) => (
                    <div 
                      key={idx}
                      className="w-6 h-6 rounded-full border-2 border-white/20"
                      style={{ backgroundColor: color }}
                    />
                  ))}
                </div>
                
                <button 
                  className="flex items-center gap-1 text-sm text-purple-400 hover:text-purple-300 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    onSelectDesign(design)
                  }}
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
