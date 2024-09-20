import React, { useEffect, useState } from 'react'
import Background from './Components/Background/Background';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';

const App = () => {
  let heroData = [
    {text1:"Dive into", text2:"what you love"},
    {text1:"Indulge", text2:"your passions"},
    {text1:"Give in to", text2:"your dreams"},
  ]

  const [heroCount, setHeroCount] = useState(0); 
  const [playStatus, setPlayStatus] = useState(false); //to play or pause the video

  useEffect(()=>{ //to change the images after every 3s interval
    setInterval(()=>{
      setHeroCount((count)=>{return count===2 ? 0 : count+1}) 
      },4000)
  },[])                         //it will run only once when the page is loaded.

  
  return (
    <div>
       <Background playStatus={playStatus} heroCount={heroCount}/> 
       <Navbar/>
       <Hero
        setPlayStatus={setPlayStatus} //using setplaystatus we change the value of playstatus to true or false due to which our video in bg will play/pause
        heroData={heroData[heroCount]} //hero data: the list that we initialised, [herocount]:the index to display specified text
        heroCount={heroCount} //based on this herocount the text we gave in array of objects will be displayed. eg if herocount=0 we show the 1st object(i.e dive into,what you love)
        setHeroCount={setHeroCount}
        playStatus={playStatus}
       />
    </div>
  )
}

export default App