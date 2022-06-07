import { useState } from "react";
import { Link } from "react-router-dom";
import TopbarMenu from "../topbarMenu/TopbarMenu";

import "./topbar.scss"
export default function Topbar() {
  const subtitle = "Software Engineer | Game Developer | Artist";
  const [selected, setSelected] = useState("home");
  const list = [
    {
      id: "",
      title: "Game Development",
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
    <div className="topbar" id="topbar">
      <div className="logo_container">
        <Link to='portfolio/' className="logo">David Solinsky</Link> 
        </div>

        <Link to="portfolio/" className="a">{subtitle}</Link>  

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

      <div className="mobilewrapper">
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
    </div>        
  )
}