import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoneyBill } from "@fortawesome/react-fontawesome";
import {   faFaceAngry} from "@fortawesome/free-solid-svg-icons";


function Footer() {
  return (
    <section className="footer-one">
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="footer-col">
            <h4>Giới thiệu công ty(PKTT.com)</h4>
            <ul>
              <li><a href="#">Tuyển dụng</a></li>
              <li><a href="#">Gửi ý kiến, khiếu nại</a></li>
              <li><a href="#">Chính sách</a></li>
              <li><a href="#">Chi nhánh</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Trợ Giúp</h4>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Chuyển hàng</a></li>
              <li><a href="#">Trả lại</a></li>
              <li><a href="#">Tình trạng đặt hàng</a></li>
              <li><a href="#">Các lựa chọn thanh toán</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Tổng Đài Hỗ Trợ (Miễn phí gọi)</h4>
            <ul>
              <li><a href="#">Gọi mua: 1800.1061 (7:30 - 22:00)</a></li>
              <li><a href="#">Kỹ thuật: 1800.1764 (7:30 - 22:00)</a></li>
              <li><a href="#">Khiếu nại: 1800.1063 (8:00 - 21:30)</a></li>
              <li><a href="#">Bảo hành: 1800.1065 (8:00 - 21:00)</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h4>Theo Dõi Chúng Tôi Trên</h4>
            <div className="social-links">
              <a href="#"><FontAwesomeIcon icon={ faFaceAngry} /></a>
              <a href="#"><FontAwesomeIcon icon="fa-facebook-f" /></a>
              <a href="#"><i className="fab fa-instagram" /></a>
              <a href="#"><i className="fab fa-linkedin-in" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
  );
}

export default Footer