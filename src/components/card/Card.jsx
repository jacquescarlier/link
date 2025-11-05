import React from "react";
import "./card.css"

function Card({ raccourcis }) {
  return (
    <div className="card-style">
      {raccourcis.map((raccourci) => (
        <div className="card-container" key={raccourci.id}>
        <a target="_blank" rel="noopener" href={raccourci.link} key={raccourci.id} className="araccourci">
          <img src={raccourci.cover} alt={raccourci.title}></img>
        </a>
        <span>{raccourci.title}</span>
        </div>
      ))}
    </div>
  );
}
export default Card;