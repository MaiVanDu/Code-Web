import React from 'react'
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Slider from '../components/Slider';
import Footer from '../components/Footer';
import ShoppingTrends from '../components/ShoppingTrends';
function MainContent(props) {
  return (
    <>
      <Header />
      <MenuBar />
      <Slider />
      {props.children}
      <ShoppingTrends />
      <Footer/>
    </>
  );
}

export default MainContent