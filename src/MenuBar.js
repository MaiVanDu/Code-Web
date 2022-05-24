import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
function MenuBar(){
    return(
       <div>
          <div id="header">
          <nav>
            <div className="container">
              <ul>
                <li><a href><img style={{width: '100px'}} src="./static/image/logo1.PNG" /></a></li>
                <li><input placeholder="Nhập mã hàng cần tìm kiếm" type="text" /></li>
                <button type="submit" aria-label="Tìm kiếm" className="search-button" title="Tìm kiếm">
                  <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
                </button>
                <li><a href /><button><i className="fa-solid fa-cart-shopping" /> Giỏ hàng</button></li>
                <li><a href>Lịch sử đơn hàng</a></li>
                <li><a href>Đăng Ký</a></li>
                <li><a href>Đăng Nhập</a></li>
              </ul>
            </div>
          </nav>  
        </div>
        <section className="menu-bar">
        <div className="container">
          <div className="menu-bar-content">
            <ul>
              <li><a href><i className="fa-solid fa-desktop" />Máy Tính</a></li>
              <li><a href><i className="fa-solid fa-record-vinyl" />Camera </a></li>
              <li><a href><i className="fa-solid fa-wifi" />Thiết Bị Mạng </a></li>
              <li><a href><i className="fa-regular fa-diagram-project" />&gt;Phụ Kiện <i className="fa-solid fa-caret-down" /> </a>
                <div className="submenu">
                  <ul>
                    <li><a href>Dây Cáp</a> </li>
                    <li><a href>Dây HDMi </a></li>
                    <li><a href>Dây VGA</a></li>
                    <li><a href>VGA to HDMI</a></li>
                    <li><a href>VGA to AV</a></li>
                    <li><a href>Display to HDMI</a></li>
                    <li><a href>HDMI to VGA</a></li>
                    <li><a href>HDMI to Lan</a></li>
                  </ul>
                  <ul>
                    <li><a href>Dây Cáp</a> </li>
                    <li><a href>Dây HDMi </a></li>
                    <li><a href>Dây VGA</a></li>
                    <li><a href>VGA to HDMI</a></li>
                    <li><a href>VGA to AV</a></li>
                    <li><a href>Display to HDMI</a></li>
                    <li><a href>HDMI to VGA</a></li>
                    <li><a href>HDMI to Lan</a></li>
                  </ul>
                </div>
              </li>
              <li><a href><i className="fa-solid fa-headphones" />Loa, Tai nghe </a></li>
              <li><a href><i className="fa-solid fa-sd-card" />Thiết Bị Lưu Trữ </a>
                <div className="submenu-data">
                  <ul>
                    <li><a href>Thẻ Nhớ 32GB</a> </li>
                    <li><a href>Thẻ Nhớ 64GB </a></li>
                    <li><a href>Thẻ Nhớ 128GB</a></li>
                    <li><a href>Thẻ Nhớ 256GB</a></li>
                    <li><a href>VGA to AV</a></li>
                    <li><a href>Display to HDMI</a></li>
                    <li><a href>HDMI to VGA</a></li>
                    <li><a href>HDMI to Lan</a></li>
                  </ul>
                </div>
              </li>
              <li><a href><i className="fa-light fa-atom" />Khuyến Mại </a></li>  
            </ul>
          </div>
        </div>
      </section>
      <div id="slider">
        <div className="container">
          <div className="slider-content">
            <div className="slider-content-left">
              <div className="slider-content-left-top-container">
                <div className="slider-content-left-top">
                  <a href><img src="./static/image/slie1.png" /></a>
                  <a href><img src="./static/image/slie2.png" /></a>
                  <a href><img src="./static/image/slie3.png" /></a>
                  <a href><img src="./static/image/slie1.png" /></a>
                </div>
                <div className="slider-content-left-top-btn">
                  <i id="fs-left" className="fas fa-chevron-left" />
                  <i id="fs-right" className="fas fa-chevron-right" />
                </div>
              </div>                  
              <div className="slider-content-left-bottom">
                <li className="active">Tiêu đề 1</li>
                <li>Tiêu đề 2</li>
                <li>Tiêu đề 3</li>
                <li>Tiêu đề 4</li>
              </div>
            </div>
            <div className="slider-content-right">
              <li><a href><img style={{width: '320px'}} src="./static/image/phukien1.png" /></a></li>
              <li><a href><img style={{width: '320px'}} src="./static/image/phukien2.png" /></a></li>
              <li><a href><img style={{width: '320px'}} src="./static/image/phukien3.jpg" /></a></li>
              <li><a href><img style={{width: '320px'}} src="./static/image/phukien4.jpg" /></a></li>                  
            </div>
          </div>
        </div>
      </div>
      <section className="banner-one">
        <div className="container">
          <img style={{width: '100%'}} src="./static/image/slie5.png" />
        </div>
      </section>
       </div>
       
        
    )
}
export default MenuBar;