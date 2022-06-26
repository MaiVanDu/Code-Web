import React from "react";
import tieude from "../static/image/tieude-laptop.PNG";

function Image(){
    return(
        <>
        <div className="slider-image">
            <div className="container">
                <div className='title-laptop'>
                    <img src={tieude}  alt=""  />
                </div>
            </div>
        </div>
        </>
    )
}
export default Image;