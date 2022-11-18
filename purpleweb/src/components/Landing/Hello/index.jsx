import React from "react";
import './index.css';

export default function Hello() {
  return (
    <React.Fragment>
        <main className="hello">
            <div className="insideText">
                <h4>ADQUIRA, JOGUE E SE DIVIRTA</h4>
                <h6>BrightCloud realizando seus sonhos Melhor cloud gaming do Brasil</h6>
            </div>
            <div className="buttons">
                <div className="button">
                    <h2>JOGAR</h2>
                </div>
                <div className="button">
                    <h2>ADQUIRIR</h2>
                </div>
            </div>
        </main>
    </React.Fragment>
  )
}