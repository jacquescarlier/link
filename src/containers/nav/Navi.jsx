import React, { useState } from 'react';
import "./navi.css";
import Card from '../../components/card/Card';
import { raccourcisWarez } from '../../data/data';

const Navi = () => {
    const [showText, setShowText] = useState(false);

    return (
        <div className='header'>
            <h1
                onMouseEnter={() => setShowText(true)}
                onMouseLeave={() => setShowText(false)}
                style={{ cursor: "pointer" }}
            >
                L1nk 4Ne1
            </h1>
            <Card raccourcis={raccourcisWarez} />
              {showText && <p>copyright© JCR & P1t</p>}
            <div className='navigation'>
                <span>Moteurs de recherche</span>
                <ul className="socialMediaLinks">
                    <li> <a href="https://www.google.fr" target="_blank" rel="noopener" title="Goolgle"> <img src="./logo/google.webp" alt="logo google" aria-label="liens vers Google" /> </a> </li>
                    <li><a href="https://www.qwant.com/?l=fr" target="_blank" rel="noopener" title="Qwant"> <img src="./logo/qwant.webp" alt="logo Qwant" aria-label="liens vers Qwant" /> </a></li>
                    <li><a href="https://duckduckgo.com/?utm_source=bdmtools&utm_medium=siteweb&utm_campaign=duckduckgo" target="_blank" rel="noopener" title="DuckDuckGo"><img src="./logo/duckduckgo.webp" alt="logo Duckduckgo" aria-label="liens vers DuckduckGo" /></a></li>
                    <li><a href="https://www.bing.com/" target="_blank" rel="noopener" title="Bing"><img src="./logo/bing.webp" alt="logo Bing" aria-label="liens vers Bing" /></a></li>
                    <li><a href="https://www.startpage.com//" target="_blank" rel="noopener" title="StartPage"><img src="./logo/startpage.webp" alt="logo Startpage" aria-label="liens vers startpage" /></a></li>
                </ul>
            </div>
        </div>
    )
};

export default Navi;