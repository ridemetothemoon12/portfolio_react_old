import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './Components/Nav';
import Grandhyatt from './Components/Grandhyatt';
import Naturedream from './Components/Naturedream';
import Hiltionhotel from './Components/Hiltionhotel';
import Culture from './Components/Culture';
import FullpageContent from './Components/FullpageContent';



function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path='/portfolio_react' element = {<FullpageContent />} />
        <Route path='/Grandhyatt' element={<Grandhyatt /> } />
        <Route path='/Naturedream' element={<Naturedream /> } />
        <Route path='/Hiltionhotel' element={<Hiltionhotel /> } />
        <Route path='/Culture' element={<Culture /> } />
      </Routes>
    </>
    )
  }

export default App;
