import React from 'react'
import { Navbar } from "./components/Navbar"
import { About } from './components/About'
import { Skills } from './components/Skills'
import { Hero } from './components/Hero'
import { Technologies } from './components/Technologies'
import { Projects } from "./components/Projects"
import { Contact } from './components/Contact'
import { Academic } from './components/Academic'

const App = () => {
  return (
    <div className='overflow-x-hidden text-neutral-300 antialiased slec selection:bg-cyan-300 selection:text-cyan-900 '>
      <div className="absolute top-0 z-[-2] h-screen w-full bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <Navbar />
      <Hero />
      <div className='bg-neutral-950'>
      <About />
      <Academic />
      <Technologies />
      <Projects />
      <Skills />
      <Contact />
      </div>
    </div>
  )
}

export default App