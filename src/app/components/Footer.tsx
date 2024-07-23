import React from 'react'
import { Card } from '@/components/ui/card'
import Link from 'next/link'

export const Footer = () => {
  return (
    <Card className='w-full flex flex-row justify-end p-5 border-hidden'>
      <p>
        Coded by
      </p>
      <Link href='https://github.com/LSzpilowski?tab=repositories' target='_blank' className='ml-1 underline-hidden hover:text-blue-600'> LSzpilowski</Link>
    </Card>
  )
}
