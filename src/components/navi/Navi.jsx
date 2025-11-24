import React, { useState } from 'react';


const Navi = ({ moteursRecherche, spanNavi, divNavi, ulNavi }) => {

    return (
        <div className={divNavi}>
            <span>{spanNavi}</span>
            <ul className={ulNavi}>
                {moteursRecherche.map((moteur) => (
                    <li key={moteur.id}> <a href={moteur.link} target="_blank" rel="noopener" title={moteur.title}> <img src={moteur.cover} alt={moteur.altText} aria-label={moteur.arialLabel} /> </a> </li>
                ))}
            </ul>
        </div>
    )
};

export default Navi;

