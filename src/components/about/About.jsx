import "./about.scss";
import Me from '../img/me.png';
import DownloadIcon from '../img/vector-download-icon.png';
import Resume from '../img/David_Solinsky_CV-5-27-2022.pdf'
import { motion } from "framer-motion";

export default function About() {
	const text = "I'm David Solinsky. I'm a Software Engineer, Game Developer, and Artist based in Herndon, Virginia.\n\n I am currently available for work at the following contacts:"
	const downloadFile = () => {
		window.location.href = {Resume}
	}
	return (
		<motion.div 
			className="about" 
			id="about"

			initial={{x: 300, opacity: 0}}
			animate={{x: 0, opacity: 1}}
			exit={{x: 300, opacity: 0}}
			transition = {{delay: 0.2}}
		>
			<div className="container">
				<div className="left">
						<img src={Me} alt="" />
				</div>
				<div className="right">
						<h1> {text} </h1>
							<div className="button-container">
								<button onClick={() => downloadFile}>
									<a href={Resume} className="text" download>Download Resume</a> 
									<img src={DownloadIcon} alt="" />
								</button>
						</div>
				</div>
			</div>
		</motion.div>
	)
}