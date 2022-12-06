import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Landing from "./pages/Landing";
import Dashboard from "./pages/Dashboard";

function AnimatedRoutes () {
    const location = useLocation();
    return( 
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={ <Landing /> }></Route>
                <Route path="/dashboard" element={ <Dashboard /> }></Route>
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes;