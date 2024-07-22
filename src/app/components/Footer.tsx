import React from 'react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Card className='w-full text-right p-5 border-hidden'>
      <p>
        Coded by 
        <Link href='https://github.com/LSzpilowski?tab=repositories' target='_blank' className='underline-hidden hover:text-blue-600'> LSzpilowski</Link>
      </p>
    </Card>
  )
}
