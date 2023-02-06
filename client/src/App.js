import {useEffect , useState } from 'react';



//components
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import About from './components/About';
import Category from './components/Category';



function App() {


  return (
    <>
        <Navbar />
        <Banner />
        <About />
        <Category />
        
    </>
  );
}

export default App;
