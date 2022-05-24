import React from "react";
import Logo7 from "../static/image/slie5.png";

function MenuBar(){
    return(
       <div>
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
      <section className="banner-one">
        <div className="container">
          <img style={{width: '100%'}} src={Logo7} />
        </div>
      </section>
       </div>  
    )
}
export default MenuBar;