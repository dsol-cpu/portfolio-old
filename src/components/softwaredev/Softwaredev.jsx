import "./softwaredev.scss";
import { softwaredev } from "../../data"
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
export default function Softwaredev() {
	return (
		<div className="softwaredev" id="softwaredev">
			<div className="container">
				{softwaredev.map((item) =>
					<div className="item">
						<a href={item.url}>
							<div className="left">
								<img src={require("../img/"+item.img)} />
							</div>
						</a>
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