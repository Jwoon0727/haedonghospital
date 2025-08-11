import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: '해동한방병원', // 이 부분을 원하는 제목으로 변경
  description: '해동한방병원 공식 웹사이트입니다.',
  icons: {
    icon: '/favicon.jpg', // favicon 경로
    apple: '/favicon.jpg', // 애플 기기용 아이콘
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
