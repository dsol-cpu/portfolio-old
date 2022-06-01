import "./gamedev.scss";
import { gamedev } from "../../data"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function GameDev() {
  return (
    <motion.div 
      className="gamedev"
      id="gamedev"

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <h1>Game Development</h1>
        <div className="container">
          {gamedev.map((item) =>
            <div className="item">
              <Link to={'/' + item.id}>
                <img src={item.img} alt="" />
                <h2>{item.title}</h2>
              </Link>
            </div>
          )}        
        </div>
    </motion.div>
  )
}