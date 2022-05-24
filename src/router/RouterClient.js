import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Home from '../pages/Home';
function RouterClient() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default RouterClient