import React from 'react'
import { Routes, Route, Link } from "react-router-dom";
import Registration from '../pages/auth/Registration';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import SubPage1 from '../pages/SubPage1';
import ContentSale from '../components/ContentSale';

function RouterClient() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/subPage1" element={<SubPage1 />} />
      <Route path="/contentsale" element={< ContentSale />} />

      

    </Routes>
  )
}

export default RouterClient
