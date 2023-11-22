import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { GlobalContextProvider } from '@/Context/store'
import dynamic from 'next/dynamic'
import { Suspense } from 'react'
const Header =dynamic(()=>import('@/components/Header'),{ssr:false})
const Footer =dynamic(()=>import('@/components/Footer'),{ssr:false})


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
        <main className="flex min-h-screen h-screen w-screen flex-col justify-between items-center text-white">
          {/* <WebsiteUnderConstruction/> */}
          <GlobalContextProvider>
            <Suspense fallback={<div>Loading...</div>}>

              <Header/>
            </Suspense>
            <div className="w-full h-10/12 flex justify-center items-center">

              {children}
            </div>
            <Suspense fallback={<div>Loading...</div>}>

              <Footer/>
            </Suspense>
          </GlobalContextProvider>
        </main>
      </body>
    </html>
  )
}
