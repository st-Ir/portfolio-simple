import React, { useState, useRef } from "react"
import { Input } from "./ui/input"
import { Card } from  "./ui/card"
import { Search, ThermometerSun, Pencil } from "lucide-react"
import Clock from "./clock.jsx"
import FloatingText from "./FloatingText.jsx"

const agendaItems = [
  {
    date: "Mon, 22",
    time: "09:00",
    title: "Team Meeting - Project Review",
    type: "meeting",
  },
  {
    date: "Tue, 23",
    title: "Submit Project Proposal",
    type: "task",
  },
  {
    date: "Wed, 24",
    time: "14:30",
    title: "Client Presentation",
    type: "meeting",
  },
  {
    date: "Thu, 25",
    title: "Code Review Deadline",
    type: "reminder",
  },
  {
    date: "Fri, 26",
    time: "11:00",
    title: "Weekly Sprint Planning",
    type: "meeting",
  },
]

export default function AnimeUI() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audioRef = useRef(null)

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause()
    } else {
      audioRef.current?.play()
    }
    setIsPlaying(!isPlaying)
  }

  return (
    <div className="h-screen  w-screen relative bg-[#fdf6e9] p-8 sm:p-30 md:p-40 overflow-hidden">
      <FloatingText />
      {/* Logo */}
      <div className="absolute top-2 sm:top-4 md:top-8 left-2 sm:left-4 md:left-8">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-tighter" style={{ fontFamily: 'BOM' }}>BOCHI THE ROCKS</h1>
        <p className="text-[8px] sm:text-[10px] md:text-xs lg:text-sm tracking-tight text-gray-600">art • byfee0</p>
      </div>

      {/* Japanese Character る */}
      <div
        className="absolute top-12 sm:top-16 md:top-24 lg:top-32 left-[10%] sm:left-[15%] md:left-[25%] text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#FFD700] font-bold"
        style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
      >
        る
      </div>

      {/* Number Badge */}
      <div className="absolute top-2 sm:top-4 md:top-8 right-2 sm:right-4 md:right-8 bg-[#1a1a1a] text-white text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs px-1 sm:px-1.5 md:px-2 py-0.5 rounded-sm">
        01.
      </div>

      {/* Color Bar */}
      <div className="absolute top-8 sm:top-12 md:top-20 right-2 sm:right-4 md:right-8 flex gap-0.5">
        <div className="w-4 sm:w-6 md:w-8 lg:w-10 h-0.5 sm:h-1 md:h-1.5 bg-black"></div>
        <div className="w-4 sm:w-6 md:w-8 lg:w-10 h-0.5 sm:h-1 md:h-1.5 bg-[#FFCFD1]"></div>
        <div className="w-4 sm:w-6 md:w-8 lg:w-10 h-0.5 sm:h-1 md:h-1.5 bg-[#FFD700]"></div>
      </div>

      {/* Camera Badge */}

        {/* clock */}
      {/* Main Content Area */}
      <div className="fixed max-w-6xl mx-auto my-auto mt-16 sm:max-w-6x1 md:mt-[-100px] lg:mt-[-60px] relative">
      <div className="absolute top-20 lg:top-60 md:top-[320px] gap-0.5">
            <Clock  />
      </div>
        {/* Character Image - Centered and Larger */}
        <div className="relative w-full max-w-[300px] sm:max-w-[450px] md:max-w-[600px] lg:max-w-[600px] aspect-[5/6] mx-auto mb-4 sm:mb-8 md:mb-12 lg:mb-16 z-10" >
          <img
            src="/bocchi.png"
            alt="Hitorrri Bocchi desu"
            className="w-full h-full object-contain mix-blend-multiply"
          />
        </div>

        {/* Canon */}
        <div className="absolute right-1 sm:right-40 md:right-[-60px] top-[100px] sm:top-[200px] md:top-60 w-20 sm:w-20 md:w-60 lg:w-80 z-20">
        <Card className="px-1 sm:px-2 md:px-4 py-0.5 sm:py-1 md:py-2 flex items-center gap-1 sm:gap-2 md:gap-3 bg-[#1a1a1a] text-white rounded-sm">
          <div className="relative w-2 sm:w-3 md:w-4 lg:w-5 h-2 sm:h-3 md:h-4 lg:h-5">
            <div className="absolute inset-0 border border-white rounded-sm"></div>
            <div className="absolute inset-[1px] sm:inset-[2px] md:inset-[3px] border border-white rounded-sm"></div>
            <div className="absolute right-0 top-0 w-0.5 md:w-1 h-0.5 md:h-1 bg-white rounded-full"></div>
          </div>
          <span className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs tracking-wide">Canon</span>
        </Card>
        </div>

        {/* Music Player */}
        <Card className="absolute left-[-6px] sm:left-14 md:left-[-68px] bottom-[170px] sm:bottom-[270px] md:bottom-[240px] bg-black text-white p-2 sm:p-3 md:p-4 w-36 sm:w-48 md:w-64 lg:w-72">
          <audio ref={audioRef} src="/song.ogg" onEnded={() => setIsPlaying(false)} />
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex items-center gap-2 sm:gap-2 md:gap-3">
              <button onClick={togglePlay} className="flex gap-0.5 p-1 sm:gap-1 hover:opacity-80 transition-opacity">
                {isPlaying ? (
                  <>
                    <div className="w-0.5 sm:w-1 md:w-1.5 lg:w-2 h-3 sm:h-4 md:h-6 lg:h-7 bg-white rounded-sm"></div>
                    <div className="w-0.5 sm:w-1 md:w-1.5 lg:w-2 h-3 sm:h-4 md:h-6 lg:h-7 bg-white rounded-sm"></div>
                  </>
                ) : (
                  <div className="w-0 h-0 border-t-[6px] sm:border-t-[8px] md:border-t-[12px] lg:border-t-[14px] border-t-transparent border-l-[9px] sm:border-l-[12px] md:border-l-[18px] lg:border-l-[21px] border-l-white border-b-[6px] sm:border-b-[8px] md:border-b-[12px] lg:border-b-[14px] border-b-transparent"></div>
                )}
              </button>
              <div className="flex flex-col">
                <span className="text-[10px] sm:text-[9px] md:text-[11px] lg:text-xs font-medium">Signature</span>
                <span className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[10px] text-gray-400">
                  {isPlaying ? "Playing now • 3:45" : "Click to play • 3:45"}
                </span>
              </div>
            </div>
          </div>
        </Card>

        {/* Chat Message */}
        <Card className="z-20 absolute right-[-10px] sm:right-2 md:right-[-60px] bottom-[100px] sm:bottom-[320px] md:bottom-[200px] lg:bottom-[270px] bg-[#FFD700] p-1 sm:p-2 md:p-3 lg:p-4 rounded-none opacity-85">
          <div className="flex items-start gap-1 sm:gap-2 md:gap-2.5 lg:gap-3 pr-2 sm:pr-4 md:pr-6 lg:pr-8 relative">
            <Pencil className="absolute top-0.5 sm:top-1 md:top-2 right-0.5 sm:right-1 md:right-2 h-1.5 sm:h-2 md:h-3 lg:h-4 w-1.5 sm:w-2 md:w-3 lg:w-4 text-gray-600" />
            <div className="flex w-14 sm:w-20 md:w-20 rounded-sm overflow-hidden bg-gray-200 flex-shrink-0">
              <img src="/bocchi.gif" alt="" className="w-full h-full object-cover " />
            </div>
            <div className="flex flex-col gap-0.5 md:gap-1 lg:gap-1.5 right-60">
              <p className="text-[7px] sm:text-[9px] md:text-[11px] lg:text-xs font-medium">Hi, how are you</p>
              <p className="text-[5px] sm:text-[7px] md:text-[9px] lg:text-[10px] text-gray-700 leading-relaxed max-w-[80px] sm:max-w-[120px] md:max-w-[180px] lg:max-w-[220px]">
                Welcome back! We really missed you. How are you doing today? Hope you're feeling okay since about
                yesterday. 
              </p>
            </div>
          </div>
        </Card>
        


        {/* Temperature Widget */}
        <div className="z-20 absolute left-1 sm:left-2 md:left-[-30px] bottom-[10px] sm:bottom-[20px] md:bottom-[20px] lg:bottom-[80px] flex items-center gap-1 sm:gap-2 md:gap-4">
          <div className="flex items-center gap-0.5 sm:gap-1 md:gap-2 bg-[#FFD700] px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-2 rounded-full">
            <ThermometerSun className="h-2 sm:h-3 md:h-3.5 lg:h-4 w-2 sm:w-3 md:w-3.5 lg:w-6" />
            <span className="text-[8px] sm:text-xs md:text-sm lg:text-base font-medium">26°</span>
            <div className="w-6 sm:w-8 md:w-12 lg:w-16 h-0.5 md:h-1 bg-black/20 rounded-full">
              <div className="w-4 sm:w-5 md:w-8 lg:w-10 h-full bg-black rounded-full"></div>
            </div>
            <span className="text-[6px] sm:text-[8px] md:text-[10px] lg:text-xs text-gray-700">29°/24°</span>
          <div className="relative w-6 h-6 sm:w-8 sm:h-6 md:w-10 md:h-10 lg:w-10 lg:h-10 lg:ml-2">
            <div className="absolute inset-0 rounded-full border-[1px] sm:border-2 md:border-3 border-[#FFFFFF]"></div>
            <div
              className="absolute inset-0 rounded-full border-[1px] sm:border-2 md:border-3 border-black"
              style={{
                clipPath: "polygon(0 0, 100% 0, 100% 70%, 0 70%)",
              }}
            ></div>
            <span className="absolute inset-0 flex items-center justify-center text-[6px] sm:text-[10px] md:text-xs lg:text-sm font-medium">
              70°
            </span>
          </div>
        </div>
          </div>

          {/* Temperature Circle */}

        {/* Search Bar */}
        <div className="z-20 opacity-90 absolute sm:right-2 md:right-0 bottom-[-140px] sm:bottom-[-60px] md:bottom-[-60px] lg:bottom-[370px] flex items-center gap-0.5 sm:gap-1 md:gap-2 bg-[#1a1a1a] text-white px-2 sm:px-3 md:px-4 py-0 sm:py-1.5 md:py-2 rounded-full w-full sm:w-48 md:w-64 lg:w-72">
          <Search className="h-2 sm:h-3 md:h-3.5 lg:h-4 w-8 sm:w-3 md:w-3.5 lg:w-4" />
          <Input
            type="text"
            placeholder="Poems about love"
            className="border-0 bg-transparent text-[8px] sm:text-[10px] md:text-xs lg:text-sm focus-visible:ring-0 focus-visible:ring-offset-0 text-white placeholder:text-gray-400"
          />
        </div>

        {/* Japanese Character バ */}
        <div
          className="absolute bottom-[-80px] sm:bottom-[-100px] md:bottom-20 lg:bottom-24 right-2 sm:right-4 md:right-[-2rem] text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-[#FFD700] font-bold"
          style={{ fontFamily: "'Noto Sans JP', sans-serif" }}
        >
          バ
        </div>

        {/* Design Credit */}
        <div className="absolute bottom-0.5 sm:bottom-1 md:bottom-2 right-0.5 sm:right-1 md:right-2 text-[4px] sm:text-[6px] md:text-[8px] lg:text-[10px] text-gray-400">
          Covered by @_Bocchi
        </div>
      </div>
    </div>
  )
}

