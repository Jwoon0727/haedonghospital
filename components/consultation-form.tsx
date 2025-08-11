"use client"


//상담신청 폼

import { useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Phone, User, MessageCircle } from "lucide-react"

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // 실제 구현에서는 서버로 데이터를 전송
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // 3초 후 폼 리셋
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", phone: "", message: "" })
    }, 3000)
  }

  const isFormValid = formData.name.trim() && formData.phone.trim()

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid lg:grid-cols-2">
              {/* Left Side - Hospital Info */}
              <div className="bg-gradient-to-br from-amber-100 to-amber-200 p-8 lg:p-12 flex flex-col justify-center">
                <div className="space-y-6">
                  <div>
                    <p className="text-amber-700 font-medium text-lg tracking-wider mb-2">HAEDONG HOSPITAL</p>
                    <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                      해동한방병원
                      <br />
                      <span className="text-amber-600">간편상담</span>
                    </h2>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    상담 신청이 완료되었습니다.
                    <br />
                    빠른 시일 내에 연락드리겠습니다.
                  </p>
                  <div className="flex items-center space-x-3 text-green-600">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <span className="text-green-600 font-bold">✓</span>
                    </div>
                    <span className="font-medium">상담 신청 완료</span>
                  </div>
                </div>
              </div>

              {/* Right Side - Success Message */}
              <div className="p-8 lg:p-12 flex flex-col justify-center items-center text-center">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <span className="text-3xl text-green-600">✓</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">상담 신청이 완료되었습니다</h3>
                <p className="text-gray-600 mb-6">
                  입력해주신 연락처로 빠른 시일 내에
                  <br />
                  전문 상담사가 연락드리겠습니다.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl">
                  <p className="text-sm text-blue-700">
                    <strong>상담 시간:</strong> 평일 09:00 - 18:00
                    <br />
                    <strong>응급 문의:</strong> 02-1234-5679
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

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
                    <span className="text-amber-600">간편상담</span>
                  </h2>
                </div>
                <p className="text-gray-700 text-lg leading-relaxed">
                  해동한방병원 서비스를
                  <br />
                  이용해 간편하게 상담 받아 보세요.
                </p>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-amber-600 rounded-full"></div>
                  <span className="text-gray-600 font-medium">전문 상담사 연결</span>
                </div>
              </div>
            </div>

            {/* Right Side - Consultation Form */}
            <div className="p-8 lg:p-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-6">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                      <User className="w-4 h-4 mr-2 text-gray-500" />
                      성함을 입력해주세요
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <Input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="성함을 입력해주세요"
                      className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-xl"
                      required
                    />
                  </div>

                  {/* Phone Input */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                      <Phone className="w-4 h-4 mr-2 text-gray-500" />
                      연락처를 입력해주세요
                      <span className="text-red-500 ml-1">*</span>
                    </label>
                    <Input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="연락처를 입력해주세요"
                      className="h-12 border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-xl"
                      required
                    />
                  </div>

                  {/* Message Input */}
                  <div className="space-y-2">
                    <label className="flex items-center text-sm font-medium text-gray-700">
                      <MessageCircle className="w-4 h-4 mr-2 text-gray-500" />
                      상담 내용 (선택사항)
                    </label>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="내용을 40자 이내로 작성하여주세요."
                      maxLength={40}
                      rows={3}
                      className="border-gray-200 focus:border-amber-500 focus:ring-amber-500 rounded-xl resize-none"
                    />
                    <p className="text-xs text-gray-500 text-right">{formData.message.length}/40자</p>
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={!isFormValid || isSubmitting}
                  className="w-full h-14 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>상담신청 중...</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center space-x-2">
                      <span>상담신청 하기</span>
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </Button>

                {/* Privacy Notice */}
                <div className="bg-gray-50 p-4 rounded-xl">
                  <p className="text-xs text-gray-600 leading-relaxed">
                    <strong>개인정보 수집 및 이용 동의</strong>
                    <br />
                    상담 서비스 제공을 위해 개인정보를 수집하며, 상담 완료 후 즉시 파기됩니다. 상담 신청 시 개인정보
                    수집 및 이용에 동의한 것으로 간주됩니다.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
