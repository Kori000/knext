import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { AppProvider } from '@/providers/app'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'KNEXT',
  description: 'Nextjs templete'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
