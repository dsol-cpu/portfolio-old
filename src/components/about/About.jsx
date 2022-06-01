import "./about.scss"
import Me from '../img/me.png'
import { motion } from "framer-motion";

export default function About() {
  const text = "Hi there! I'm a 23 year old software engineer, game developer, and artist based in Virginia.\n\n I have a BS in Computer Science from the College of William and Mary. I am passionate about creating meaningful experiences for others.  "
  return (
    <motion.div 
      className="about" 
      id="about"

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <div className="container">
        <div className="left">
            <img src={Me} alt="" />
        </div>
        <div className="right">
          <span>
            <h1> {text} </h1>
              <div className="button-container">
                <button className="button" span="text">
                  Download Resume
                </button>
            </div>
          </span>
        </div>
      </div>        
    </motion.div>
  )
}