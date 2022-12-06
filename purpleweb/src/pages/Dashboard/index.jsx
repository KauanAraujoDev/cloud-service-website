import React, { useState, useEffect } from "react";

import { Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import '../../components/Dashboard/Responsive.css';

import { motion } from "framer-motion"

import Dashboard from "../../components/Dashboard";

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
          <motion.div
            className="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Dashboard />
          </motion.div>
        </React.Fragment>
      )
    }
  }

  return (
    <LoadingPage></LoadingPage>
  )
}