"use client"

//최신의료시설 

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const facilities = [
  {
    id: 1,
    title: "대기실전경",
    description:
      "대기실전경",
    image: "/대기실.jpg",
    features: ["소음 최소화", "검사시간 단축"],
  },
  {
    id: 2,
    title: "로보틱ATM",
    description: "로보틱ATM",
    image: "/roboatt.jpg",
    features: ["로보틱ATM"],
  },
  {
    id: 3,
    title: "도수치료",
    description: "도수치료",
    image: "/도수치료.png",
    features: ["도수치료"],
  },
  {
    id: 4,
    title: "물리치료실",
    description:
      "물리치료실",
    image: "/물리치료.jpg",
    features: ["당일 결과 확인"],
  },
  {
    id: 5,
    title: "병실",
    description: "병실",
    image: "/입원실.jpg",
    features: ["병실마다 샤워실과 화장실 완비.", "샤워실 화장실 완비된 1인실 운영"],
  },
    {
      id: 6,
      title: "치료실",
      description: "치료실",
      image: "/치료실.jpg",
      features: ["치료실"],
    },
    {
      id: 7,
      title: "휴게실",
      description: "휴게실",
      image: "/rest.jpg",
      features: ["휴게실"],
    },
]

export default function FacilitiesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % facilities.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + facilities.length) % facilities.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section id="facilities" className="py-20 bg-gray-50 pt-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">최신 의료시설</h2>
          <p className="text-xl text-gray-600">첨단 의료장비와 쾌적한 환경으로 최상의 의료서비스를 제공합니다.</p>
        </div>

        <div className="relative">
          {/* Main Slider */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl">
            <div className="grid lg:grid-cols-2">
              {/* Image Section */}
              <div className="relative h-96 lg:h-auto overflow-hidden">
                {/* Image slides with opacity transition */}
                {facilities.map((facility, index) => (
                  <div
                    key={facility.id}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentSlide
                        ? "opacity-100 translate-x-0"
                        : index < currentSlide
                          ? "opacity-0 -translate-x-full"
                          : "opacity-0 translate-x-full"
                    }`}
                  >
                    <Image
                      src={facility.image || "/placeholder.svg"}
                      alt={facility.title}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />

                    {/* Enhanced gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10" />
                  </div>
                ))}

                {/* Floating badge - only show on active slide */}
                <div
                  className={`absolute top-6 right-6 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg transition-all duration-500 ${
                    currentSlide >= 0 ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4"
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-medium text-gray-700">{facilities[currentSlide]?.features[0]}</span>
                  </div>
                </div>

                {/* Image transition indicator */}
                <div className="absolute bottom-4 left-4 bg-black/50 backdrop-blur-sm px-3 py-1 rounded-full transition-all duration-300">
                  <span className="text-white text-sm font-medium">
                    {currentSlide + 1} / {facilities.length}
                  </span>
                </div>

                {/* Navigation arrows overlay */}
                <button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 group"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </button>

                <button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/80 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 group"
                >
                  <ChevronRight className="w-5 h-5 text-gray-700 group-hover:text-blue-600 transition-colors" />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="transition-all duration-700 ease-in-out">
                  <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                    {facilities[currentSlide].title}
                  </h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">{facilities[currentSlide].description}</p>

                  {/* Enhanced Features */}
                  <div className="space-y-3 mb-8">
                    {facilities[currentSlide].features.map((feature, featureIndex) => (
                      <div
                        key={`${currentSlide}-${featureIndex}`}
                        className="flex items-center space-x-3 transition-all duration-300 ease-in-out transform hover:translate-x-2 opacity-0"
                        style={{
                          animation: `slideInUp 0.6s ease-out ${featureIndex * 150}ms forwards`,
                        }}
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full transition-all duration-300 hover:scale-150" />
                        <span className="text-gray-700 font-medium transition-colors duration-300 hover:text-blue-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation Buttons */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={prevSlide}
                        className="rounded-full bg-transparent hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                      >
                        <ChevronLeft className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={nextSlide}
                        className="rounded-full bg-transparent hover:bg-blue-50 hover:border-blue-300 transition-all duration-300"
                      >
                        <ChevronRight className="w-4 h-4" />
                      </Button>
                    </div>

                    {/* Slide Counter */}
                    <span className="text-sm text-gray-500 font-medium">
                      {currentSlide + 1} / {facilities.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {facilities.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>

          {/* Enhanced Thumbnail Navigation */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {facilities.map((facility, index) => (
              <button
                key={facility.id}
                onClick={() => goToSlide(index)}
                className={`relative h-24 rounded-xl overflow-hidden transition-all duration-300 transform ${
                  index === currentSlide
                    ? "ring-3 ring-blue-600 ring-offset-2 scale-105 shadow-lg"
                    : "hover:ring-2 hover:ring-gray-300 hover:scale-102 shadow-md hover:shadow-lg"
                }`}
              >
                <Image
                  src={facility.image || "/placeholder.svg"}
                  alt={facility.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
                <div
                  className={`absolute inset-0 transition-all duration-300 ${
                    index === currentSlide ? "bg-blue-600/20" : "bg-black/20 hover:bg-black/10"
                  }`}
                />
                <div className="absolute bottom-1 left-1 right-1">
                  <p
                    className={`text-white text-xs font-medium truncate transition-all duration-300 ${
                      index === currentSlide ? "drop-shadow-lg" : ""
                    }`}
                  >
                    {facility.title}
                  </p>
                </div>

                {/* Active indicator */}
                {index === currentSlide && (
                  <div className="absolute top-2 right-2 w-3 h-3 bg-blue-600 rounded-full border-2 border-white shadow-lg animate-pulse"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
