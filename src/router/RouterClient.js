import React from 'react'
import { Routes, Route } from "react-router-dom";
import Registration from '../pages/auth/Registration';
import Home from '../pages/Home';
import Login from '../pages/auth/Login';
import SubPage1 from '../pages/SubPage1';
import ContentSale from '../components/ContentSale';
import Laptopldp from '../pages/Laptopldp';
import MainCamera from '../Layout/MainCamera';
import SaleLaptop from '../components/SaleLaptop';
import ShoppingTrends from '../components/ShoppingTrends';
import Image from '../components/Image';
import Camera from '../pages/Camera';

function RouterClient() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Registration" element={<Registration />} />
      <Route path="/subPage1" element={<SubPage1 />} />
      <Route path="/laptopldp" element={<Laptopldp />} />
      <Route path="/mainCamera" element={<MainCamera />} />
      <Route path="/contentsale" element={< ContentSale />} />
      <Route path="/saleLaptop" element={< SaleLaptop />} />
      <Route path="/shoppingTrends" element={< ShoppingTrends />} />
      <Route path="/image" element={< Image />} />
      <Route path="/camera" element={< Camera />} />


      

    </Routes>
  )
}

export default RouterClient
