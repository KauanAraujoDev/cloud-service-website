import React from "react";
import '../../components/Responsive.css';

import Header from "../../components/Header";
import Footer from "../../components/Footer";

import Hello from "../../components/Landing/Hello";
import TopGames from "../../components/Landing/TopGames";
import HowWorks from "../../components/Landing/HowWorks";

import { motion } from "framer-motion"

export default function Landing() {
  return (
    <React.Fragment>
      <Header />
        <motion.div
          className="landing"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Hello />
          <TopGames />
          <HowWorks />
        </motion.div>
      <Footer />
    </React.Fragment>
  )
}