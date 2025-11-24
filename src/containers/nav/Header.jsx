import React, { useState } from 'react';
import "./header.css";
import Navi from '../../components/navi/Navi';
import { moteursRecherche } from "../../data/data"
const Header = () => {
    const [showText, setShowText] = useState(false);
    const spanNavi = "Moteurs de Recherche"
    return (
        <div className='header'>
            <h1
                onMouseEnter={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}
                style={{ cursor: "pointer" }}
            >
                <a
                    href="https://www.zone-telechargement.irish/"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "inline-block" }}
                >
                    L1nk 4Ne1
                </a>
            </h1>
            {showText && <p className='welcome-text'>WELCOME</p>}
            <div>
                <Navi moteursRecherche={moteursRecherche} spanNavi={spanNavi} divNavi={"navigation"} ulNavi={"socialMediaLinks"} />
            </div>
        </div>
    )
};

export default Header;
