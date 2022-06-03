import "./gamedev.scss";
import { gamedev } from "../../data"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
var bool = true;
export default function GameDev() {
  return (
    <motion.div 
      className="gamedev"
      id="gamedev"

      initial={{x: 300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      exit={{x: 300, opacity: 0}}
      transition = {{delay: 0.2}}
    >
      <h1>Game Development</h1>
        <div className="container">
          {gamedev.map((item) =>
            <div className="item">
              <Link to={item.id}>
                <div className="left">
                  <img src={item.img} alt="" />
                </div>
                <div className="right">
                  <h2>{item.title}</h2>
                </div>
              </Link>
            </div>
          )}        
        </div>
    </motion.div>
  )
}