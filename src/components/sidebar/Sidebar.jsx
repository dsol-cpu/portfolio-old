import { useState } from "react";
import { Link } from "react-router-dom";
import TopbarMenu from "../topbarMenu/TopbarMenu";
import Menu from "../menu/Menu";
import "./sidebar.scss"
export default function Sidebar({ menuOpen, setMenuOpen }) {
  const subtitle = "Software Engineer | Game Developer | Artist";
  const [selected, setSelected] = useState("");
  const list = [
    {
      id: "",
      title: "Game Development",
    },
    {
      id:"softwaredev",
      title: "Software Development",
    },
    {
      id: "concepts",
      title: "Concepts",
    },
    {
      id: "about-me",
      title: "About Me",
    },
  ];
  
  return (
    <div className={"sidebar " + (menuOpen && "active")} id="sidebar">
      <div className="container">
        <div className="logo_container">
          <Link to='portfolio/' className="logo">David Solinsky</Link> 
          <Link to="portfolio/" className="a">{subtitle}</Link>  
        </div>

        <div className="wrapper">
          <ul>
            {list.map((item) => (
              <TopbarMenu
                title={item.title}
                active={selected === item.id}
                setSelected={setSelected}
                id={item.id}
              />
            ))}
          </ul>
        </div>
          <div className="hamburger" onClick={()=> setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
  )
}