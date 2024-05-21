import React from 'react'
import { NavLink } from 'react-router-dom'
import "../Components/Sidebar.css"


const Sidebar = () => {
  return (


    <div className="  col-lg-3 sidebar bg-dark min-h-100">
      <ul className="list-unstyled bg-dark">
        <li><NavLink id="about"
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          About Us
        </NavLink>;
        </li>
        <li><NavLink id="services"
          to="/services"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Services
        </NavLink>;
        </li>
        <li><NavLink id="product"
          to="/Product"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Our Products

        </NavLink>;
        </li>
        <li><NavLink id="blogs"
          to="/Blogs"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Reviews
        </NavLink>;
        </li>
        <li><NavLink id="contact"
          to="/contact"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          Get in Touch
        </NavLink>;
        </li>
        {/* <li><NavLink id="Log Out"
          to="/logout"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }>
          LogOut
        </NavLink>;
        </li>
         */}
      </ul>
    </div>



  )
}

export default Sidebar
