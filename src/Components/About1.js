import React from 'react'
import about from "../images/logo2.svg"
import "../Components/About1.css"
export default function About1() {
  return (
    <div>
      <div className="section"></div>
      <div className='container-fluid px-0 text-center'>
        <div class="row">
          <div class="col-12">
            <div class="home1 px-5 py-5">
                <h3 class="mt-5">who we are</h3>
                <h1 class="mx-5 my-5">
                We creates beautiful, sustainable, innovative designs for your drought tolerant garden, as well as your outdoor living space.
                </h1>
                <img src={about} alt="about" class="mt-5 mx-5"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
