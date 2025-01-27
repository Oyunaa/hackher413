import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from "./components/Navbar";

import Home from "./pages/Home.js";
import Map from "./pages/Map.js";
import Moma from "./pages/Moma.js";
import RealHome from "./pages/RealHome";
import Profile from "./pages/Profile";
import MyCustom from "./pages/myCustom";

function App() {
  return (
    <div>
    <Navbar />
    <BrowserRouter>
      <Routes>
      
        <Route path='/search' element={<Home />} />
        <Route path='/map' element={<Map />} />
        <Route path='/moma' element={<Moma />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/' element={<RealHome />} />
        <Route path='/mycustom' element={<MyCustom />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
