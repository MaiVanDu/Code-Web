import React from 'react';
import { Routes, Route } from 'react-router-dom';
import {  faSearch, faCartArrowDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo from "../static/image/logo.jpg";
import { Link, NavLink } from 'react-router-dom';
import Home from '../pages/Home';
import Registration from '../pages/auth/Registration';
import Login from '../pages/auth/Login';
function Header() {
	const token = localStorage.getItem('token');
	return (
		<div id="header">
			<nav>
				<div className="container">
					<ul>
						<li>
							<a href>
							<Link  to="/"><img  style={{ width: "80px"  }} src={Logo} alt="Logo" /></Link>
							</a>
						</li>
						<li>
							<div className='header__search'>
								<input type="text" className="header-search-input" placeholder="Bạn tìm gì..." />
								<button className='header__search-btn'>
									<FontAwesomeIcon className='header__search-btn-icon icon-searchs' icon={faSearch} />
								</button>
							</div>
							{/* <form action="/tim-kiem" onsubmit="return suggestSearch(event);" className="header__search">
			  <input id="skw" type="text" className="input-search" onkeyup="suggestSearch(event);" placeholder="Bạn tìm gì..." name="key" autoComplete="off" maxLength={100} />
			  <button type="submit">
			  <FontAwesomeIcon className='icon-searchs' icon={faSearch} />
			  <i className="icon-search" />
			  </button>
			  <div id="search-result" />
			</form> */}

						</li>
						<li>
							<a><FontAwesomeIcon className='icon-search' icon={faCartArrowDown} />Giỏ hàng</a>

						</li>
						<li>
							<a href>Lịch sử đơn hàng</a>
						</li>
						{!token ? (
							<>
							<li>
								<a href="/Registration">Đăng Ký</a>
							</li>
							<li>
								<a href="/Login">Đăng Nhập</a>
							</li>
							</>
						) : (<></>)}
					</ul>
				</div>
			</nav>

		</div>


	);
}

export default Header
