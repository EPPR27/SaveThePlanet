import React from "react";
import '../stylesheet/CardsLogros.css'; 

function CardsLogros ({imageUrl}) {
  return (
    <div className="card-container">
      <div class="card" style={{ backgroundImage: `url(${imageUrl})` }}>
        <button class="card-button">Más info</button>
      </div>
    </div>
  );
}

export default CardsLogros;