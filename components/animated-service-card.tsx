"use client"

import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface ServiceCardProps {
  name: string
  desc: string
  index: number
}

const serviceDetails: { [key: string]: string } = {
  교통사고후유증 : "교통사고로 인한 목디스크, 허리디스크, 어깨 통증 등을 한방치료로 완치합니다.",
  비염클리닉 : "알레르기성 비염, 축농증 등을 한방치료로 근본적으로 치료합니다.",
  여성클리닉 : "생리통, 갱년기 증상, 불임 등 여성 건강을 위한 맞춤형 한방치료를 제공합니다.",
  비만클리닉 : "한방 다이어트와 체질 개선을 통해 건강한 체중 감량을 도와드립니다.",
  청소년클리닉 : "신생아부터 청소년까지의 성장발달, 질병 예방 및 치료를 담당합니다. 예방접종, 성장클리닉, 알레르기 클리닉 등을 운영합니다.",
  난임치료 : "부부의 체질을 개선하여 자연 임신을 돕는 한방치료를 진행합니다.",
  도수치료 : "손으로 직접 시술하여 근육과 관절의 통증을 치료하는 전통 한방치료입니다.",
  추나치료 : "한의사가 직접 시술하는 추나요법으로 척추와 관절을 교정합니다.",
  체외충격파치료 : "근육과 인대의 통증을 효과적으로 치료하는 현대적 물리치료입니다.",
  각종물리치료 : "전기치료, 온열치료 등 다양한 물리치료로 통증을 완화합니다.",
  생리통갱년기 : "생리통과 갱년기 증상을 한방치료로 완화하고 건강한 여성 생활을 돕습니다."
}

export default function AnimatedServiceCard({ name, desc, index }: ServiceCardProps) {
  const { ref, isVisible } = useScrollAnimation(0.1)

  return (
    <div
      ref={ref}
      className={`transform transition-all duration-700 ease-out ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <Card className="relative hover:shadow-xl hover:scale-105 transition-all duration-300 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50 group overflow-hidden h-full min-h-[200px]">
        <CardHeader className="relative overflow-hidden p-6 h-full">
          {/* Background gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Default content - always visible */}
          <div className="relative z-10 transition-all duration-300 group-hover:opacity-0">
            <CardTitle className="text-lg text-gray-900 mb-3 font-bold">{name}</CardTitle>
            <CardDescription className="text-gray-600 text-sm leading-relaxed">{desc}</CardDescription>
          </div>

          {/* Hover content - appears on hover */}
          <div className="absolute inset-6 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-center">
            <div className="space-y-4">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-sm font-bold">+</span>
                </div>
                <h4 className="font-bold text-blue-600 text-lg leading-tight">{name} 상세정보</h4>
              </div>

              <p className="text-gray-700 text-sm leading-relaxed line-clamp-4">
                {serviceDetails[name] || "전문적인 의료 서비스를 제공합니다."}
              </p>

              <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                <span className="text-xs text-gray-500">전문 진료과</span>
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-4 w-8 h-8 bg-blue-100 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100">
            <div className="w-full h-full bg-blue-600 rounded-full transform scale-0 group-hover:scale-50 transition-transform duration-300 delay-100" />
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-500 ease-out" />
        </CardHeader>
      </Card>
    </div>
  )
}
