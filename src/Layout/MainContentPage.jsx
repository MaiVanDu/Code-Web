import React from 'react'
import Header from '../components/Header';
import MenuBar from '../components/MenuBar';
import Footer from '../components/Footer';
import ContentSale from '../components/ContentSale';

function MainContentPage(props) {
  return (
    <>
      <Header />
      <MenuBar />
      {props.children}
      <ContentSale />
      <Footer/>
    </>
  );
}

export default MainContentPage;