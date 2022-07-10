import "./about.scss";
import Me from '../img/me.png';
import DownloadIcon from '../img/vector-download-icon.png';
import Resume from '../img/David_Solinsky_Resume-6-19-2022.pdf'
import { about } from '../../data';
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

export default function About() {
	const text = " I'm a Software Engineer, Game Developer, and Artist based in Herndon, Virginia. I graduated from the College of William and Mary with a Bachelor's of Science in Computer Science."
	const downloadFile = () => {
		window.location.href = {Resume}
	}
	return (
		<div className="about" 	id="about">
			<div className="container">
				<div className="left">
						<img src={Me} alt="" />
				</div>
				<div className="right">
					<h1> {text} </h1>
					{about.map((icon)=>
						<a href={icon.url}>
							<img src={require("../img/" + icon.img)} />
						</a>
					)}
					<h1> My business email:</h1>
					<a href="mailto::dsolinsky98@gmail.com">dsolinsky98@gmail.com</a>
					<div className="button-container">
						<button onClick={() => downloadFile}>
							<a href={Resume} className="text" download>Download Resume</a> 
							<img src={DownloadIcon} alt="" />
						</button>
					</div>

				</div>
			</div>
		</div>
	)
}