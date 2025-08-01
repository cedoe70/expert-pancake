import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../index.css'
import { QueryProvider } from '../lib/queryClient'
import { Toaster } from '../components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CryptoVest - Professional Cryptocurrency Investment Platform',
  description: 'Institutional-grade security, real-time market data, and expert guidance for cryptocurrency investors. Portfolio management, automated trading, and consultation services.',
  keywords: 'cryptocurrency, investment, bitcoin, ethereum, portfolio management, trading, blockchain',
  authors: [{ name: 'CryptoVest' }],
  openGraph: {
    title: 'CryptoVest - Professional Cryptocurrency Investment Platform',
    description: 'Institutional-grade security, real-time market data, and expert guidance for cryptocurrency investors.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CryptoVest - Professional Cryptocurrency Investment Platform',
    description: 'Institutional-grade security, real-time market data, and expert guidance for cryptocurrency investors.',
  },
  viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  )
}