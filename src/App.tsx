import './App.css'
import './index.css'
import { useEffect, useState } from 'react'
import { Navbar } from './components/Navbar'
import { MobileMenu } from './components/MobileMenu'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import Cursor from './components/Cursor'
import { Footer } from './components/Footer'

function App() {
  useEffect(() => {
    const cursorDot = document.querySelector("[data-cursor-dot]") as HTMLElement
    const cursorOutline = document.querySelector("[data-cursor-outline]") as HTMLElement
    const cursorGlow = document.querySelector("[data-cursor-glow]") as HTMLElement

    if (cursorDot && cursorOutline && cursorGlow) {
      const handleMouseMove = (e: MouseEvent) => {
        const posX = e.clientX
        const posY = e.clientY

        cursorDot.style.top = `${posY}px`
        cursorDot.style.left = `${posX}px`

        cursorGlow.style.setProperty("--x", `${posX}px`)
        cursorGlow.style.setProperty("--y", `${posY}px`)

        cursorOutline.animate({
          top: `${posY}px`,
          left: `${posX}px`
        }, { duration: 500, fill: "forwards" })
      }

      window.addEventListener("mousemove", handleMouseMove)
      return () => window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className={`min-h-screen transition-opacity duration-700 opacity-100 bg-slate-900 text-gray-100`}>
      <Cursor />
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
