import React from "react"

const meta = {
  description: "Not found",
  title: "404",
}

const user = {
  name: "夢見とびら",
  role: "VTuber, イラストレーター, Live2D",
  description:
    "2020年12月からYouTubeを拠点にvtuber活動を開始。現在登録者数10万3,000人※2023/8月時点 主にvtuberのモデル制作を中心に活動中。",
  projects: [
    { name: "スケブイラスト", image: "/public/coming-soon.png" },
    { name: "雪月紫乃様新衣装イラスト", image: "/public/coming-soon.png" },
    { name: "パッ子ちゃんお正月イラスト", image: "" },
  ],
}

const tabs = ["Tab 1", "Tab 2", "Tab 3"]

export default function UserProfile() {
  return (
    <div className="min-h-screen w-full">
      {/* Header */}
      <div
        className="h-1/3 header-image relative h-1/2 bg-cover bg-center px-16"
        style={{ backgroundImage: "url('/image.jpg')" }}
      ></div>

      {/* profile */}
      <div className="container mx-auto px-8 md:px-60">
        <div className="relative -mt-24 items-center">
          <img
            src="/src/assets/profile.jpg"
            alt="Profile Avatar"
            className="h-32 w-32 rounded-full border-2 border-white shadow-lg"
          />
          <div className="mt-4">
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-muted-foreground">{user.role}</p>
          </div>
        </div>

        <p className="mt-6 text-muted-foreground">{user.description}</p>
      </div>

      {/* Tabs */}
      <div className="mt-4 border-b">
        <nav className="mx-auto flex max-w-2xl gap-6 overflow-x-auto">
          {tabs.map((tab, index) => (
            <button
              key={index}
              className="group relative px-1 py-4 text-muted-foreground transition-colors hover:text-gray-900"
            >
              {tab}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
            </button>
          ))}
        </nav>
      </div>

      {/* Projects */}
      <div className="container mx-auto mt-12 px-8 md:px-60">
        <h2 className="mb-4 text-2xl font-bold">Projects</h2>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {user.projects.map((project, index) => (
            <div key={index} className="overflow-hidden">
              <img src={`/${project.image}`} alt={project.name} className="h-48 w-full object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{project.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

