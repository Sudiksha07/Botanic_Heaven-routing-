import React from 'react';
import "../Components/servicess.css";
import flower1 from "../images/flower1.png"
import flower2 from "../images/flower2.png";
import flower3 from "../images/flower3.png"
export default function Services() {
  return (
    <div>
       <div className="section mx-5 my-5">
      <div className='container-fluid px-0 '>
        <div class="row">
          <div class="col-12">
            <div class="home2 my-5 mx-5">
                <h3>OUR SERVICE </h3>
     <h1>Providing the world-class
          service experiences</h1>
            </div>
          </div>
          </div>
          <div class="row my-5">
          <div class="col-12 col-lg-4 ">
          <div class="card1  px-3  my-2">
        <img src={flower1} alt="folwer1" height="90px" class="mb-3"></img>
        <h3 class="my-3">Landscaping and designs</h3>
        <p >Lorem ipsum dolor sit amet,  incididunt ut labore  exercitation   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
       </div>
          </div>
          <div class="col-12 col-lg-4 my-2 ">
          <div class="card1  px-3">
        <img src={flower2} alt="folwer1" height="90px" class="mb-3"></img>
        <h3 class="my-3">Sell and Rentals</h3>
        <p >Lorem ipsum dolor sit amet,  incididunt ut labore  exercitation   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
       </div>
          </div>
          <div class="col-12 col-lg-4 my-2 ">
          <div class="card1  px-3">
        <img src={flower3} alt="folwer1" height="90px" class="mb-3"></img>
        <h3 class="my-3">Events and gift</h3>
        <p >Lorem ipsum dolor sit amet,  incididunt ut labore  exercitation   ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
       </div>
          </div>
          
          </div>
          </div>
        
    </div>
    </div>
  )
}
