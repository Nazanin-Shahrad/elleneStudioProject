import { useState } from "react";
import { motion } from "framer-motion";
import styled from 'styled-components';


const hiddenMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 30px, rgba(0,0,0,1) 30px, rgba(0,0,0,1) 30px)`;
const visibleMask = `repeating-linear-gradient(to right, rgba(0,0,0,0) 0px, rgba(0,0,0,0) 0px, rgba(0,0,0,1) 0px, rgba(0,0,0,1) 30px)`;



const Wrapper = styled.section`


  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  scroll-snap-align: center;
  perspective: 500px;


 div {
  width: 300px;
  aspect-ratio: 2/3;
  position: relative;
  max-height: 90vh;
  margin: 20px;
  background: var(--white);
  overflow: hidden;
}
`
const Img = styled.img`

  width: 100%;
  object-fit: cover;
  height: 100%;
  /* height:calc(100vh-60px); */
  /* height: inherit; */

`
const Image = ({ id })=> {
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);
  
    return (
      <Wrapper>
        <motion.div
          initial={false}
          animate={
            isLoaded && isInView
              ? { WebkitMaskImage: visibleMask, maskImage: visibleMask }
              : { WebkitMaskImage: hiddenMask, maskImage: hiddenMask }
          }
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          onViewportEnter={() => setIsInView(true)}
        >
          <Img src={`/${id}.jpg`} alt="" onLoad={() => setIsLoaded(true)} />
        </motion.div>
      </Wrapper>
    );
  }

  export default Image;