import Link from 'next/link'

export const Footer = () => {
  return (
    <footer className='w-full flex flex-row items-center gap-1 py-6 px-4 sm:px-6 md:px-24 border-t border-border/40 text-sm text-muted-foreground'>
      <span>Wordly by</span>
      <Link 
        href='https://www.lszpilowski.com' 
        target='_blank'
        rel="noopener noreferrer"
        className='font-semibold hover:text-foreground transition-colors underline-offset-4 hover:underline'
      >
        LSzpilowski
      </Link>
    </footer>
  )
}
