import MainLaptop from "../Layout/MainLaptop";
import { faCartArrowDown, faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Laptop from "../static/image/lap2.PNG";
import Icon1 from "../static/image/icon-lap1.png";
import Icon2 from "../static/image/icon2-lap2.png";
import Icon3 from "../static/image/icon3-lap1.png";
import { Link } from 'react-router-dom';
import Logo1 from "../static/image/lap1.png";
import Logo2 from "../static/image/lap2.PNG";
import Logo3 from "../static/image/lap3.jpg";
import Logo4 from "../static/image/lap4.jpg";
import Tieude from "../static/image/slide-camera.png";

function Laptopldp() {

  return(
    <MainLaptop>
      <div>
      <section className="product-gallery-one">
      <div className="container">
        <div className="product-gallery-one-content">
          <div className="product-gallery-one-content-title">
            <h2>LapTop Bán Chạy Nhất</h2>
            <ul>
              <li><a>Camera Imou</a></li>
              <li><a>Camera Ezviz</a></li>
              <li><a>Camera FPT</a></li>
              
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
          

        > Xem Thêm</button>
      </div></section>

      </div>
    </MainLaptop>
  )
}
export default Laptopldp;