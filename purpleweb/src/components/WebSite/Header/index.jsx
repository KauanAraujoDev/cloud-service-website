import React from "react";
import './index.css';
import '../../Global.css';

import { Link } from "react-router-dom";

import brightLogo from '../../../assets/logo.png';

export default function Header() {
  return (
    <React.Fragment>
        <header>
            <div>
                <Link to="/" style={{ textDecoration: "none"}}>
                    <img className="brightlogo" src={brightLogo} alt="Bright Logo" />
                    <h1 className="brightname">BrightCloud</h1>
                </Link>
            </div>
            <div className="brightlist">
                <Link to="/contact" style={{ textDecoration: "none"}}>
                    <h3>CONTATE-NOS</h3>
                </Link>
                <Link to="/plans" style={{ textDecoration: "none"}}>
                    <h3>PLANOS</h3>
                </Link>
                <Link to="/about" style={{ textDecoration: "none"}}>
                    <h3>SOBRE NÓS</h3>
                </Link>
            </div>
            <Link to="/dashboard" style={{ textDecoration: "none"}}>
                <div className="brightlogin">
                    <h3>DASHBOARD</h3>
                </div>
            </Link>
        </header>
    </React.Fragment>
  )
}