import React from "react";
import './index.css';
import '../Global.css';

import brightLogo from '../../assets/logo.png';

export default function Header() {
  return (
    <React.Fragment>
        <header>
            <div>
                <img className="brightlogo" src={brightLogo} alt="Bright Logo" />
                <h1 className="brightname">BrightCloud</h1>
            </div>
            <div className="brightlist">
                <h3>CONTATE-NOS</h3>
                <h3>PLANOS</h3>
                <h3>SOBRE NÓS</h3>
            </div>
            <div className="brightlogin">
                <h3>LOGIN</h3>
            </div>
        </header>
    </React.Fragment>
  )
}