import React , { useState , useEffect }from 'react';

const AnimatedLetters = ({title}) => {
    <span className='row-title'>
        {[...title].map((letter) => (
            <span className='row-letter'>{letter}</span>
        ))}
    </span>
}


const BannerRowTop = ({title})=>{
    return (
        <div className={"banner-row"}>
            <div className='row-col'>
                <AnimatedLetters title ={title} />

            </div>
            <div className='row-col'>
                <span className='row-message'>
                    We are specialised in taking artistic photography in different gategories.
                </span>
            </div>
        </div>
    )
};



const BannerRowBottom = ({title}) => {
    return (
        <div className={"banner-row center"}>
            <div className='scroll'>
                <span>scroll</span>
                <span>down</span>
            </div>
            <AnimatedLetters title ={title} />

        </div>
    )
};


const BannerRowCenter = ({title , playMarquee}) => {
    return (
        <div className={`banner-row marquee ${playMarquee && "animate"}`}>
          <div className='marquee__inner' >
            <AnimatedLetters title={title} />
            <AnimatedLetters title={title} />
            <AnimatedLetters title={title} />
            <AnimatedLetters title={title} />
            
            </div> 
        </div>
    )
}

const Banner = () => {
    const [playMarquee , setPlayMarquee] = useState(false);

    useEffect(() => {
        setPlayMarquee(true);

    },[])
  return (
    <div className='banner'>
        <BannerRowTop title={""} />
        <BannerRowCenter title={""} playMarquee={playMarquee} />
        <BannerRowBottom title={""} />
    </div>
  )
};

export default Banner