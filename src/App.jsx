import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./conponents/Navbar"
import Hero from "./conponents/Hero"


function App() {

  return (
    <>
    <Navbar/>
    <Hero/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    
    </>
  )
}

export default App
