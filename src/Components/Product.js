import React from 'react';
import "../Components/Product.css";
import plant from "../images/plant.png"
import plant1  from "../images/plant1.png";
import plant2  from "../images/plant2.png"

export default function Product() {
  return (
    <div>
      <div class="container mt-5">
        <div class="shop-container">
            <h1 class="mb-0">Shop Our Product</h1>
            <button class="btn btn-primary">Shop Now</button>
        </div>
        <div class="row hello">
            <div class="col-12 col-lg-3 my-3">
                <div class="card2 text-center py-5"> 
                <img src={plant}></img></div>
                <h3 className="hi my-3"><span>Indoor Plant</span></h3>
            </div>
            <div class="col-12 col-lg-3 my-3">
                <div class="card3 text-center py-5"> 
                <img src={plant1}></img></div>
                <h3 className="hi my-3"><span>Flower</span></h3>
            </div>
            <div class="col-12 col-lg-3 my-3">
                <div class="card2 text-center py-5"> 
                <img src={plant2}></img></div>
                <h3 className="hi my-3"><span>Seeds</span></h3>
            </div>
            <div class="col-12 col-lg-3 my-3">
                <div class="card3 text-center py-5"> 
                <img src={plant1}></img></div>
                <h3 className="hi my-3"><span>Flowers</span></h3>
            </div>
            
        </div>
    </div>
    </div>
  )
}
