import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./components/Home"
import StudentProfile from "./components/ChartStudent"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<Home />} />
        <Route path="studentprofile/:id" element={<StudentProfile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
