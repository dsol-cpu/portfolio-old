import About from "./components/about/About";
import GameDev from "./components/gamedev/GameDev";
import Concepts from "./components/concepts/Concepts";
import QuickQuisine from "./components/gamedev/games/quickquisine/QuickQuisine";
import Parryt from "./components/gamedev/games/parryt/Parryt";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
    const location = useLocation();
    const titleMap = [
        {path: 'portfolio/', title:'Game Development', element: <GameDev/>},
        {path: 'portfolio/concepts', title: 'Concepts', element: <Concepts/>},
        {path: 'portfolio/about-me', title: 'About Me',element: <About/>},
        {path: 'portfolio/quickquisine', title: 'Quick Quisine',element: <QuickQuisine/>},
        {path: 'portfolio/parryt', title: 'Parryt', element: <Parryt/>}
      ]
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            {titleMap.map((item) => 
            <Route path={item.path} element={item.element}/>
            )}
        </Routes>
    </AnimatePresence>
  )
}
