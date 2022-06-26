import React from "react";
import product1 from "../static/image/product1.png";
import product2 from "../static/image/product2.png";
import product3 from "../static/image/product3.png";

function ShoppingTrends(){
    return (
       <>
        {/*Category product*/}
    <section className="Category-product">
      <div className="container">
        <div className="shopping-trends">
          <strong className="name-box">Xu hướng mua sắm</strong>
          <ul>
            <li><a><img src={product1} alt="" /><span> Điện thoại</span><strong>Giảm đến 50%</strong></a></li>
            <li><a><img src={product2} alt="" /><span>Máy Tính</span><strong>Giảm đến 40%</strong></a></li>
            <li><a><img src={product3} alt="" /><span>Tai-Nghe</span><strong>Giảm đến 30%</strong></a></li>
            <li><a><img src={product2} alt="" /><span>Phụ Kiện</span><strong>Giảm đến 10%</strong></a></li>
          </ul>
        </div>
      </div>
    </section>
       </> 
    )
}
export default ShoppingTrends;