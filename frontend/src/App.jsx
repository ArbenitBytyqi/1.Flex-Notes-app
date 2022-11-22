import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from './pages/Home';
import Important from './pages/Important';
import Personal from './pages/Personal';
import Work from './pages/Work';
import Fun from './pages/Fun';

function App() {
  

  return (
    <div className="App">
      <Router>
      <Routes>
        <Route index element={<Navigate to="/home" />} />
        <Route path='/home' element={<Home/>} />
        <Route path='/fun' element={<Fun/>} />
        <Route path='/work' element={<Work/>} />
        <Route path='/personal' element={<Personal/>} />
        <Route path='/important' element={<Important/>} />
      </Routes>
      </Router>
    </div>
  )
}

export default App
