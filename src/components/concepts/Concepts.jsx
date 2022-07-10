import "./concepts.scss"
import { motion } from "framer-motion"
import { concepts } from "../../data"

export default function Concepts() {
	return (
		<div className = "concepts" id = "concepts">
			<h1> Concepts </h1>
			<div className="container">
					{concepts.map((item) =>
							<div className="item">
								<img src={require("../img/" + item.img)} alt="" />
								<div className="label">{item.title}</div>
							</div>
					)}        
			</div>

			{/* <div className="container">
					{concepts.map((item) =>
							<div className="item">
								<img src={require("../img/" + item.img)} alt="" />
								<div className="label">{item.title}</div>
							</div>
					)}        
			</div> */}

		</div>
	)
}