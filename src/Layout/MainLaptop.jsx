import React from 'react';
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';


function MainLaptop (props) {
  return (
    <>
      <Header />
      <MenuBar />
      {props.children}
      <Footer/>
    </>
  );
}

export default MainLaptop;