import React from 'react';
import "./navi.css";

const Navi = () => {
    return (
        <div className='header'>
            <h1>L1nk 4Ne1</h1>
            <div className='navigation'>
                <span>Moteurs de recherche</span>
                <ul className="socialMediaLinks">
                    <li> <a href="https://www.google.fr" target="_blank" rel="noopener" title="Goolgle"> <img src="./logo/google.png" alt="logo google" aria-label="liens vers Google" /> </a> </li>
                    <li><a href="https://www.qwant.com/?l=fr" target="_blank" rel="noopener" title="Qwant"> <img src="./logo/qwant.png" alt="logo Qwant" aria-label="liens vers Qwant" /> </a></li>
                    <li><a href="https://duckduckgo.com/?utm_source=bdmtools&utm_medium=siteweb&utm_campaign=duckduckgo" target="_blank" rel="noopener" title="DuckDuckGo"><img src="./logo/duckduckgo.png" alt="logo Duckduckgo" aria-label="liens vers DuckduckGo" /></a></li>
                    <li><a href="https://www.bing.com/" target="_blank" rel="noopener" title="Bing"><img src="./logo/bing.png" alt="logo Bing" aria-label="liens vers Bing" /></a></li>
                    <li><a href="https://www.startpage.com//" target="_blank" rel="noopener" title="StartPage"><img src="./logo/startpage.png" alt="logo Startpage" aria-label="liens vers startpage" /></a></li>
                </ul>
            </div>
        </div>
    )
};

export default Navi;