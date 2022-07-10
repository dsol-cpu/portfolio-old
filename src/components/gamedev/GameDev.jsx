import "./gamedev.scss";
import { gamedev } from "../../data"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
var bool = true;
export default function GameDev() {
	return (
		<div className="gamedev" id="gamedev">
			{/* <h1>Game Development</h1> */}
				<div className="container">
					{gamedev.map((item) =>
						<div className="item">
								<div className="left">
									<img src={require("../img/"+item.img)} />
								</div>
							<div className="right">
									<h2>{item.tools}</h2>
									<h3>{item.title}</h3>
									<p>{item.desc}</p>
								</div>
						</div>
					)}        
				</div>
		</div>
	)
}