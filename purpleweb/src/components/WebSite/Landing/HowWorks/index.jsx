import React from "react";
import './index.css';

import {ReactComponent as Shutdown} from '../../../../assets/Shutdown.svg';

export default function HowWorks() {

  return (
    <React.Fragment>
        <main className="howworks">
            <div className="title"><h2>COMO FUNCIONA</h2></div>
            <div className="steps">
                <div className="step">
                    <div>
                        <Shutdown className="svg" />
                    </div>
                    <div className="text">
                        <h2>Com seu Dispositivo - Você liga</h2>
                        <h3>Aenean non pulvinar ligula, at scelerisque ex. Phasellus a pulvinar est, a aliquam purus. Morbi dignissim auctor metus in suscipit. Nulla facilisi.</h3>
                    </div>
                </div>
                <div className="step">
                    <div>
                        <Shutdown className="svg" />
                    </div>
                    <div className="text">
                        <h2>Acesso Direto</h2>
                        <h3>Aenean non pulvinar ligula, at scelerisque ex. Phasellus a pulvinar est, a aliquam purus. Morbi dignissim auctor metus in suscipit. Nulla facilisi.</h3>
                    </div>
                </div>
                <div className="step">
                    <div>
                        <Shutdown className="svg" />
                    </div>
                    <div className="text">
                        <h2>Conexões</h2>
                        <h3>Aenean non pulvinar ligula, at scelerisque ex. Phasellus a pulvinar est, a aliquam purus. Morbi dignissim auctor metus in suscipit. Nulla facilisi.</h3>
                    </div>
                </div>
            </div>
        </main>
    </React.Fragment>
  )
}