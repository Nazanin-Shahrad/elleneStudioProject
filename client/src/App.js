import {useEffect , useState } from 'react';

//components
import Header from "./components/Header";
import Banner from "./components/Banner";
import Loader from "./components/Loader";


function App() {

  const [loading , setLoading] = useState(true);

  useEffect(() => {
    loading
    ? document.querySelector("body").classList.add("loading")
    : document.querySelector("body").classList.remove("loading");
  },[loading])


  return (
    <>
    {loading ? (
      <Loader setLoading={setLoading} />
    ) : (
      <>
        <Header />
        <Banner />
        {!loading && (
          <div className='transition-image final'>
            <img src={`/images/image-2.jpg`} alt=""/>
          </div>
        )}
      </>
     )}
  
    </>
  );
}

export default App;
