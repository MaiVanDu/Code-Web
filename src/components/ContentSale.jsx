import React from 'react';
import { Link } from 'react-router-dom';
import Logo1 from "../static/image/Logo-Laptop3.jpg";
import Logo2 from "../static/image/Logo-Laptop4.jpg";
import Logo3 from "../static/image/Logo-Laptop5.jpg";
import Logo4 from "../static/image/Logo-Laptop6.jpg";


function ContentSale () {
    return (
    <div className="slider-product-one">
      <div className="container">
        <div className="slider-product-one-content">
          <div className="slider-product-one-content-title">
            <h2> Khuyến Mại</h2>
          </div>
          <div className="slider-product-one-content-container">
            <div className="slider-product-one-content-items-content">
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item"  >
                  <Link  to="/subPage1"><a><img className='slider-image' src={Logo1} ></img></a> </Link>
                  <div className="slider-product-one-content-item-text">
                    <li><img src={Logo1}  alt=""  /><p>Trợ giá khuyến mãi</p></li>
                    <li>Laptop Dell Gaming </li>
                    <li>Online giá rẻ</li>
                    <li><a >25.990.000<sup>đ</sup></a></li>
                    <li>18.500.000<sup>đ</sup></li>
                    <li>Quà tặng 400.000<sup>đ</sup></li>
                    <li>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </li>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                <Link  to="/subPage1"><a><img className='slider-image' src={Logo2} ></img></a> </Link>
                  <div className="slider-product-one-content-item-text">
                    <li><img src="img/icon1.png" alt="" /><p>Trợ giá khuyến mãi</p></li>
                    <li>Laptop Dell Gaming </li>
                    <li>Online giá rẻ</li>
                    <li><a href>25.990.000<sup>đ</sup></a></li>
                    <li>18.500.000<sup>đ</sup></li>
                    <li>Quà tặng 400.000<sup>đ</sup></li>
                    <li>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </li>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                <Link  to="/subPage1"><a><img className='slider-image' src={Logo3} ></img></a> </Link>
                  <div className="slider-product-one-content-item-text">
                    <li><img src="img/icon1.png" alt="" /><p>Trợ giá khuyến mãi</p></li>
                    <li>Laptop Dell Gaming </li>
                    <li>Online giá rẻ</li>
                    <li><a href>25.990.000<sup>đ</sup></a></li>
                    <li>18.500.000<sup>đ</sup></li>
                    <li>Quà tặng 400.000<sup>đ</sup></li>
                    <li>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </li>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                <Link  to="/subPage1"><a><img className='slider-image' src={Logo4} ></img></a> </Link>
                  <div className="slider-product-one-content-item-text">
                    <li><img src="img/icon1.png" alt="" /><p>Trợ giá khuyến mãi</p></li>
                    <li>Laptop Dell Gaming </li>
                    <li>Online giá rẻ</li>
                    <li><a href>25.990.000<sup>đ</sup></a></li>
                    <li>18.500.000<sup>đ</sup></li>
                    <li>Quà tặng 400.000<sup>đ</sup></li>
                    <li>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </li>
                  </div>
                </div>
                <div className="slider-product-one-content-item">
                <Link  to="/subPage1"><a><img className='slider-image' src={Logo2} ></img></a> </Link>
                  <div className="slider-product-one-content-item-text">
                    <li><img src="img/icon1.png" alt="" /><p>Trợ giá khuyến mãi</p></li>
                    <li>Laptop Dell Gaming </li>
                    <li>Online giá rẻ</li>
                    <li><a href>25.990.000<sup>đ</sup></a></li>
                    <li>18.500.000<sup>đ</sup></li>
                    <li>Quà tặng 400.000<sup>đ</sup></li>
                    <li>
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                      <i className="fa-solid fa-star" />
                    </li>
                  </div>
                </div>
                
              </div>
            </div>
         </div>
         <div><a className="readmore-btn"><span>Xem Thêm</span></a></div>
        </div>
    </div>
    </div>
    );
}
export default  ContentSale;