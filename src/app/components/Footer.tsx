import React from 'react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'
import { Heart } from 'lucide-react'

export const Footer = () => {
  return (
    <Card className='w-full flex flex-col sm:flex-row items-center justify-center gap-2 p-4 mt-8 border-0 bg-transparent text-sm text-muted-foreground'>
      <div className="flex items-center gap-2">
        <span>Made with</span>
        <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse-slow" />
        <span>by</span>
      </div>
      <Link 
        href='https://github.com/LSzpilowski?tab=repositories' 
        target='_blank'
        rel="noopener noreferrer"
        className='font-semibold hover:text-foreground transition-colors underline-offset-4 hover:underline'
      >
        LSzpilowski
      </Link>
    </Card>
  )
}
