import React from "react";

import "./index.css";

import warzone from '../../../assets/warzone.png';

export default function Selects() {
    const background = (image) => {
        const background = {
            background: `linear-gradient(0deg, #0D0A20 0%, rgba(13, 10, 32, 0) 50%), radial-gradient(100.26% 181.31% at 99.21% 1.78%, #090620 0%, rgba(9, 6, 32, 0) 50%), url(${image})`,
            backgroundRepeat: 'no-repeat, repeat',
            backgroundSize: 'cover'
        }
        return background
    }
    return (
        <React.Fragment>
            <main style={background(warzone)}>
                <div className="texts">
                    <h1>Warzone</h1>
                    <p>Warzone is a free-to-play battle royale video game developed by Infinity Ward and published by Activision. It was released on March 10, 2020, for Microsoft Windows, PlayStation 4, and Xbox One, with cross-platform play between the latter two platforms. The game is set in a large-scale conflict between two factions: the United States and the Soviet Union, in a fictionalized version of the Cold War. The game features a battle royale mode, in which up to 150 players fight to be the last player or team standing.</p>
                </div>
                <div className="selectsButtons">
                    <div className="button">
                        <h1>GOOGLE</h1>
                    </div>
                    <div className="button">
                        <h1>AZURE</h1>
                    </div>
                    <div className="button">
                        <h1>CATEGORIAS</h1>
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}