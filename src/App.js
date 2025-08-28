import React, { useEffect } from 'react';
import './index.css';
import Home from "./routes/Home";
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import { Route, Routes } from 'react-router-dom';
import Aos from "aos";
import "aos/dist/aos.css";
import Navbar from './components/Navbar';

function App() {
  useEffect(()=>{
    Aos.init();
  }, [])
  return (
    <>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/navbar' element={<Navbar/>} />
        <Route path='/project' element={<Project/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
    </>
  );
}

export default App;
