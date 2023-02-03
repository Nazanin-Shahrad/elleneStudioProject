import React from 'react'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-inner'>
            <div className='logo'>ElleneStudio</div>
            <nav className='nav'>
                <li><a href="#">About me </a></li>
                <li><a href="#">Gallery </a></li>
                <li><a href="#">Contact </a></li>
            </nav>
            <div className='signup'>
                <a href="#">Sign up</a>
                <a href="#">Sign in</a>
            </div>
            <div className='hamburger-mebu'>
                <span></span>
                <span></span>
            </div>
        </div>
    </div>
  )
}

export default Header