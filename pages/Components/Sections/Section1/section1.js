import React from 'react';
import '../../../../assets/Responsive/style.scss';

function Section1() {
    return (
        <div>
         <div className="container">
            <div className="row">
            <div className="col-lg-6">  
            <div className="title">
            <h1>Welcome In My Site</h1>
            </div>
            <div className="para">
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
            </div>
            <div className="btns">
            <button>Subscribe My Website</button>
            </div>
            </div>
            </div>
            <div className="row">
            <div className="col-lg-8">
                <img src="http://wallpaperheart.com/wp-content/uploads/2018/03/Love-Couple-Shoes-full-hd-wallpaper.jpg" className="img1"/>
            </div>
            </div>
         </div>
         
         </div>
    )
}

export default Section1
