import './Hero.css';
import arrow from "../../assets/arrow_btn.png";
import play from "../../assets/play_icon.png";
import pause from "../../assets/pause_icon.png";

const Hero = ({ heroData, heroCount, setHeroCount, playStatus, setPlayStatus }) => {
  return (
    <div className='hero'>
      <div className="hero-text">
        <p>{heroData.text1 || "Default Text 1"}</p>
        <p>{heroData.text2 || "Default Text 2"}</p>
      </div>
      <div className="hero-explore">
        <p>Explore the features</p>
        <img src={arrow} alt="Explore arrow icon" />
      </div>
      <div className="hero-controls">
        <ul className="hero-dots">
          <li 
            onClick={() => setHeroCount(0)} 
            className={heroCount === 0 ? "hero-dot orange" : "hero-dot"} 
            aria-label="Slide 1"
          ></li>
          <li 
            onClick={() => setHeroCount(1)} 
            className={heroCount === 1 ? "hero-dot orange" : "hero-dot"} 
            aria-label="Slide 2"
          ></li>
          <li 
            onClick={() => setHeroCount(2)} 
            className={heroCount === 2 ? "hero-dot orange" : "hero-dot"} 
            aria-label="Slide 3"
          ></li>
        </ul>
        <div className="hero-play-button">
          <img 
            onClick={() => setPlayStatus(!playStatus)} 
            src={playStatus ? pause : play} 
            alt={playStatus ? "Pause video" : "Play video"} 
          />
          <p>See the video</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
