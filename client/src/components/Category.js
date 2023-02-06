import React from 'react';
import Card from './Card';
import styled from 'styled-components';

const CategoryWrapper = styled.div`
display: flex;
justify-content:space-between;
gap: 30px;
margin: 10% 0;
padding: 0 5%;
flex-wrap: wrap;
width: 100vw;
/* flex-wrap: wrap; */
/*  */

.first {
    background-color: red;
    width:20% ;
    height: 300px;
}
.second {
    background-color: green;
    width:20% ;
    height: 300px;
}
.third {
    background-color: yellow;
    width:20% ;
    height: 300px;
}
.forth {
    background-color: blue;
    width:20% ;
    height: 300px;
}
.fifth {
    background-color: orange;
    width:20% ;
    height: 300px;
}
.sixth {
    background-color: purple;
    width:20% ;
    height: 300px;
}
.seventh {
    background-color: gray;
    width:20% ;
    height: 300px;
}

`;



const Category = () => {
  return (
    <CategoryWrapper className='categoryWrapper'>
         <Card />
        <Card />
        <Card /> 
        <Card /> 
        <Card /> 
        <Card /> 
       

        {/* <div className='first'></div>
        <div className='second'></div>
        <div className='third'></div>
        <div className='forth'></div>
        <div className='fifth'></div>
        <div className='sixth'></div>
        <div className='seventh'></div> */}
    </CategoryWrapper>
  )
}

export default Category