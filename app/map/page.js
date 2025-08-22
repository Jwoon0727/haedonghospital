'use client'

import dynamic from 'next/dynamic'

const KakaoMap = dynamic(() => import('@/utils/kakaomap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[500px] flex items-center justify-center bg-gray-800 rounded-lg">
      <p className="text-white">지도를 불러오는 중...</p>
    </div>
  )
})

export default function MapPage() {
  return (
    <main className="container mx-auto p-4">
      <div className="w-full h-[500px] bg-gray-800 rounded-lg overflow-hidden">
        <KakaoMap />
      </div>
    </main>
  )
}