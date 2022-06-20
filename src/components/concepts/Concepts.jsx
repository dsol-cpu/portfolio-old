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
			transition = {{delay: 0.2}}
    >
      <Helmet>
        <title>{docTitle}</title>
        <meta name="Concepts | David Solinsky" content={docTitle} />
      </Helmet>
      <h1> Concepts </h1>
      <div className="container">
          {concepts.map((item) =>
              <div className="item">
                <img src={require("../img/" + item.img)} alt="" />
                <div className="label">{item.title}</div>
              </div>
          )}        
      </div>

    </motion.div>
  )
}