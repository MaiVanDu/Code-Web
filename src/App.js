import React from "react";
import { useState } from "react";
import Content from "./Content";
import Home from "./Home";
import MenuBar from "./MenuBar";
import './style.css'




 function App() {
    return (
      <div >
        <MenuBar /> 
        {/* Slider- product */}
        <Home />
        
        <div id="content">
        </div>
        <div id="footer">
        </div>
      </div>
    );
  }


export default App;