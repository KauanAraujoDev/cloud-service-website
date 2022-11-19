import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";

function AnimatedRoutes () {
    const location = useLocation();
    return( 
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={ <Landing /> }></Route>
                <Route path="/dashboard" element={ <Landing /> }></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;