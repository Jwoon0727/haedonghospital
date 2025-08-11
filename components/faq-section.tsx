"use client"

//qna

import { useState } from "react"
import { Plus, Minus } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const faqs = [
  {
    question: "교통사고가 났는데 보험 적용이 될까요?",
    answer: "자동차보험 적용이 가능합니다. 보험사항을 받아 해당 보험회사에 지불보증을 확인한 후 증상에 맞는 진료가 진행됩니다.",
  },
  {
    question: "교통사고 후유증으로 고생을 하고 있습니다. 해동한방병원의 치료는 어떻게 이루어지나요?",
    answer: "해동한방병원은 한·양방 협진 시스템으로 빠른 회복을 돕고 있습니다. 통증과 손상의 근원을 치료하는 한방치료와 작은 통증이지만 사고 후 만성까지 발전할 수 있는 질환까지 입원집중 치료프로그램을 통해 체계적인 치료가 제공되고 있습니다.",
  },
  {
    question: "산재보험 처리가 가능한가요?",
    answer:
      "네 가능합니다. 해동한방병원은 산재지정 의료기관입니다.",
  },
  {
    question: "현재 임신중입니다. 국민행복카드 어떻게 사용이 가능한가요?",
    answer:
      "산전에는 임신 기간 중 입덧이 심할경우 입덧을 진정시켜주는 보약이나 순산을 위한 체력 보강 산전보약이 있습니다. 그리고 산후에는 어혈을 풀어주고 기혈을 보충해주는 것이 중요하므로 산후보약처방이나 출산 후 틀어진 몸을 바로 잡아주는 추나요법치료에 사용 가능하십니다. 원무과에서 수납시 국민행복카드 사용 여부만 말씀해주시면 됩니다.",
  }
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <motion.div
          key={index}
          className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          <button
            className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-blue-50 transition-all duration-200 group"
            onClick={() => toggleFAQ(index)}
          >
            <span className="font-semibold text-lg text-gray-800 pr-4 group-hover:text-blue-700 transition-colors">
              {faq.question}
            </span>
            <motion.div
              animate={{ rotate: openIndex === index ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {openIndex === index ? (
                <Minus className="w-6 h-6 text-blue-600 flex-shrink-0" />
              ) : (
                <Plus className="w-6 h-6 text-blue-600 flex-shrink-0" />
              )}
            </motion.div>
          </button>
          
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5">
                  <div className="pt-3 border-t border-gray-100">
                    <p className="text-base text-gray-700 leading-relaxed font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  )
}
