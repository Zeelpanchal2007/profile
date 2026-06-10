import { useState } from 'react'
import LenisScroll from './components/LenisScroll'
import Loader from './components/Loader'
import KunaiCursor from './components/KunaiCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Timeline from './components/Timeline'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [loading, setLoading] = useState(true)

  return (
    <LenisScroll>
      <KunaiCursor />
      {loading && <Loader onComplete={() => setLoading(false)} />}
      
      {!loading && (
        <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30 selection:text-primary">
          <Navbar />
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Timeline />
          <Achievements />
          <Contact />
          <Footer />
        </main>
      )}
    </LenisScroll>
  )
}

export default App
