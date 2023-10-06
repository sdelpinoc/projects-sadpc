import Link from 'next/link'
import type { Metadata } from 'next'
import { type link } from '../types.d'

import './globals.css'

// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Home Page',
  description: 'Generated by create next app'
}

const links: link[] = [
  {
    label: 'Home',
    link: '/'
  },
  {
    label: 'Github',
    link: 'https://github.com/sdelpinoc',
    isExternal: true
  },
  {
    label: 'About',
    link: '/about'
  }
]

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col max-w-6xl mx-auto min-h-screen px-2'>
        <header className='border-b-2 border-cascade-400'>
          <nav className='py-4'>
            <ul className='flex justify-center gap-4'>
              {
                links.map(({ link, label, isExternal }) => (
                  <li key={label}>
                    <Link href={link} target={(isExternal === true) ? '_blank' : '_self'}>{label}</Link>
                  </li>
                ))
              }
            </ul>
          </nav>
        </header>
        {children}
        <footer className='my-4 text-center'>
          <ul className='inline-grid grid-flow-col justify-center gap-6'>
            <li className='underline hover:shadow hover:bg-cascade-200 peer'>
              <Link href='mailto:sdelpinocampos@hotmail.com' target='_blank'>Contact me!</Link>
            </li>
            <li className='underline hover:shadow hover:bg-cascade-200 peer'>
              <Link href='https://twitter.com/sdelpinoc' target='_blank'>Twitter</Link>
            </li>
            <li className='last:col-start-1 last:col-end-2 peer-hover:animate-wave-animation'>
              👋
            </li>
          </ul>
        </footer>
      </body>
    </html>
  )
}
