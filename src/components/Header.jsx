import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../static/image/slie1.png";
function Header() {
  return (
    <div id="header">
      <nav>
        <div className="container">
          <ul>
            <li>
              <a href>
                <img style={{ width: "100px" }} src={Logo} alt="Logo" />
              </a>
            </li>
            <li>
              <input placeholder="Nhập mã hàng cần tìm kiếm" type="text" />
            </li>
            <button
              type="submit"
              aria-label="Tìm kiếm"
              className="search-button"
              title="Tìm kiếm"
            >
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
            <li>
              <a href />
              <button>
                <i className="fa-solid fa-cart-shopping" /> Giỏ hàng
              </button>
            </li>
            <li>
              <a href>Lịch sử đơn hàng</a>
            </li>
            <li>
              <a href>Đăng Ký</a>
            </li>
            <li>
              <a href>Đăng Nhập</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header