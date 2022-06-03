import "./about.scss";
import Me from '../img/me.png';
import DownloadIcon from '../img/vector-download-icon.png';
import { motion } from "framer-motion";

export default function About() {
  const text = "I'm David Solinsky. I'm a Software Engineer, game developer, and artist based in Herndon, Virginia.\n\n I am currently available for work at the following contacts:"
  return (
    <motion.div 
      className="about" 
      id="about"

      initial={{x: 300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      exit={{x: 300, opacity: 0}}
      transition = {{delay: 0.2}}

    >
      <div className="container">
        <div className="left">
            <img src={Me} alt="" />
        </div>
        <div className="right">
          <span>
            <h1> {text} </h1>
              <div className="button-container">
                <button className="button" >
                  <a href="" className="text">Download Resume</a> 
                  <img src={DownloadIcon} alt="" />
                </button>
            </div>
          </span>
        </div>
      </div>        
    </motion.div>
  )
}