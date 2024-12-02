import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import About from "./components/About";
import logo from "./assets/logo.jpeg"
import Login from "./components/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="nav-container">
          <div >
            <img src ={logo} alt = "logo" width={60} height={50}/>
          </div>
          <div className="nav-items">

      
          <Link to="/home"> Home</Link>
          <Link to="/about"> About</Link>
          <Link to="/gallery"> Gallery</Link>
          <Link to="/contact"> Contact</Link>
          <Link to="/login"> Login</Link>
          </div>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="gallery" element={<Gallery />} />
          <Route path="login" element={<Login/>} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
