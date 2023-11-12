import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from '@/Context/store'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: `VINH'S PORFOLIO` ,
  description: 'All of products are made by Vinhtage',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen h-screen flex-row justify-between text-white">
          {/* <WebsiteUnderConstruction/> */}
          <GlobalContextProvider>
            {children}
          </GlobalContextProvider>
        </main>
      </body>
    </html>
  )
}
