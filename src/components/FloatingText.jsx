import React, { useEffect, useState } from "react"

const japaneseTexts = ["アート", "デザイン", "創造", "未来", "スタイル", "音楽", "夢", "希望"]

export default function FloatingText() {
  const [positions, setPositions] = useState([])

  useEffect(() => {
    setPositions([...Array(8)].map(() => Math.random() * 360))
  }, [])

  return (
    <>
      {japaneseTexts.map((text, index) => (
        <div
          key={index}
          className="fixed pointer-events-none text-xs font-light opacity-30"
          style={{
            top: `${20 + index * 15}%`,
            left: `${5 + index * 8}%`,
            transform: `rotate(${positions[index]}deg)`,
            animation: `float${index + 1} 8s infinite ease-in-out`,
            zIndex: 0,
            color: index % 2 === 0 ? "#FFD700" : "#1a1a1a",
          }}
        >
          {text}
        </div>
      ))}

      <style jsx>{`
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(${positions[0]}deg); }
          50% { transform: translate(10px, -10px) rotate(${positions[0] + 10}deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(${positions[1]}deg); }
          50% { transform: translate(-15px, 5px) rotate(${positions[1] - 15}deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0) rotate(${positions[2]}deg); }
          50% { transform: translate(8px, 8px) rotate(${positions[2] + 20}deg); }
        }
        @keyframes float4 {
          0%, 100% { transform: translate(0, 0) rotate(${positions[3]}deg); }
          50% { transform: translate(-12px, -5px) rotate(${positions[3] - 25}deg); }
        }
        @keyframes float5 {
          0%, 100% { transform: translate(0, 0) rotate(${positions[4]}deg); }
          50% { transform: translate(15px, -8px) rotate(${positions[4] + 15}deg); }
        }
        @keyframes float6 {
          0%, 100% { transform: translate(0, 0) rotate(${positions[5]}deg); }
          50% { transform: translate(-8px, 12px) rotate(${positions[5] - 20}deg); }
        }
        @keyframes float7 {
          0%, 100% { transform: translate(0, 0) rotate(${positions[6]}deg); }
          50% { transform: translate(12px, -15px) rotate(${positions[6] + 25}deg); }
        }
        @keyframes float8 {
          0%, 100% { transform: translate(0, 0) rotate(${positions[7]}deg); }
          50% { transform: translate(-10px, 10px) rotate(${positions[7] - 10}deg); }
        }
      `}</style>
    </>
  )
}

