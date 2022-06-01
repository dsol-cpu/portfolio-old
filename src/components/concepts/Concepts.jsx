import "./concepts.scss"
import { motion } from "framer-motion"
import { concepts } from "../../data"

export default function Concepts() {
  return (
    <motion.div 
      className="concepts"
      id="concepts"

      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
    >
      <h1> Concepts </h1>
      <div className="container">
          {concepts.map((item) =>
              <div className="item">
                {/* <img src={item.img} alt="" /> */}
                {/* <h2>{item.title}</h2> */}
              </div>
          )}        
      </div>

    </motion.div>
  )
}