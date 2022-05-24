import React, { useEffect, useState } from 'react';
import MainContent from '../Layout/MainContent';
import Icon from "../static/image/icon-sale.png";
import Logo from "../static/image/Laptop7.jpg";
import Logo1 from "../static/image/Logo-Laptop3.jpg";
import Logo2 from "../static/image/Logo-Laptop4.jpg";
import Logo3 from "../static/image/Logo-Laptop5.jpg";
import Logo4 from "../static/image/Logo-Laptop6.jpg";
import {apiProducts} from "../api/apiProducts";
function Home() {
  const [products, setProducts] = useState([]);
  const fetchDataProducts = async () => {
    const { data: products } = await apiProducts.getProducts();
    if (products) {
      setProducts(products);
    }
  }
  useEffect(() => {
    fetchDataProducts();
  }, []);
  
  return (
    <MainContent><section className="slider-product-one">
      <div className="container">
        <div className="slider-product-one-content">
          <div className="slider-product-one-content-title">
            <h2> Săn Sale mỗi ngày</h2>
          </div>
          <div className="slider-product-one-content-items">
            <div className="slider-product-one-content-item">
              <img src={Logo} alt="Logo" />
              <div className="slider-product-one-content-item-text">
                <li><img src={Icon} alt="Logo1" /><p>Trợ giá khuyến mãi</p></li>
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
              <img src={Logo2} alt="Logo2" />
              <div className="slider-product-one-content-item-text">
                <li><img src={Icon} alt="Logo3" /><p>Trợ giá khuyến mãi</p></li>
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
              <img src={Logo1} alt="Logo1" />
              <div className="slider-product-one-content-item-text">
                <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
              <img src={Logo3} alt="Logo3" />
              <div className="slider-product-one-content-item-text">
                <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
              <img src={Logo4} alt="Logo4" />
              <div className="slider-product-one-content-item-text">
                <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/webcam1.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/camera2.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/kíchong.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/webcam1.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/camera7.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/camera1.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/camera6.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/camera2.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/thietBiMang.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/tainghe.jpeg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/webcam1.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/camera4.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src="img/webcam1.jpg" alt="" />
                <div className="slider-product-one-content-item-text">
                  <li><img src={Icon} alt="" /><p>Trợ giá khuyến mãi</p></li>
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
                <img src={Icon} alt="" />
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
                <img src={Icon} alt="" />
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
        </div></section>
      {/*    ---       Product gallery two*/}
      <section className="product-gallery-two">
        <div className="container">
          <div className="product-gallery-two-content">
            <div className="product-gallery-two-content-right">
              <img src="img/slieKhuyenmai.PNG" alt="" />
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
                  <img src="img/Logo-Laptop2.jpg" alt="" />
                  <div className="product-gallery-two-content-left-bottom-item-text">
                    <li>Tên Lap</li>
                    <li>Hàng Khuyến Mãi</li>
                    <li>Giá</li>
                    <li>Ưu đãi khủng</li>
                  </div>
                </div>
                <div className="product-gallery-two-content-left-bottom-item">
                  <img src="img/Logo-Laptop2.jpg" alt="" />
                  <div className="product-gallery-two-content-left-bottom-item-text">
                    <li>Tên Lap</li>
                    <li>Hàng Khuyến Mãi</li>
                    <li>Giá</li>
                    <li>Ưu đãi khủng</li>
                  </div>
                </div>
                <div className="product-gallery-two-content-left-bottom-item">
                  <img src="img/Logo-Laptop3.jpg" alt="" />
                  <div className="product-gallery-two-content-left-bottom-item-text">
                    <li>Tên Lap</li>
                    <li>Hàng Khuyến Mãi</li>
                    <li>Giá</li>
                    <li>Ưu đãi khủng</li>
                  </div>
                </div>
                <div className="product-gallery-two-content-left-bottom-item">
                  <img src="img/Logo-Laptop7.jpg" alt="" />
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