import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route, Routes } from 'react-router'
import Privacy from './pages/Privacy'
import TermAndCondition from './pages/TermAndCondition'
import NavBar from './components/NavBar'
import FooterSection from './components/home/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     {/* <Home /> */}


      <NavBar />
      <Routes>
        <Route exact={true} path='/' element={<Home />} />
        <Route exact={true} path='privacy' element={<Privacy />} />
        <Route exact={true} path='termandcondition' element={<TermAndCondition />} />
      </Routes>
      <FooterSection />
    </>
  )
}

export default App
