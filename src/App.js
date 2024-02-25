import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './style.css'
import Home from './Home'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <Home /> }></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App