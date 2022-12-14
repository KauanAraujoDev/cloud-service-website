import React, { useState, useEffect } from "react";

import { Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../../components/Responsive.css';

import Header from "../../components/WebSite/Header";
import Footer from "../../components/WebSite/Footer";

import Hello from "../../components/WebSite/Landing/Hello";
import TopGames from "../../components/WebSite/Landing/TopGames";
import HowWorks from "../../components/WebSite/Landing/HowWorks";

import { motion } from "framer-motion"

export default function Landing() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  function LoadingPage() {
    if (loading) {
      return (
        <React.Fragment>
            <Loader 
            active 
            size="massive" 
            content="Aguarde o carregamento da Bright"
            style={{ 
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "700",
              fontSize: "2rem",
              lineHeight: "2.4375rem",
              textAlign: "center",
              color: "#ECECEC",
            }}
            />
        </React.Fragment>
      )
    } else {
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
  }

  return (
    <LoadingPage></LoadingPage>
  )
}