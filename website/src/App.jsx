import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import RandomCorner from './components/RandomCorner'
import Thursday from './components/Thursday'
import About from './components/About'
import './App.css'

export default function App() {
  const [page, setPage] = useState('home')

  return (
    <div className="app">
      <Nav page={page} setPage={setPage} />
      <div className="page-wrap">
        {page === 'home'     && <Hero setPage={setPage} />}
        {page === 'corner'   && <RandomCorner />}
        {page === 'thursday' && <Thursday />}
        {page === 'about'    && <About />}
      </div>
    </div>
  )
}
