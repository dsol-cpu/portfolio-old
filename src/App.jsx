import Home from "./components/home/Home";
import GameDev from "./components/gamedev/GameDev";
import Concepts from "./components/concepts/Concepts";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.scss"

function App() {
  return (
    <div className="app">
      {/* add profile */}
      <Sidebar/>
      <div className="sections">
        <Home/>
        <GameDev/>
        <Concepts/>
      </div>
    </div>
  );
}

export default App;
