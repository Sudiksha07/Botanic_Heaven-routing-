import React, { Children } from 'react'
import Header from '../Components/Header'
import Sidebar from './Sidebar'

const Layout = ({children}) => {
  return (
    <>
      <Header />
      <div className="container-fluid px-0">
        <div className="section ">
          <div className="row ">
    <Sidebar />
   <div className=" col-lg-9">
                {children}
             </div> 
          </div>
        </div>
      </div>
    </>
  )
}

export default Layout
