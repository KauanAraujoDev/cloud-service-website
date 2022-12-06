import React from "react";
import { Link } from "react-router-dom";

import './index.css';

import brightLogo from '../../../assets/logo.png';
import userImage from '../../../assets/user.png';

import {ReactComponent as Logout} from '../../../assets/Logout.svg';

export default function Header() {
    const userInfos = (userimage) => {
        const infos = {
            background: `url(${userimage})`,
            backgroundRepeat: 'no-repeat, repeat',
            backgroundSize: 'cover'
        }
        return infos
    }

    return (
        <React.Fragment>
            <header>
                <Link to="/" style={{ textDecoration: "none"}}>
                    <div className="nav">
                            <img className="brightlogo" src={brightLogo} alt="Bright Logo" />
                            <h2>BrightCloud</h2>
                    </div>
                </Link>
                <div className="user">
                    <div className="elipse" style={userInfos(userImage)}></div>
                    <h3>Jhonatan</h3>
                </div>
                <div>
                    <Logout className="logout" />
                </div>
            </header>
        </React.Fragment>
    )
}