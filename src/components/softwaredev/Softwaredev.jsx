import "./softwaredev.scss";
import { softwaredev } from "../../data"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
var bool = true;
export default function Softwaredev() {
  return (
    <motion.div 
    className="softwaredev"
    id="softwaredev"

    initial={{x: 300, opacity: 0}}
    animate={{x: 0, opacity: 1}}
    exit={{x: 300, opacity: 0}}
    transition = {{delay: 0.2}}
  >
    <h1>Software Development</h1>
      <div className="container">
        {softwaredev.map((item) =>
          <div className="item">
            <Link to={item.url}>
              <div className="left">
                {/* <img src={require("../img/"+item.img)} /> */}
              </div>
            </Link>
            <div className="right">
                <h2>{item.tools}</h2>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
          </div>
        )}        
      </div>
  </motion.div>
  )
}