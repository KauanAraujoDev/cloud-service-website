import React from "react";
import './index.css';

import warzone from '../../../assets/warzoneback.png';
import fortnite from '../../../assets/fortnite.png';

import {ReactComponent as SteamSVG} from '../../../assets/steam.svg';

export default function TopGames() {
  
  const backgroundGames = (image) => {
    const object = {
      background: `url(${image})`,
      backgroundSize: 'cover'
    }
    return object
  }

  return (
    <React.Fragment>
        <main className="topgames" style={{ background: `url(${warzone})`}}>
            <div className="text">
                <h2>TOP GAMES</h2>
                <h3>JOGOS MAIS JOGADOS EM NOSSA PLATAFORMA</h3>
            </div>
            <div className="gameslist">
              <div className="game" style={backgroundGames(fortnite)}></div>
              <div className="game" style={backgroundGames(fortnite)}></div>
              <div className="game" style={backgroundGames(fortnite)}></div>
              <div className="game" style={backgroundGames(fortnite)}></div>

              <div className="game" style={backgroundGames(fortnite)}></div>
              <div className="game" style={backgroundGames(fortnite)}></div>
              <div className="game" style={backgroundGames(fortnite)}></div>
              <div className="game" style={backgroundGames(fortnite)}></div>
            </div>
            <div className="plataforms">
                <SteamSVG className="svg"/>
                <SteamSVG className="svg"/>
                <SteamSVG className="svg"/>
                <SteamSVG className="svg"/>
                <SteamSVG className="svg"/>
                <SteamSVG className="svg"/>
                <SteamSVG className="svg"/>
                <SteamSVG className="svg"/>
            </div>
        </main>
    </React.Fragment>
  )
}