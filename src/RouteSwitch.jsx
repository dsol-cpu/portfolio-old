import Topbar from "./components/topbar/Topbar";
import Footer from "./components/footer/Footer";
import AnimatedRoutes from "./AnimatedRoutes";
import { BrowserRouter as Router} from 'react-router-dom';
import "./routeswitch.scss"
function RouteSwitch() {
  return (
    <Router>
      <div className="routeswitch">
        <Topbar />
          <AnimatedRoutes/>
        <Footer />
      </div>
    </Router>
  );
}

export default RouteSwitch;