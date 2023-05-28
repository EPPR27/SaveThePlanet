import React from "react";
import '../stylesheet/CardsLogros.css'; 

function CardsLogros ({imageUrl}) {
  return (
    <div class="card" style={{ backgroundImage: `url(${imageUrl})` }}></div>
//     <div class="card">
//   <div class="card-details">
//     <p class="text-title">{props.title}</p>
//     <p class="text-body">{props.descripcion}</p>
//   </div>
//   <button class="card-button">Más información</button>
// </div>
  );
}

export default CardsLogros;