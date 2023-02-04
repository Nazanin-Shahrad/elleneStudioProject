import React, { useState, useEffect } from "react";
import styled from 'styled-components';
import {motion} from 'framer-motion';


const BannerWrapper = styled(motion.div)`
/* width: 100vw; */
height: 100vh;
margin: 0 5%;

 img {
  width: 100%;
  object-fit: cover;
  height:100%
 }

 .textWrapper{
  position: absolute;
  top: 30%;
  left: 30%;
  transform: translate(-30% , -30%);
  font-family: 'Bodoni Moda';
  font-size: 7vw;
  font-weight:400;
  color: white;

 }
 button {
 position: absolute;
 left: 20%;
 top: 60%;
 transform: translate(-20% , 60%);
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

  const titleAnim = {
    hidden:{ opacity:0 , y:100 },
    show :{opacity:1 , y:0 , transition:{duration:1 , ease : "easeOut" , } } 
  }

  const containerTitle = {
    hidden: {opacity:0},
    show: {opacity:1 , transition: {staggerChildren: 0.5 ,} , },
    exit:{ opacity:0 , y:50 }
  };


 
  return (
    <BannerWrapper >
      {/* <BannerRowTop title={"New Experience"} />
      <BannerRowCenter title={"ELLENE"} />
      <BannerRowBottom title={"Studio"} /> */}

        <motion.img  animate={{opacity:1 , scale:1 , transition :{duration:1 , ease:"easeInOut"}}} initial={{opacity:1 , scale:1.2 }} src="./images/image-2.jpg" alt=""  className="hero-img"/>
        <motion.div  variants={containerTitle} initial="hidden" animate="show" className="textWrapper">
          <motion.div variants={titleAnim} className="firstText">New Experience with</motion.div>
          <motion.div  variants={titleAnim} className="firstText">ELLENE Studio</motion.div>
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