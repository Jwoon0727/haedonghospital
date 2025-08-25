"use client"

//전화상담 폼

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Phone, User, Clock, MapPin } from "lucide-react"

export default function ConsultationForm() {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isCalling, setIsCalling] = useState(false)

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    // 숫자와 하이픈만 허용
    const cleaned = value.replace(/[^0-9-]/g, '')
    setPhoneNumber(cleaned)
  }

  const handleCall = () => {
    if (!phoneNumber.trim()) return
    
    setIsCalling(true)
    
    // 전화번호 형식 정리 (하이픈 제거)
    const cleanPhone = phoneNumber.replace(/-/g, '')
    
    // 전화 걸기
    window.location.href = `tel:${cleanPhone}`
    
    // 1초 후 상태 리셋
    setTimeout(() => {
      setIsCalling(false)
    }, 1000)
  }

  const isPhoneValid = phoneNumber.trim().length >= 10

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid lg:grid-cols-2">
            {/* Left Side - Hospital Info */}
            <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-300/20 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-amber-400/20 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative z-10 space-y-6">
                <div>
                  <p className="text-amber-700 font-medium text-lg tracking-wider mb-2">HAEDONG HOSPITAL</p>
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    해동한방병원
                    <br />
                    <span className="text-amber-600">전화상담</span>
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  해동한방병원으로
                  <br />
                  바로 전화 상담 받아보세요.
                </p>
                
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700 font-medium">대표전화: 031-823-3650</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-amber-600" />
                    <span className="text-gray-700 font-medium">진료시간: 평일 09:00 - 18:00</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-600 font-medium">즉시 상담 연결</span>
                </div>
              </div>
            </div>

            {/* Right Side - Phone Call Form */}
            <div className="p-8 lg:p-12">
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">전화 상담 신청</h3>
                  <p className="text-gray-600">아래 버튼을 클릭하여 바로 전화 상담을 받아보세요</p>
                </div>

                <div className="space-y-6">
                  {/* Direct Call Button */}
                  <Button
                    onClick={() => window.location.href = 'tel:031-823-3650'}
                    className="w-full h-20 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-white font-semibold text-2xl rounded-xl transition-all duration-300 transform hover:scale-105"
                  >
                    <div className="flex items-center justify-center space-x-4">
                      <Phone className="w-8 h-8" />
                      <span>031-823-3650</span>
                      <ArrowRight className="w-8 h-8" />
                    </div>
                  </Button>

                  {/* 간격 추가 */}
                  <div className="h-8"></div>

                  {/* Notice */}
                  <div className="bg-blue-50 p-4 rounded-xl">
                    <p className="text-xs text-blue-700 leading-relaxed">
                      <strong>전화 상담 안내</strong>
                      <br />
                      • 평일 오전 9시 ~ 오후 6시까지 상담 가능
                      <br />
                      • 상담 시간 외 문의는 다음날 상담 가능
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
