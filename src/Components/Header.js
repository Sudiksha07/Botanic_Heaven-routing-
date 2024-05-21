import React from 'react';
import './Header.css'
import { Link,useNavigate } from 'react-router-dom'
import Logo from "../images/logo.svg"
import LogOut from "../images/logOut.webp"

const Header = () => {
const navigate = useNavigate()
    const handleButtonClick = () => {
      localStorage.removeItem("token1");
      alert("clicked");
      navigate("/")
    };
  return (
<>
<nav className=" navbar sticky-top navbar-expand-lg  ">
  <div className="  container-fluid colorhu">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
         {/* <img src={Logo} alt="logo"><Link class="navbar-brand" href="#"></Link></img> */}
         <Link to={"/home"}className="navbar-brand" href="#">  <img src={Logo} height="70px" />  </Link>
         <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
      <form className="d-flex ms-auto" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
       
       
        <button className="btn  button-overlay" id="buttonhu" onClick={handleButtonClick}>
          LogOut
        </button>
   


        
      </form>
    </div>
  </div>
</nav>
</>
  )
}

export default Header
