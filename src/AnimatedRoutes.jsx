import About from "./components/about/About";
import GameDev from "./components/gamedev/GameDev";
import Concepts from "./components/concepts/Concepts";
import QuickQuisine from "./components/gamedev/games/quickquisine/QuickQuisine";
import Parryt from "./components/gamedev/games/parryt/Parryt";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
    const location = useLocation();
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="portfolio/" element={<GameDev/>}/>
            <Route path="portfolio/concepts" element={<Concepts/>}/>
            <Route path="portfolio/about-me" element={<About/>}/>
            <Route path="/quickquisine" element={<QuickQuisine/>}/>
            <Route path="/parryt" element={<Parryt/>}/>
        </Routes>
    </AnimatePresence>
  )
}
