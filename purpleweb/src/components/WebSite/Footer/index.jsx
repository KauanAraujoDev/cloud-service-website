import React from "react";
import './index.css';
import '../../Global.css';

import brightLogo from '../../../assets/logoname.png';

export default function Footer() {
  return (
    <React.Fragment>
        <footer>
            <div>
                <img className="brightlogoname" src={brightLogo} alt="Bright Logo" />
            </div>
            <div className="listRules">
                <div className="rules">
                    <h4 className="title">Legal</h4>
                    <div className="list">
                        <h4>Termos de Uso</h4>
                        <h4>Politica de Privacidade</h4>
                        <h4>contato@brightcloud.com.br</h4>
                        <h4>CNPJ 45.883.277/0001-48</h4>
                    </div>
                </div>
                <div className="rules">
                <h4 className="title">Legal</h4>
                    <div className="list">
                        <h4>Termos de Uso</h4>
                        <h4>Politica de Privacidade</h4>
                        <h4>contato@brightcloud.com.br</h4>
                        <h4>CNPJ 45.883.277/0001-48</h4>
                    </div>
                </div>
                <div className="rules">
                <h4 className="title">Legal</h4>
                    <div className="list">
                        <h4>Termos de Uso</h4>
                        <h4>Politica de Privacidade</h4>
                        <h4>contato@brightcloud.com.br</h4>
                        <h4>CNPJ 45.883.277/0001-48</h4>
                    </div>
                </div>
                <div className="rules">
                <h4 className="title">Legal</h4>
                    <div className="list">
                        <h4>Termos de Uso</h4>
                        <h4>Politica de Privacidade</h4>
                        <h4>contato@brightcloud.com.br</h4>
                        <h4>CNPJ 45.883.277/0001-48</h4>
                    </div>
                </div>
            </div>
        </footer>
    </React.Fragment>
  )
}