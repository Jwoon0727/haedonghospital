"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const heroSlides = [
  {
    id: 1,
    title: "검증된 진료로",
    subtitle: "건강을 지켜드립니다.",

    image: "/main1.jpg",
    badge: "신뢰받는 의료진",
    primaryButton: "진료 예약하기",
  },
  {
    id: 2,
    title: "최신 의료장비로",
    subtitle: "정확한 진단과 치료",

    image: "/main3.jpg",
    badge: "최신 의료장비",
    primaryButton: "시설 둘러보기",
  },
  {
    id: 3,
    title: "편안한",
    subtitle: "치료 환경",

    image: "/main2.jpg",
    badge: "편안한 치료실",
    primaryButton: "치료실 둘러보기",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000) // 5초마다 슬라이드 변경

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentSlideData = heroSlides[currentSlide]

  return (
    <section className="relative h-[70vh] sm:h-[80vh] md:h-screen min-h-[420px] md:min-h-[600px] md:max-h-[800px] overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={`${slide.title} ${slide.subtitle}`}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
      </div>

          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/20 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 h-full flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="relative text-left max-w-3xl mx-auto lg:mx-0 mt-70 md:mt-74 lg:mt-70">
      <Badge
  className="absolute -top-6 left-0
             bg-gray-700/60 text-white border border-white/40
             backdrop-blur-md rounded-full shadow-md
             px-3.5 py-1.5 text-sm"
>
  {currentSlideData.badge}
</Badge>
<br></br>

            <div className="inline-block bg-white-700/60 text-white  backdrop-blur-md rounded-2xl px-6 py-5 shadow-lg">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-0 transition-all duration-500 leading-tight drop-shadow-md">
                {currentSlideData.title}
                <span className="text-blue-300 drop-shadow-md block">{currentSlideData.subtitle}</span>
              </h1>
            </div>
       

        


    {/* Slide Controls */}
    <div className="hidden">
      <div className="flex space-x-3">
        <Button
          variant="outline"
          size="icon"
          onClick={prevSlide}
          className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm w-12 h-12"
        >
          <ChevronLeft className="w-5 h-5" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          onClick={nextSlide}
          className="rounded-full bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm w-12 h-12"
        >
          <ChevronRight className="w-5 h-5" />
        </Button>
      </div>

              {/* Slide Indicators */}
              <div className="flex space-x-3">
                {heroSlides.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white w-8" : "bg-white/50 hover:bg-white/70 w-3"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      Floating Stats Card
      {/* <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg transition-all duration-500 hidden lg:block">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
            <div className="w-6 h-6 text-green-600">
              {currentSlide === 0 && "🏥"}
              {currentSlide === 1 && "🔬"}
              {currentSlide === 2 && "🚑"}
              {currentSlide === 3 && "👨‍⚕️"}
            </div>
          </div>
          <div>
            <p className="font-semibold text-gray-900">
              {currentSlide === 0 && "인증받은 의료기관"}
              {currentSlide === 1 && "첨단 의료장비"}
              {currentSlide === 2 && "24시간 응급실"}
              {currentSlide === 3 && "전문 의료진"}
            </p>
            <p className="text-sm text-gray-600">
              {currentSlide === 0 && "보건복지부 인증"}
              {currentSlide === 1 && "최신 장비 보유"}
              {currentSlide === 2 && "연중무휴 운영"}
              {currentSlide === 3 && "50+ 전문의"}
            </p>
          </div>
        </div>
      </div> */}

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20">
        <div
          className="h-full bg-white transition-all duration-100 ease-linear"
          style={{
            width: `${((currentSlide + 1) / heroSlides.length) * 100}%`,
          }}
        />
      </div>

     
    
    </section>
  )
}
