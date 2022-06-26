import React from 'react';
import { Link } from 'react-router-dom';
import Logo1 from "../static/image/lap1.png";
import Logo2 from "../static/image/lap2.PNG";
import Logo3 from "../static/image/lap3.jpg";
import Logo4 from "../static/image/lap4.jpg";
import SsaleLap1 from "../static/image/salelaptop1.png";
import SaleLap2 from "../static/image/salelatop2.png";
import SaleLap3 from "../static/image/salelatop3.png";



function SaleLaptop () {
    return (
    <>
    <div className="slider-product-one">
      <div className="container">
        <div className="slider-product-one-content">
          <div className="slider-product-one-content-title">
            <h2> TUẦN LỄ LAPTOP</h2>
          </div>
          <div className="home-slider another-slider" id="owl-home">
                <div className="slider-banner owl-carousel owl-loaded owl-drag">
                <div className="owl-stage-outer">
                    <div className="owl-stage" style={{transform: 'translate3d(0px, 0px, 0px)', transition: 'all 0s ease 0s', width: '1180px'}}>
                        <div className="owl-item active" style={{width: '393.333px'}}>
                            <div className="item">
                            <a aria-label="slide" data-cate={0} data-place={2000} href="" onclick=""><img width={350} height={100} loading="lazy" className="owl-lazy lazyloaded" alt="Tuần lễ thương hiệu - Desk TGDĐ Banner 3" src={SsaleLap1} /></a>
                            </div>
                        </div>
                        <div className="owl-item active" style={{width: '393.333px'}}>
                            <div className="item">
                            <a aria-label="slide" data-cate={0} data-place={2000} href="://www.thegioididong.com/lenovo#thinkbook" onclick=""><img width={380} height={200} loading="lazy" className="owl-lazy lazyloaded"  alt="Tuần lễ thương hiệu - Desk TGDĐ Banner 3" src={SaleLap2} /></a>
                            </div>
                        </div>
                        <div className="owl-item active" style={{width: '393.333px'}}>
                            <div className="item">
                            <a aria-label="slide" data-cate={0} data-place={2000} href="" onclick=""><img width={380} height={200} loading="lazy" className="owl-lazy lazyloaded" alt="Tuần lễ thương hiệu - Desk TGDĐ Banner 3" src={SaleLap3} /></a>
                            </div>
                        </div>
                    </div>
                </div>
                </div>      
            </div>
          <div className="slider-product-one-content-container">
            <div className="slider-product-one-content-items-content">
                
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item"  >
                  <Link  to="/subPage1"><a><img className='slider-image' src={Logo1} ></img></a> </Link>
                  <div className="slider-product-one-content-item-text">
                    <li><img src={Logo4}  alt=""  /><p>Trợ giá khuyến mãi</p></li>
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
    </div></>
    );
}
export default SaleLaptop;