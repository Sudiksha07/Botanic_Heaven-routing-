import React from 'react'
import about from "../images/logo.svg"

export default function Home1() {
  const handleLocalStorage= ()=>{
    localStorage.setItem("greetings", "Hi");
  }
  return (
    <div>

      <div class="home py-5 full-height text-center">
        <h3 class="pt-5">WE ADD GREENERY TO YOUR PLACE</h3>
        <h1 class="py-5 px-5">Well-designed landscapes for home, business, and
          public spaces.</h1>
        <div class="rounded-container  text-center mx-auto">
          <input class="rounded-input" type="text" placeholder='Enter your email adress...' />
          <button type='button' onClick={handleLocalStorage} class="rounded-button"> Request Full version</button>
        </div>
      </div>
    </div>

  )
}
