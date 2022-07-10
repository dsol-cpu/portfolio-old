import Sidebar from "./components/sidebar/Sidebar";
import Menu from "./components/menu/Menu";
import { BrowserRouter as Router} from 'react-router-dom';
import AnimatedRoutes from "./AnimatedRoutes";
import "./routeswitch.scss"
import { useState } from "react";
function RouteSwitch() {
  const[menuOpen, setMenuOpen] = useState(false);
  return (
    <Router>
      <div className="routeswitch">
        <Sidebar menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <Menu menuOpen = {menuOpen} setMenuOpen = {setMenuOpen}/>
        <AnimatedRoutes/>
      </div>
    </Router>
  );
}

export default RouteSwitch;