import React from 'react'
import star from "../images/th.jpg";
import "../Components/Blogs.css";
import inv from "../images/inverted.png"
import Logo from "../images/logo.svg"



export default function Blogs() {
  return (
    <div>
      <div className="section">
        <div className="container-fluid">
            <div className="row my-5">
                <div className="col-12 col-lg-6">
                <h2 >They</h2>
                <h2>Trusted Us</h2>
                <div class="property"> 
                <h1>4.5</h1>
                <div class="rating1  mt-3 mx-2">
                    ★★★★☆
                </div>
                </div>
                </div>
                <div className="col-12 col-lg-6">
                    <h1>Customer testimonials</h1>
                    <div class="review-container my-5">
            <div class="d-flex justify-content-between align-items-center">
                <img src={inv} alt="Reviewer Image" class="inv my-4"/>
                <div class="rating mx-5">
                    ★★★★☆
                </div>
            </div> 
            <div class="review-content mr-5 pr-5">
                <p>This is a sample review content. The reviewer is sharing their experience and feedback about the product. It was an excellent purchase and highly recommended!</p>
            </div>
            <img src={Logo} height="70px" />
        </div>
        <div class="review-container my-5">
            <div class="d-flex justify-content-between align-items-center">
                <img src={inv} alt="Reviewer Image" class="inv my-4"/>
                <div class="rating mx-5">
                    ★★★★☆
                </div>
            </div> 
            <div class="review-content mr-5 pr-5">
                <p>This is a sample review content. The reviewer is sharing their experience and feedback about the product. It was an excellent purchase and highly recommended!</p>
            </div>
            <img src={Logo} height="70px" />
        </div>
        <div class="review-container my-5">
            <div class="d-flex justify-content-between align-items-center">
                <img src={inv} alt="Reviewer Image" class="inv my-4"/>
                <div class="rating mx-5">
                    ★★★★☆
                </div>
            </div> 
            <div class="review-content mr-5 pr-5">
                <p>This is a sample review content. The reviewer is sharing their experience and feedback about the product. It was an excellent purchase and highly recommended!</p>
            </div>
            <img src={Logo} height="70px" />
        </div>



                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
