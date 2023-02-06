import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {motion} from 'framer-motion';
// import Image from "./Image";


const BannerWrapper = styled(motion.div)`
/* width: 100vw; */
height: calc(100vh - 60px);
margin: 0 5%;
position: relative;

 img {
  width: 100%;
  object-fit: cover;
  height: 100%;
  /* height:calc(100vh-60px); */
  /* height: inherit; */
 }

 .textWrapper{
  position: absolute;
  top: 20%;
  left: 20%;
  transform: translate(-20% , -20%);
  font-family: 'Bodoni Moda';
  font-size: 5.8vw;
  font-weight:400;
  color: white;
 }

 button {
 position: absolute;
 left: 100px;
 top: 400px;
 /* transform: translate(-100px , -400px); */
  background-color: white;
  color: black;
  padding: 10px 20px;
  border: none;
  outline: none;
  border-radius: 8px;
  font-family: 'Bodoni Moda';
  font-weight: bold; 
  cursor: pointer;

 }


`

const Banner = () => {

  const titleAnim1 = {
    hidden:{ opacity:0 , y:-50 },
    show :{opacity:1 , y:0 , transition:{duration:0.75  , ease:"easeOut"} } 
  }
  const titleAnim2 = {
    hidden:{ opacity:0 , y:50 },
    show :{opacity:1 , y:0 , transition:{duration:0.75  ,ease:"easeOut"} } 
  }

  const containerTitle = {
    hidden: {opacity:0},
    show: {opacity:1 , transition: {staggerChildren: 0.25 ,when:"beforeChildren"} , },
    // exit:{ opacity:0 , y:100 }
  };


 
  return (
    <BannerWrapper >
      {/* <BannerRowTop title={"New Experience"} />
      <BannerRowCenter title={"ELLENE"} />
      <BannerRowBottom title={"Studio"} /> */}

        {/* <motion.img  animate={{opacity:1 , transition :{duration:1 ,ease:"easeOut"}, scale:1}} initial={{opacity:1 ,scale:1.2}} src="./images/image-2.jpg" alt=""  className="hero-img"/> */}
        <img src="./images/image-2.jpg" alt=""  className="hero-img" />

        
      
            {/* <Image id={2} /> */}
       
       
        
      
        <motion.div  variants={containerTitle} initial="hidden" animate="show" className="textWrapper">
          <motion.div variants={titleAnim1}  className="firstText">New Experience with</motion.div>
          <motion.div variants={titleAnim2}   className="firstText">Ellene Studio</motion.div>
        </motion.div>
        <button className="book">Book Now</button>
    </BannerWrapper>
  );
};

const AnimatedLetters = ({ title }) => (
  <span className="row-title">
    {[...title].map((letter) => (
      <span className="row-letter">{letter}</span>
    ))}
  </span>
);



export default Banner;