import React from "react";
import {  faWifi, faLaptop, faCameraRetro, faHeadphones, faMemory, faAnglesLeft, faDiagramSuccessor } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

function MenuBar(){
    return(
       <div>
        <section className="menu-bar">
        <div className="container">
          <div className="menu-bar-content">
            <ul>
              <li><Link  to="/Laptopldp"><a ><FontAwesomeIcon className="fasolid" icon={ faLaptop } />Máy Tính</a></Link> </li>
              <li><NavLink exact activeStyle={{color:'red'}} to="/Laptopldp" className="gh"><a href><FontAwesomeIcon className="fasolid" icon={ faCameraRetro } />Camera </a></NavLink>  </li>
              <li><a href><FontAwesomeIcon className="fasolid" icon={ faWifi } />Thiết Bị Mạng </a></li>
              <li><a href><FontAwesomeIcon className="fasolid" icon={ faDiagramSuccessor} />&gt;Phụ Kiện <i className="fa-solid fa-caret-down" /> </a>
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
              <li><a href><FontAwesomeIcon className="fasolid" icon={ faHeadphones } />Loa, Tai nghe </a></li>
              <li><a href><FontAwesomeIcon className="fasolid" icon={ faMemory } />Thiết Bị Lưu Trữ </a>
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
              <li><a href><FontAwesomeIcon className="fasolid" icon={ faAnglesLeft } />Khuyến Mại </a></li>  
            </ul>
          </div>
        </div>
      </section>
      
       </div>  
    )
}
export default MenuBar;