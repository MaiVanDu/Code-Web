import React from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import Slider from '../components/Slider';
import SaleLaptop from '../components/SaleLaptop';
import ShoppingTrends from '../components/ShoppingTrends';
import Image from '../components/Image';
function MainLaptop (props) {
  return (
    <>
      <Header />
      <MenuBar />
      <Image />
      < Slider />
      {props.children}
      <SaleLaptop />
      <ShoppingTrends />
      <Footer/>
    </>
  );
}

export default MainLaptop;