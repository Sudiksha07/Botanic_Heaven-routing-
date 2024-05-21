import { Component } from "react";
import bulb from "../src/images/bulb.png"

class About extends Component{
    render(){
        return(
            <div class="About section text-center  ">
            <div class="container-fluid">
                <div class="row justify-content-center">
                <div class="col-12"></div>
                <img  class="imghu mb-5" src={bulb} />
                 <h1 >We Are Designers</h1>
     <h1 class="boldheading">and Great  Coders</h1>
             <button class="buttonhu rounded-pill my-5">Install our app for free</button></div>   </div>
            </div>
        )
    }
}
export default About;