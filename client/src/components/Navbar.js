import React from 'react';
import styled from 'styled-components';

const NavbarWrapper = styled.div`
    width: 100vw;
    height: 60px;
    /* background-color: #e9dbd4; */
    display: flex;
    background-color: transparent;
    align-items: center;
    justify-content: space-around;
    font-family: 'Bodoni Moda';
        font-weight: lighter;
        /* position: fixed; */
        top: 0;
        left: 0;
        transition: 1s all ease;


    .logo{
        font-size: 20px;
        font-family: 'Bodoni Moda';
        font-weight: lighter;
    }

    .nav  , .signup{
        display: flex;
        align-items: center;
        justify-content: space-between;

        li{
            list-style: none;
            margin-left: 20px;
        }

        a{
            text-decoration: none;
            color: black;
        }
    }

  

`;

const Navbar = () => {
  return (

        <NavbarWrapper className='navbarWrapper'>
            <div className='logo'>ElleneStudio</div>
            <nav className='nav'>
                <li><a href="#">About me </a></li>
                <li><a href="#">Gallery </a></li>
                <li><a href="#">Contact </a></li>
            </nav>
            <div className='signup'>
                <li><a href="#">Sign up </a></li>
                <li><a href="#">Sign in</a></li>
            </div>
            {/* <div className='hamburger-mebu'>
                <span></span>
                <span></span>
            </div> */}
        </NavbarWrapper>
    
  )
}

export default Navbar