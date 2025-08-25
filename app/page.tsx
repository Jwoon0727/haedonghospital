"use client"
import Image from "next/image"
import { Phone, MapPin, Clock, Mail, Heart, Trophy, Medal, Award, Star, Target, Users, Home, User, Bus, Train } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import FAQSectionComponent from "@/components/faq-section"
import FacilitiesSliderComponent from "@/components/facilities-slider"
import HeroSliderComponent from "@/components/hero-slider"
import AnimatedServiceCard from "@/components/animated-service-card"
import HeaderComponent from "@/components/header"
import ConsultationFormComponent from "@/components/consultation-form"
import dynamic from "next/dynamic"

// 카카오맵 컴포넌트를 동적으로 불러오기
const KakaoMap = dynamic(() => import('@/utils/kakaomap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full flex items-center justify-center bg-gray-800">
      <p className="text-white">지도를 불러오는 중...</p>
    </div>
  )
})


export default function HaedongHospital() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <HeaderComponent />

      {/* Hero Section */}
      <HeroSliderComponent />



      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-blue-50 via-white to-amber-50 relative overflow-hidden pt-32"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-blue-100/20 to-amber-100/20 rounded-full blur-2xl"></div>
        </div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-4 h-4 bg-blue-600 rounded-full"></div>
          <div className="absolute top-40 right-32 w-3 h-3 bg-amber-600 rounded-full"></div>
          <div className="absolute bottom-32 left-40 w-2 h-2 bg-blue-600 rounded-full"></div>
          <div className="absolute bottom-20 right-20 w-5 h-5 bg-amber-600 rounded-full"></div>
          <div className="absolute top-1/3 left-1/4 w-1 h-16 bg-blue-600 rounded-full transform rotate-45"></div>
          <div className="absolute top-2/3 right-1/4 w-1 h-12 bg-amber-600 rounded-full transform -rotate-45"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative">
              {/* Subtle background card */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm rounded-3xl shadow-lg -m-8 p-8"></div>

              <div className="relative z-10">
                <div>
                  <p className="text-lg font-medium text-amber-600 mb-4 tracking-wider">HAEDONG HOSPITAL</p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                    <span className="text-blue-600">해동한방병원의</span>
                    <br />
                    진료과목을
                    <br />
                    소개합니다.
                  </h2>
                </div>

                <p className="text-xl text-gray-600 leading-relaxed">
                  전통 한의학과 현대 의학을 결합한 통합 진료로 환자 개개인에게 최적화된 맞춤 치료를 제공합니다.
                </p>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-1 bg-gradient-to-r from-blue-600 to-amber-600 rounded-full"></div>
                  <span className="text-gray-500 font-medium">신뢰와 경험</span>
                </div>
              </div>
            </div>

            {/* Right Cards */}
            <div className="space-y-6">
              {/* Card 1 - 도수치료안내 */}
              <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 bg-gradient-to-br from-orange-100 to-orange-200">
                  <Image
                    src="/도수수.avif"
                    alt="도수치료안내"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white font-bold">#</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">도수치료안내</h3>
                  </div>

                  {/* Hover overlay with detailed description */}
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 p-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">🤲</span>
                        </div>
                        <h4 className="font-bold text-amber-600 text-xl">도수치료 전문센터</h4>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        전문 물리치료사의 손을 이용한 1:1 맞춤 치료로 근골격계 질환을 근본적으로 개선합니다.
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">척추 측만증, 거북목 교정</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">어깨 충돌증후군 치료</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">골반 불균형 교정</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                        <span className="text-xs text-gray-500">1:1 전담 치료</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-amber-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-amber-500 to-orange-500 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>

              {/* Card 2 - 여성질환/난임클리닉 */}
              <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 bg-gradient-to-br from-blue-100 to-blue-200">
                  <Image
                    src="/여성질환.webp"
                    alt="여성질환/난임클리닉"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white font-bold">#</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">여성질환/난임클리닉</h3>
                  </div>

                  {/* Hover overlay with detailed description */}
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 p-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-pink-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">👩‍⚕️</span>
                        </div>
                        <h4 className="font-bold text-pink-600 text-xl">여성 전문 클리닉</h4>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        여성의 생애주기별 건강 관리와 난임 치료를 위한 전문적이고 체계적인 진료를 제공합니다.
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">월경불순, 생리통 치료</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">난임 검사 및 치료</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <span className="text-sm text-gray-600">갱년기 관리 프로그램</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                        <span className="text-xs text-gray-500">여성 전담 의료진</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                          <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>

              {/* Card 3 - 근로복지공단 산재지정병원 */}
              <div className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-64 bg-gradient-to-br from-green-100 to-green-200">
                  <Image
                    src="/의사.png"
                    alt="근로복지공단 산재지정병원"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center mb-3">
                      <span className="text-white font-bold">#</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                      근로복지공단
                      <br />
                      산재지정병원
                    </h3>
                  </div>

                  {/* Hover overlay with detailed description */}
                  <div className="absolute inset-0 bg-white/95 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 p-6 flex flex-col justify-center">
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">🏭</span>
                        </div>
                        <h4 className="font-bold text-green-600 text-xl">산재 전문 치료</h4>
                      </div>

                      <p className="text-gray-700 text-sm leading-relaxed mb-3">
                        근로복지공단 지정 산재병원으로 업무상 재해로 인한 질병과 부상을 전문적으로 치료합니다.
                      </p>

                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">산업재해 치료 (본인부담금 0원)</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">직업병 진단 및 치료</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <span className="text-sm text-gray-600">재활치료 및 사회복귀 지원</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-200">
                        <span className="text-xs text-gray-500">공단 지정병원</span>
                        <div className="flex items-center space-x-1">
                          <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom accent line */}
                  <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-green-600 to-emerald-600 group-hover:w-full transition-all duration-500 ease-out" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">병원장 인사말</h2>
            <p className="text-xl text-gray-600">해동병원을 이끌어가는 의료진을 소개합니다.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <div className="relative">
                <Image
                  src="/person.jpg"
                  alt="김해동 병원장"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">25+</div>
                    <div className="text-sm text-gray-600">년 경력</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-2 lg:order-2">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">이상돈 병원장</h3>
                </div>

                <div className="prose prose-lg text-gray-600">
                  <p className="leading-relaxed text-xl font-bold">안녕하세요.</p>
                  <p className="leading-relaxed px-3 py-1 rounded text-xl font-bold">
                    의정부 민락2지구에 해동한방병원을<br />
                    개원하게 된 병원장 이상돈입니다.
                  </p>
                  <p className="leading-relaxed">
                  저희 해동한방병원은 다년간의 다양한 경험과 노하우를 가지고
의정부지역에서 새로운 출발을 하려 합니다.
지역주민들과 융화되어 함께 만들어가는 양·한방 병원이 되고자 노력하겠습니다.
양·한방 협진이 이루어지는 해동한방병원에서는
한의과의 전통적인 치료와 양방협진으로 동시에 치료를 받으실 수 있으며,
친절한 상담과 정성스러운 진료를 통해 환자 여러분들의 마음까지
편안함을 느끼실 수 있을 것입니다. <br></br>감사합니다.
                  </p>
                  
                  {/* Vision Section */}
                  <div className="flex items-center space-x-4 my-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center flex-shrink-0 shadow-lg">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <span className="text-amber-600 font-bold text-lg">비전</span>
                      <div className="ml-4 mt-2">
                        <div className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full inline-block shadow-lg">
                          <span className="font-semibold">한/양방의 협진을 통한 비수술적 자연치유를 지향하는 병원</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl shadow-lg border border-blue-100">
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                      <Target className="w-5 h-5 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-900">미션</h4>
                  </div>
                  <ul className="space-y-4 text-gray-700">
                    <li className="flex items-start space-x-4 p-3 bg-white/60 rounded-xl backdrop-blur-sm">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Heart className="w-4 h-4 text-blue-600" />
                      </div>
                      <span className="font-medium">환자 중심의 인술을 베푸는 의료진</span>
                    </li>
                    <li className="flex items-start space-x-4 p-3 bg-white/60 rounded-xl backdrop-blur-sm">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-4 h-4 text-green-600" />
                      </div>
                      <span className="font-medium">사랑으로 친절하게 봉사하는 직원</span>
                    </li>
                    <li className="flex items-start space-x-4 p-3 bg-white/60 rounded-xl backdrop-blur-sm">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <Home className="w-4 h-4 text-purple-600" />
                      </div>
                      <span className="font-medium">환자를 나의 가족이라고 생각하는 병원</span>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2 text-sm font-medium rounded-full">
                    한국&미국 한의 라인센스 보유
                  </Badge>
                  <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2 text-sm font-medium rounded-full">
                    선친의 대를 이은 한의사
                  </Badge>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 relative overflow-hidden pt-32"
      >
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-amber-200/20 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-yellow-200/25 rounded-full blur-2xl"></div>
          <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-amber-300/15 rounded-full blur-3xl"></div>
        </div>

        {/* Geometric pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-16 left-16 w-3 h-3 bg-amber-600 rounded-full"></div>
          <div className="absolute top-32 right-24 w-2 h-2 bg-orange-600 rounded-full"></div>
          <div className="absolute bottom-24 left-32 w-4 h-4 bg-yellow-600 rounded-full"></div>
          <div className="absolute bottom-16 right-16 w-2 h-2 bg-amber-700 rounded-full"></div>
          <div className="absolute top-1/2 left-20 w-1 h-12 bg-amber-600 rounded-full transform rotate-30"></div>
          <div className="absolute top-1/3 right-20 w-1 h-16 bg-orange-600 rounded-full transform -rotate-45"></div>

          {/* Hexagon shapes */}
          <div className="absolute top-20 left-1/3 w-6 h-6 bg-amber-500/20 transform rotate-45"></div>
          <div className="absolute bottom-20 right-1/3 w-4 h-4 bg-orange-500/20 transform rotate-12"></div>
        </div>

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
              linear-gradient(rgba(245, 158, 11, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.1) 1px, transparent 1px)
            `,
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            {/* Enhanced title section */}
            <div className="relative inline-block mb-6">
              <div className="absolute inset-0 bg-amber-100/50 rounded-2xl blur-xl transform scale-110"></div>
              <div className="relative bg-white/60 backdrop-blur-sm px-8 py-4 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">특설 진료과목</h2>
                <div className="w-16 h-1 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full mx-auto"></div>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              해동한방병원의 특설진료를 확인해보세요
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "교통사고후유증", desc: "교통사고로 인한 목디스크, 허리디스크, 어깨 통증 등을 한방치료로 완치합니다." },
              { name: "비염클리닉", desc: "알레르기성 비염, 축농증 등을 한방치료로 근본적으로 치료합니다." },
              { name: "여성클리닉", desc: "생리통, 갱년기 증상, 불임 등 여성 건강을 위한 맞춤형 한방치료를 제공합니다." },
              { name: "비만클리닉", desc: "한방 다이어트와 체질 개선을 통해 건강한 체중 감량을 도와드립니다." },
              { name: "청소년클리닉", desc: "신생아부터 청소년까지의 성장발달, 질병 예방 및 치료를 담당합니다. 예방접종, 성장클리닉, 알레르기 클리닉 등을 운영합니다." },
              { name: "난임치료", desc: "부부의 체질을 개선하여 자연 임신을 돕는 한방치료를 진행합니다." },
              { name: "도수치료", desc: "손으로 직접 시술하여 근육과 관절의 통증을 치료하는 전통 한방치료입니다." },
              { name: "추나치료", desc: "한의사가 직접 시술하는 추나요법으로 척추와 관절을 교정합니다." },
              { name: "체외충격파치료", desc: "근육과 인대의 통증을 효과적으로 치료하는 현대적 물리치료입니다." },
              { name: "각종물리치료", desc: "전기치료, 온열치료 등 다양한 물리치료로 통증을 완화합니다." },
              { name: "생리통,갱년기", desc: "생리통과 갱년기 증상을 한방치료로 완화하고 건강한 여성 생활을 돕습니다." },
            ].map((service, index) => (
              <AnimatedServiceCard key={index} name={service.name} desc={service.desc} index={index} />
            ))}
          </div>

          {/* Bottom decorative element */}
          <div className="mt-20 text-center">
            <div className="inline-flex items-center space-x-4 bg-white/40 backdrop-blur-sm px-8 py-4 rounded-full shadow-lg">
              <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse"></div>
              <span className="text-amber-700 font-medium">전문 의료진과 함께하는 건강한 삶</span>
              <div
                className="w-3 h-3 bg-orange-500 rounded-full animate-pulse"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <FacilitiesSliderComponent />

      {/* Consultation Form Section */}
      <ConsultationFormComponent />

      {/* Q&A Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">자주 묻는 질문</h2>
            <p className="text-xl text-gray-600">환자분들이 자주 문의하시는 내용을 정리했습니다.</p>
          </div>

          <FAQSectionComponent />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">오시는 길 & 연락처</h2>
            <p className="text-xl text-gray-600">해동병원을 찾아주시는 모든 분들을 환영합니다.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Info & Transportation */}
            <div className="space-y-8">
              {/* Address */}
              <div className="p-6 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">주소</h3>
                    <p className="text-gray-700 font-medium">경기 의정부시 천보로 56</p>
                    <p className="text-gray-700">해동2타워 10층 1001~1005호</p>
                    <p className="text-gray-500 text-sm mt-1">(지번) 민락동 805-3</p>
                  </div>
                </div>
              </div>

              {/* Transportation */}
              <div className="space-y-4">
                {/* Bus */}
                <div className="p-5 rounded-xl border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Bus className="w-4 h-4 text-green-600" />
                    </div>
                    <h4 className="text-green-700 font-semibold">버스</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-3">
                    산들마을 1단지, 2단지 하차후 정면 횡단보도 건넌 후 도보로 2분
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">35, 3</span>
                    <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">206, 205-1</span>
                  </div>
                </div>

                {/* Subway */}
                <div className="p-5 rounded-xl border border-gray-200">
                  <div className="flex items-center space-x-3 mb-3">
                    <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <Train className="w-4 h-4 text-blue-600" />
                    </div>
                    <h4 className="text-blue-700 font-semibold">지하철</h4>
                  </div>
                  <p className="text-gray-700 text-sm mb-2">1호선 의정부역</p>
                  <p className="text-gray-700 text-sm">
                    하차 후 <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">35, 3번</span> 버스 탑승
                  </p>
                </div>
              </div>

              {/* Contact */}
              <div className="p-6 rounded-xl border border-gray-200">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-amber-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-3 text-lg">연락처</h3>
                    <p className="text-gray-700 font-medium">대표전화: 031-823-3650</p>
                    <p className="text-gray-500 text-sm mt-1">평일 09:00 - 20:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Map & Hours */}
            <div className="space-y-8">
              {/* Map */}
              <div className="bg-gray-100 rounded-xl p-8 h-96 flex items-center justify-center relative">
                <KakaoMap />
                
                {/* 길찾기 버튼 - 지도 하단에 오버레이 */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Button
                    onClick={() => {
                      // 카카오맵 길찾기 URL (의정부 좌표 기준)
                      const kakaoMapUrl = "https://map.kakao.com/link/to/해동한방병원,37.74483,127.09529"
                      window.open(kakaoMapUrl, '_blank')
                    }}
                    className="bg-amber-500 hover:bg-amber-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 text-sm font-medium"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>카카오맵 길찾기</span>
                  </Button>
                </div>
              </div>

              {/* Consultation Hours */}
              <div className="p-6 rounded-xl border border-gray-200">
                
                {/* Status Indicator */}
                <div className="mb-4 text-center">
                  {(() => {
                    const now = new Date()
                    const day = now.getDay() // 0: 일요일, 1: 월요일, ..., 6: 토요일
                    const hour = now.getHours()
                    const minute = now.getMinutes()
                    const currentTime = hour * 100 + minute
                    
                    let isOpen = false
                    let statusText = ""
                    let statusColor = ""
                    
                    if (day === 0) { // 일요일
                      isOpen = currentTime >= 1300 && currentTime <= 1800
                      statusText = isOpen ? "진료중" : "진료종료"
                      statusColor = isOpen ? "text-green-600" : "text-red-600"
                    } else if (day === 6) { // 토요일
                      isOpen = currentTime >= 900 && currentTime <= 1500
                      statusText = isOpen ? "진료중" : "진료종료"
                      statusColor = isOpen ? "text-green-600" : "text-red-600"
                    } else if (day >= 1 && day <= 5) { // 평일
                      isOpen = currentTime >= 900 && currentTime <= 2000
                      statusText = isOpen ? "진료중" : "진료종료"
                      statusColor = isOpen ? "text-green-600" : "text-red-600"
                    } else {
                      statusText = "휴진"
                      statusColor = "text-gray-500"
                    }
                    
                    return (
                      <div className={`inline-flex items-center space-x-2 px-4 py-2 rounded-full ${isOpen ? 'bg-green-100' : 'bg-red-100'}`}>
                        <div className={`w-3 h-3 rounded-full ${isOpen ? 'bg-green-500' : 'bg-red-500'}`}></div>
                        <span className={`font-semibold ${statusColor}`}>{statusText}</span>
                      </div>
                    )
                  })()}
                </div>

                {/* Hours Table */}
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-2 font-medium text-gray-700">요일</th>
                        <th className="text-center py-2 font-medium text-gray-700">OPEN</th>
                        <th className="text-center py-2 font-medium text-gray-700">CLOSE</th>
                        <th className="text-center py-2 font-medium text-gray-700">진료시간</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100">
                      <tr className={`py-3 hover:bg-gray-50 ${(() => {
                        const today = new Date().getDay()
                        return today === 1 ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      })()}`}>
                        <td className="py-3 font-medium text-gray-800">월요일</td>
                        <td className="text-center text-gray-600">09:00</td>
                        <td className="text-center text-red-600 font-semibold">20:00</td>
                        <td className="text-center text-gray-500 text-xs">11시간</td>
                      </tr>
                      <tr className={`py-3 hover:bg-gray-50 ${(() => {
                        const today = new Date().getDay()
                        return today === 2 ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      })()}`}>
                        <td className="py-3 font-medium text-gray-800">화요일</td>
                        <td className="text-center text-gray-600">09:00</td>
                        <td className="text-center text-red-600 font-semibold">20:00</td>
                        <td className="text-center text-gray-500 text-xs">11시간</td>
                      </tr>
                      <tr className={`py-3 hover:bg-gray-50 ${(() => {
                        const today = new Date().getDay()
                        return today === 3 ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      })()}`}>
                        <td className="py-3 font-medium text-gray-800">수요일</td>
                        <td className="text-center text-gray-600">09:00</td>
                        <td className="text-center text-red-600 font-semibold">20:00</td>
                        <td className="text-center text-gray-500 text-xs">11시간</td>
                      </tr>
                      <tr className={`py-3 hover:bg-gray-50 ${(() => {
                        const today = new Date().getDay()
                        return today === 4 ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      })()}`}>
                        <td className="py-3 font-medium text-gray-800">목요일</td>
                        <td className="text-center text-gray-600">09:00</td>
                        <td className="text-center text-red-600 font-semibold">20:00</td>
                        <td className="text-center text-gray-500 text-xs">11시간</td>
                      </tr>
                      <tr className={`py-3 hover:bg-gray-50 ${(() => {
                        const today = new Date().getDay()
                        return today === 5 ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      })()}`}>
                        <td className="py-3 font-medium text-gray-800">금요일</td>
                        <td className="text-center text-gray-600">09:00</td>
                        <td className="text-center text-red-600 font-semibold">20:00</td>
                        <td className="text-center text-gray-500 text-xs">11시간</td>
                      </tr>
                      <tr className={`py-3 hover:bg-gray-50 ${(() => {
                        const today = new Date().getDay()
                        return today === 6 ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      })()}`}>
                        <td className="py-3 font-medium text-gray-800">토요일</td>
                        <td className="text-center text-gray-600">09:00</td>
                        <td className="text-center text-red-600 font-semibold">15:00</td>
                        <td className="text-center text-gray-500 text-xs">6시간</td>
                      </tr>
                      <tr className={`py-3 hover:bg-gray-50 ${(() => {
                        const today = new Date().getDay()
                        return today === 0 ? 'bg-blue-50 border-l-4 border-l-blue-500' : ''
                      })()}`}>
                        <td className="py-3 font-medium text-gray-800">일요일</td>
                        <td className="text-center text-gray-600">13:00</td>
                        <td className="text-center text-red-600 font-semibold">18:00</td>
                        <td className="text-center text-gray-500 text-xs">5시간</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Special Notes */}
                <div className="mt-4 p-3 bg-amber-50 rounded-lg border border-amber-200">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-amber-800 font-medium">점심시간:</span>
                    <span className="text-amber-700">12:30 - 13:30</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-amber-800 font-medium">토·공휴일:</span>
                    <span className="text-amber-700 font-bold">9:00 ~ 15:00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold">해동한방병원</h3>
              </div>
              <p className="text-gray-400 mb-4">건강한 삶을 위한 최고의 의료서비스.</p>
            </div>

            {/* 진료시간 */}
            <div>
              <h4 className="font-semibold mb-6 text-lg">진료시간</h4>
              <div className="space-y-3">
                {/* 평일 */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-white-700 font-medium">평일</span>
                    <div className="text-right">
                      <p className="text-white-800 font-semibold">오전 9:00 ~ 오후 8:00</p>
                    </div>
                  </div>
                </div>

                {/* 점심시간 */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-white-700 font-medium">점심시간</span>
                    <div className="text-right">
                      <p className="text-white-800 font-semibold">오후 12:30 ~ 오후 1:30</p>
                    </div>
                  </div>
                </div>

                {/* 토·공휴일 */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-white-700 font-medium">토·공휴일</span>
                    <div>
                      <p className="text-white-800 font-semibold">오전 9:00 ~ 오후 3:00</p>
                    </div>
                  </div>
                </div>

                {/* 일요일 */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-white-700 font-medium">일요일</span>
                    <div className="text-right">
                      <p className="text-white-800 font-semibold">오후 1:00 ~ 오후 6:00</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 병원정보 */}
            <div>
              <h4 className="pl-16 font-semibold mb-4 text-lg">병원정보</h4>
              <div className="space-y-3">
                {/* 주소 */}
                <div className="pl-17">
                  <div className="flex-1">
                    <p className="text-white-600 font-medium text-xs mb-1">주소 : </p>
                    <p className="text-white-700 text-xs leading-relaxed">
                      경기 의정부시 천보로 56 해동2타워 10층<br />
                      <span className="text-white-500 text-xs">(지번) 민락동 805-3</span>
                    </p>
                  </div>
                </div>

                {/* 사업자번호 */}
                <div className="pl-17">
                  <div className="flex-1">
                    <p className="text-white-600 font-medium text-xs mb-1">사업자 번호 : 666-96-00628</p>
                    
                  </div>
                </div>

                {/* 대표원장 */}
                <div className="pl-17">
                  <div className="flex-1">
                    <p className="text-white-600 font-medium text-xs mb-1">대표원장 : 이상돈</p>
                    
                  </div>
                </div>

                {/* 대표전화 */}
                <div className="pl-17">
                  <div className="flex-1">
                    <p className="text-white-600 font-medium text-xs mb-1">대표전화 : 031-823-3650</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 해동병원. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
