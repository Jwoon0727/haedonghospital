"use client"

import { useState, useEffect } from "react"
import { Phone, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
    setIsMobileMenuOpen(false)
  }

  const navItems = [
    { name: "병원소개", id: "about" },
    { name: "진료과목", id: "services" },
    { name: "시설안내", id: "facilities" },
    { name: "오시는길", id: "contact" },
  ]

  return (
    <header
      className={`transition-all duration-300 border-b z-50 ${
        isScrolled ? "fixed top-0 left-0 right-0 bg-[#fbfaf5]/95 backdrop-blur-md shadow-lg" : "bg-[#fbfaf5] shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          > 
                    {/* 이미지 로고 - 크기 조절 */}
                    <div className="relative w-32 h-12 md:w-48 md:h-16">
              <Image
                src="/main0.jpg"
                alt="해동병원 로고"
                fill
                className="object-contain"
                priority
              />
            </div>
            
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full"></span>
              </button>
            ))}
          </nav>

          {/* Desktop CTA Button */}
          {/* <Button 
            onClick={() => window.location.href = 'tel:031-823-3650'}
            className="hidden md:flex bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            <Phone className="w-4 h-4 mr-2" />
            예약문의
          </Button> */}
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        size="icon"
        className="md:hidden h-12 w-12 text-black"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="모바일 메뉴 열기"
      >
        {isMobileMenuOpen ? <X className="w-32 h-32" strokeWidth={3} /> : <Menu className="w-32 h-32" strokeWidth={3} />}
      </Button>

        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 bg-[#fbfaf5]/95 backdrop-blur-md">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 text-left px-4 py-2 hover:bg-gray-50 rounded-lg"
                >
                  {item.name}
                </button>
              ))}
              <div className="px-4 pt-4 border-t border-gray-200">
                <Button 
                  onClick={() => window.location.href = 'tel:031-823-3650'}
                  className="w-full bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  예약문의
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
