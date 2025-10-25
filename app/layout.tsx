import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'AI Web Design Showcase',
  description: 'Interactive showcase of AI-generated web designs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
