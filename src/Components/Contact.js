import React from 'react'
import { Link } from 'react-router-dom';
import "../Components/contact.css"

export default function Contact() {
  return (
    <div>
              
       <div className="section box">
        <div className="container-fluid px-0 mx-0 min-h-100 ">
          <div class="row">
            <div class="col-12">
            
              <h1 class="mt-5 mx-5">Need Help?We're here for You</h1>
              <h1    class= "mx-5">and ready to answer yours questions</h1>
              <h1 class="mx-5" >+91 999999999</h1>
              <button class="rounded pill px-4 py-2 mx-5  my-3 btn1"><Link>Who We are</Link></button>
            </div>
            <hr class="mx-5 mb-5"></hr>
            <div class="col-12 col-lg-3">
            <div class="media">
            
               <ul    class=" list mx-5" >
                <li><h3 class="heading" >Company</h3></li>
                <li>About Company</li>
                <li>Mission and Vision</li>
                <li>Our Works and clients</li>
               </ul>
            </div>
            </div>

            <div class="col-12 col-lg-3">
            <div class="media">
            
               <ul    class=" list mx-5 " >
                <li><h3 class="heading" >SocialMedia</h3></li>
                <li>Facebook</li>
                <li>instagram</li>
                <li>Linkdin</li>
               </ul>
            </div>
            </div>
            <div class="col-12 col-lg-3">
            <div class="media">
            
               <ul    class=" list mx-5" >
                <li><h3 class="heading" >Servies</h3></li>
                <li>Plants and trees</li>
                <li>Maintaince</li>
                <li>Decoration</li>
               </ul>
            </div>
            </div>
            <div class="col-12 col-lg-3">
            <div class="mx-5">
              <h1>Stay in Loop</h1>
              <h1>Subscribe to our Weekly Newspaper</h1>
              <input placeholder='enter your email'/><button>Subscribe</button>
            </div>
            
            </div>
          </div>
        </div>
       </div>

    </div>
  )
}
