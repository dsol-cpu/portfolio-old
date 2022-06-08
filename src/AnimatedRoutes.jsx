import About from "./components/about/About";
import GameDev from "./components/gamedev/GameDev";
import Softwaredev from "./components/softwaredev/Softwaredev";
import Concepts from "./components/concepts/Concepts";
import QuickQuisine from "./components/gamedev/games/quickquisine/QuickQuisine";
import Parryt from "./components/gamedev/games/parryt/Parryt";
import UpintheAir from "./components/gamedev/games/upintheair/UpintheAir";
import MK_Area from "./components/gamedev/games/mk_area/MK_Area";

import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

export default function AnimatedRoutes() {
    const location = useLocation();
    const titleMap = [
        {path: '', title:'Game Development', element: <GameDev/>},
        {path: 'softwaredev', title:'Software Development', element: <Softwaredev/>},
        {path: 'concepts', title: 'Concepts', element: <Concepts/>},
        {path: 'about-me', title: 'About Me',element: <About/>},
        {path: 'quickquisine', title: 'Quick Quisine',element: <QuickQuisine/>},
        {path: 'parryt', title: 'Parryt', element: <Parryt/>},
        {path: 'upintheair', title: 'UpInTheAir', element: <UpintheAir/>},
        {path: 'mk-area', title: 'MK-Area', element: <MK_Area/>}
      ]
    return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            {titleMap.map((item) => 
            <Route path={"portfolio/" + item.path} element={item.element}/>
            )}
        </Routes>
    </AnimatePresence>
  )
}