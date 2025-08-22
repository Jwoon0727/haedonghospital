"use client"

import { useEffect, useRef } from "react"

const KakaoMap = () => {
  const mapContainerRef = useRef(null)
  const mapInstanceRef = useRef(null)

  useEffect(() => {
    // 이미 지도가 초기화되어 있다면 리턴
    if (mapInstanceRef.current) return

    const initializeMap = () => {
      const container = mapContainerRef.current
      if (!container) return

      const options = {
        center: new window.kakao.maps.LatLng(37.5665, 126.9780),
        level: 3
      }

      // 지도 생성
      const map = new window.kakao.maps.Map(container, options)
      mapInstanceRef.current = map

      // 지도 컨트롤러 추가
      const mapTypeControl = new window.kakao.maps.MapTypeControl()
      map.addControl(mapTypeControl, window.kakao.maps.ControlPosition.TOPRIGHT)

      const zoomControl = new window.kakao.maps.ZoomControl()
      map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT)

      // 마커 생성
      const markerPosition = new window.kakao.maps.LatLng(37.5665, 126.9780)
      const marker = new window.kakao.maps.Marker({
        position: markerPosition
      })
      marker.setMap(map)
    }

    // 카카오맵 스크립트가 이미 로드되어 있는 경우
    if (window.kakao && window.kakao.maps) {
      initializeMap()
      return
    }

    // 스크립트가 로드 중인 경우 대기
    if (document.querySelector('script[src*="dapi.kakao.com"]')) {
      const checkKakaoMaps = setInterval(() => {
        if (window.kakao && window.kakao.maps) {
          clearInterval(checkKakaoMaps)
          initializeMap()
        }
      }, 100)
      return
    }

    // 새로운 스크립트 추가
    const script = document.createElement("script")
    script.src = "//dapi.kakao.com/v2/maps/sdk.js?appkey=06f41dcc4cfb97542d10711c83d8457d&autoload=false"
    script.async = true

    script.onload = () => {
      window.kakao.maps.load(initializeMap)
    }

    document.head.appendChild(script)

    // cleanup
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current = null
      }
    }
  }, [])

  return (
    <div 
      ref={mapContainerRef}
      className="w-full h-full rounded-lg overflow-hidden"
      style={{ 
        width: "100%", 
        height: "100%"
      }}
    />
  )
}

export default KakaoMap