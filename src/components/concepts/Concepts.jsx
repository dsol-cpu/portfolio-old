import "./concepts.scss"
import { motion } from "framer-motion"
import { concepts } from "../../data"

export default function Concepts() {
  return (
    <motion.div 
      className="concepts"
      id="concepts"

      initial={{x: 300, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      exit={{x: 300, opacity: 0}}
      transition = {{delay: 0.2}}

    >
      <h1> Concepts </h1>
      <div className="container">
          {concepts.map((item) =>
              <div className="item">
                <img src={item.img} alt="" />
                <div className="label">{item.title}</div>
              </div>
          )}        
      </div>

    </motion.div>
  )
}