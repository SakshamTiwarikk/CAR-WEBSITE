import './Background.css';
import video1 from "../../assets/video1.mp4";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.jpg"; // Check if this file exists and the name is correct
import image5 from "../../assets/image5.jpg";
import image6 from "../../assets/image6.jpg";
import image7 from "../../assets/image7.jpg";
import ford from "../../assets/fordmustang.mp4";

console.log("Images loaded:", { image1, image2, image3, image4, image5, image6, image7, ford });

const Background = ({ playStatus, heroCount }) => {
  if (playStatus) {
    return (
      <video className='backgroundvideo fade-in' autoPlay loop muted>
        <source src={ford} type='video/mp4' />
      </video>
    );
  } else if (heroCount === 0) {
    return <img src={image5} className='background fade-in' alt="background image 4" />;
  } else if (heroCount === 1) {
    return <img src={image6} className='background fade-in' alt="background image 5" />;
  } else if (heroCount === 2) {
    return <img src={image7} className='background fade-in' alt="background image 6" />;
  }
};

export default Background;
