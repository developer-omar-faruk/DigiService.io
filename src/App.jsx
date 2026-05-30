import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./conponents/Navbar"
import Footer from "./conponents/Footer"


function App() {

  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>} />
    </Routes>
    <Footer/>
    
    </>
  )
}

export default App
