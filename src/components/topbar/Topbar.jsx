import { useState } from "react";
import { Link } from "react-router-dom";
import TopbarMenu from "../topbarMenu/TopbarMenu";
import "./topbar.scss"
export default function Topbar() {
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
        <Link to='portfolio/' className="logo">Redacted Deez</Link>   
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
  </div>        
  )
}