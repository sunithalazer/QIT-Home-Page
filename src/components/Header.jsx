import React from 'react'
import logo from "../asset/image/logo.png"
function Header() {
  return (
    <div className='container'>
        <div className='head logo'>
          <img src={ logo } alt="logo" />
        </div>
        <div className='head list'>
            <div>Home</div>
            <div>Business Solutiona</div>
            <div>Products</div>
            <div>About Us</div>
            <div>Contact Us</div>
        </div>
        <div className='head button'>Book A Demo</div>
    </div>
  )
}

export default Header