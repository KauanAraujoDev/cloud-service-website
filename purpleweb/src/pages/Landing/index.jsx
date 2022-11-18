import React from "react";
import '../../components/Responsive.css';

import Hello from "../../components/Landing/Hello";
import TopGames from "../../components/Landing/TopGames";
import HowWorks from "../../components/Landing/HowWorks";

export default function Landing() {
  return (
    <React.Fragment>
      <Hello />
      <TopGames />
      <HowWorks />
    </React.Fragment>
  )
}