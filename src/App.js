import Todo1 from "./Todo1";

import { Routes,Route, Navigate, useLocation } from "react-router-dom";
import "./App.css"

import Layout from "./Components/Layout";
import Services from "./Components/Services";


import About1 from "./Components/About1";
import Product from "./Components/Product";
import Blogs from "./Components/Blogs";
import Home1 from "./Components/Home1";
import "../src/Components/Sidebar.css"
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Contact from "./Components/Contact";

function App() {
  const token = localStorage.getItem("token1");
  const location = useLocation();
  if(token !== null  && location.pathname==="/signin"){
    <Navigate to={"/home"}/>
  }
  return (
    <>
    {
      token?
      <Layout>
      <Routes>
      <Route element={<Home1/>} path="/home"/>
      <Route element={<About1/>} path="/about"/>
      <Route element={<Services/>} path="/services"/>
      <Route element={<Product/>} path="/Product"/>
      <Route element={<Blogs/>} path="/Blogs"/>
      <Route element={<Contact/>} path="/contact"/>
      </Routes>
      </Layout>
      :
      <Routes>
<Route element={<SignUp/>} path="/"/>
<Route element={<SignIn/>} path="/signin"/>
</Routes>

    }
    

</>

  );
}

export default App;
