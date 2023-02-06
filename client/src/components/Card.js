import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
display: flex;
flex-direction: column;
width: 25%;

height: 380px;
/* align-items: center; */
/* justify-content: space-between; */
background-color: white;
box-shadow: 9px 7px 15px 0px rgba(171,154,154,0.56);
/* background-color: red;
width:20% ;
height: 300px; */
margin-bottom: 8vw;





img{
    flex:2;
   width:100%;
    /* object-fit: cover; */
  

}

.categoryTitle {
    flex: 2;
    font-size: 1.8vw;
    font-family: 'Bodoni Moda';
    font-weight: lighter;
    text-align: center;
    margin-top: 2em;
   
}

`;

const Card = () => {
  return (
    <CardContainer className='cardContainer'>
        <img src="./images/birthday.jpg" alt="" />
        <h3 className='categoryTitle'> Wedding</h3>
    </CardContainer>
  )
}

export default Card