import { useEffect, useState } from "react"
import Background from "./Components/Background/Background";
import Navbar from "./Components/Background/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

const App = () => {
  let heroData = [
    {text1:"Your perfect car awaits.",text2:"Explore now!"},
    {text1:"Drive quality.",text2:"Drive style."},
    {text1:"Find your ride",text2:",start your journey."},
  ]
  const[heroCount, setHeroCount] = useState(2);
  const[playStatus, setPlayStatus] = useState(false);

  useEffect(()=>{
    setInterval(() => {
      setHeroCount((count)=>{return count===2?0:count+1})
    }, 5000);
  },[])

  return (
    <div>
      <Background playStatus={playStatus} heroCount={heroCount}/>
      <Navbar/>
      <Hero
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
        playStatus={playStatus}
      />
    </div>
  )
}

export default App