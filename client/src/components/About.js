import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`

    display: flex;
    align-items: center;
    justify-content: space-around;
    gap: 50px;
    padding: 5% 5%;
    margin-top: 10%;
    height: calc(100vh - 60px);
    width: 100%;


    .aboutImage{
        width: 50%;
        /* background-color: red; */

    img{
        width: 70%;
        height: 600px;
    }
}

.aboutText{
    flex: 4;
    /* background-color: green; */
    

    h2{
        font-family: 'Bodoni Moda';
        font-size: 3vw;
        font-weight: lighter;
        text-align: center;
        margin-bottom: 2vw;

    }

    p{
        font-family: lato;
        font-size: 20px;
        font-weight: lighter;
    }

}

`;


const About = () => {
  return (
    <AboutWrapper className='aboutWrapper'>
        <div className='aboutImage'>
       <img src="./images/image-7.jpg" alt="" /> 
    
        </div>
       
        <div className='aboutText'>
            <h2>About Me</h2>
            <p>Ansel Easton Adams was an American landscape photographer and environmentalist
                 known for his black-and-white images of the American West. He helped found Group f/64,
                  an association of photographers advocating "pure" photography which favored sharp focus
                   and the use of the full tonal range of a photograph.</p>
                   <br/>
            <p>Adams was a life-long advocate for environmental conservation, and his photographic practice was deeply entwined with this advocacy. At age 12, he was given his first camera during his first visit to Yosemite National Park. He developed his early photographic work as a member of the Sierra Club. He was later contracted with the United States Department of the Interior to make photographs of national parks. For his work and his persistent advocacy, which helped expand the National Park system, he was awarded the Presidential Medal of Freedom in 1980.</p>
        </div>
     </AboutWrapper>
  )
}

export default About