import React from 'react';
import {   faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Logo3 from "../static/image/phukien1.png";
import Logo4 from "../static/image/phukien2.png";
import Logo5 from "../static/image/phukien3.jpg";
import Logo6 from "../static/image/phukien4.jpg";
import Logo2 from "../static/image/slie3.png";
import Logo7 from "../static/image/slie5.png";

function Slider() {
  return (
    <>
      <div id="slider">
      <div className="container">
        <div className="slider-content">
          <div className="slider-content-left">
            <div className="slider-content-left-top-container">
              <div className="slider-content-left-top">
                <a href>
                  <img src={Logo2} alt="Logo2" />
                </a>
                <a href>
                  <img src="./static/image/slie2.png" />
                </a>
                <a href>
                  <img src="./static/image/slie3.png" />
                </a>
                <a href>
                  <img src="./static/image/slie1.png" />
                </a>
              </div>
              <div className="slider-content-left-top-btn">
                <FontAwesomeIcon className='i' icon={faAngleLeft} />
                <FontAwesomeIcon className='i' icon={faAngleRight} />
              </div>
            </div>
            <div className="slider-content-left-bottom">
              <li className="active">Tiêu đề 1</li>
              <li>Tiêu đề 2</li>
              <li>Tiêu đề 3</li>
              <li>Tiêu đề 4</li>
            </div>
          </div>
          <div className="slider-content-right">
            <li>
              <a href>
                <img className="slider-content-right-img" src={Logo3} />
              </a>
            </li>
            <li>
              <a href>
                <img className="slider-content-right-img" src={Logo4} />
              </a>
            </li>
            <li>
              <a href>
                <img className="slider-content-right-img" src={Logo5} />
              </a>
            </li>
            <li>
              <a href>
                <img className="slider-content-right-img" src={Logo6} />
              </a>
            </li>
          </div>
        </div>
      </div>
      <section className="banner-one">
        <div className="container">
          <img style={{width: '100%'}} src={Logo7} />
        </div>
      </section>

    </div>
    </>
  );
}

export default Slider