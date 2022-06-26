import React, { useEffect, useState , Component} from 'react';
import { Link } from 'react-router-dom';
import {   faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MainContent from '../Layout/MainContent';
import khuyenmai from "../static/image/khuyenmaisoc2.PNG";
import Logo1 from "../static/image/Logo-Laptop3.jpg";
import Logo2 from "../static/image/Logo-Laptop4.jpg";
import Logo3 from "../static/image/Logo-Laptop5.jpg";
import Logo4 from "../static/image/Logo-Laptop6.jpg";
import Logo5 from "../static/image/slie-khuyenmai.PNG";
import {apiProducts} from "../api/apiProducts";


function Home() {
  const [noOfElement, setnoOfElement] = useState(5);
  const loadMore = () =>{
    setnoOfElement(noOfElement + noOfElement);
  }

  // const slice = data.carddata.slice(0, noOfElement);
  const [products, setProducts] = useState([]);
  const fetchDataProducts = async () => {
    const { data: products } = await apiProducts.getProducts();
    if (products) {
      setProducts(products);
      
    }

  }
  console.log(products);
  console.log(apiProducts);
  useEffect(() => {
    fetchDataProducts();
  }, []);
  
  return (
    <MainContent> {/* Slider- product */}
    <section className="slider-product-one">
      <div className="container">
        <div className="slider-product-one-content">
          <div className="slider-product-one-content-title">
            <h2> Săn Sale mỗi ngày</h2>
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
              {/* <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <img src="img/Logo-Laptop6.jpg" alt="" />
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
                  <img src="img/Logo-Laptop7.jpg" alt="" />
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
                  <img src="img/Logo-Laptop3.jpg" alt="" />
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
                  <img src="img/Logo-Laptop4.jpg" alt="" />
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
                  <img src="img/Logo-Laptop5.jpg" alt="" />
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
              <div className="slider-product-one-content-items">
                <div className="slider-product-one-content-item">
                  <img src="img/Logo-Laptop6.jpg" alt="" />
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
                  <img src="img/Logo-Laptop7.jpg" alt="" />
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
                  <img src="img/Logo-Laptop3.jpg" alt="" />
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
                  <img src="img/Logo-Laptop4.jpg" alt="" />
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
                  <img src="img/Logo-Laptop5.jpg" alt="" />
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
              </div> */}
            </div>
            <div className="slider-product-one-content-btn">
              <FontAwesomeIcon className='i' icon={faAngleLeft} />
              <FontAwesomeIcon className='i' icon={faAngleRight} />
            </div>             
          </div>
        </div>
      </div>
      <section className="banner-one">
        <div className="container">
          <img style={{width: '100%' ,borderRadius:'3px', marginTop:'6px'}} src={Logo5} />
        </div>
      </section>
    </section>
    {/* ------------ product gallery--------------*/}
    <section className="product-gallery-one">
      <div className="container">
        <div className="product-gallery-one-content">
          <div className="product-gallery-one-content-title">
            <h2>Sản Phẩm Nổi Bật Nhất</h2>
            <ul>
              <li><a>Camera Imou</a></li>
              <li><a>WiFi TOTOLINK</a></li>
              <li><a>Switch</a></li>
              <li><a>Tai Nghe</a></li>
            </ul>
          </div>
          <div className="product-gallery-one-content-product">
            <div className="product-gallery-one-content-product-item">
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
            
            <div className="product-gallery-one-content-product-item">
              <img src={Logo2} alt="" />
              <div className="slider-product-one-content-item-text">
                <li><img src={Logo2} alt="" /><p>Trợ giá khuyến mãi</p></li>
                <li>Laptop Dell</li>
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

      
            <div className="product-gallery-one-content-product-item">
              <img src={Logo1} alt="" />
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
            
            <div className="product-gallery-one-content-product-item">
              <img src={Logo1} alt="" />
              <div className="slider-product-one-content-item-text">
                <li><img src={Logo1} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo3} alt="" />
              <div className="slider-product-one-content-item-text">
                <li><img src={Logo3} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo4} alt="" />
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo3} alt="" />
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo1} alt="" />
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo3} alt="" />
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo4} alt="" />
              <div className="slider-product-one-content-item-text">
                <li><img src="img/logo1.PNG" alt="" /><p>Trợ giá khuyến mãi</p></li>
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo2} alt="" />
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo2} alt="" />
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo4} alt="" />
              <div className="slider-product-one-content-item-text">
                <li><img src="img/camera4.jpg" alt="" /><p>Trợ giá khuyến mãi</p></li>
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo3} alt="" />
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
            <div className="product-gallery-one-content-product-item">
              <img src={Logo2} alt="" />
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
        <button 
          className="readmore-btn"
          onClick={() => loadMore()}

        > Xem Thêm</button>
      </div></section>
    {/*    ---       Product gallery two*/}
    <section className="product-gallery-two">
      <div className="container">
        <div className="product-gallery-two-content">
          <div className="product-gallery-two-content-right">
            <img style={{height: '550px', borderRadius: '5px'}} src={khuyenmai} alt="" />
          </div>
          <div className="product-gallery-two-content-left">
            <div className="product-gallery-two-content-left-top">
              <li className="active">Lap Top Gamming</li>
              <li>Laptop Học Tập, Văn Phòng</li>
              <li>LapTop mỏng nhẹ</li>
              <li>Laptop cao cấp, sang trọng</li>
              <li><a>Xem Thêm</a><i className="fa-solid fa-angle-right" /></li>
            </div>
            <div className="product-gallery-two-content-left-bottom">
              <div className="product-gallery-two-content-left-bottom-item">
                <img src={Logo1} alt="" />
                <div className="product-gallery-two-content-left-bottom-item-text">
                  <li>Tên Lap</li>
                  <li>Hàng Khuyến Mãi</li>
                  <li>Giá</li>
                  <li>Ưu đãi khủng</li>
                </div>
              </div>
              <div className="product-gallery-two-content-left-bottom-item">
                <img src={Logo2} alt="" />
                <div className="product-gallery-two-content-left-bottom-item-text">
                  <li>Tên Lap</li>
                  <li>Hàng Khuyến Mãi</li>
                  <li>Giá</li>
                  <li>Ưu đãi khủng</li>
                </div>
              </div>
              <div className="product-gallery-two-content-left-bottom-item">
                <img src={Logo3} alt="" />
                <div className="product-gallery-two-content-left-bottom-item-text">
                  <li>Tên Lap</li>
                  <li>Hàng Khuyến Mãi</li>
                  <li>Giá</li>
                  <li>Ưu đãi khủng</li>
                </div>
              </div>
              <div className="product-gallery-two-content-left-bottom-item">
                <img src={Logo4} alt="" />
                <div className="product-gallery-two-content-left-bottom-item-text">
                  <li>Tên Lap</li>
                  <li>Hàng Khuyến Mãi</li>
                  <li>Giá</li>
                  <li>Ưu đãi khủng</li>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    </MainContent>
  )
}

export default Home