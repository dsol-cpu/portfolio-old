import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./sidebar.scss"
import {
  featuredPortfolio,
  mobilePortfolio,
  designPortfolio,
} from "../../data";
export default function Sidebar() {
  const [selected, setSelected] = useState("home");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "home",
      title: "Home",
    },
    // {
    //   id: "about",
    //   title: "About",
    // },
    {
      id: "gamedev",
      title: "Game Development",
    },
    {
      id: "concepts",
      title: "Concepts",
    },
    // {
    //   id: "",
    //   title: "",
    // },
  ];
    useEffect(() => {
    switch (selected) {
      case "home": setData(featuredPortfolio); break;
      case "game development": setData(mobilePortfolio); break;
      case "concepts": setData(designPortfolio); break;
      default: setData(featuredPortfolio);
    }
  }, [selected]);
  
  return (
    <div className="sidebar">
        <a href="#home" className="logo">David Solinsky</a>   
        <div className="wrapper">
      <ul>
        {list.map((item) => (
          <PortfolioList
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