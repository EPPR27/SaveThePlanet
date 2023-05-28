import React from "react";
import CardsLogros from "./CardLogro";
import '../stylesheet/Logros.css';
import Header from "../Header";
import Footer from "../Footer";
function Logros() {
  const imagenes = [
    {id:1, imageUrl: 'https://www.avina.net/wp-content/uploads/2019/05/08-ReciclajeInclusivo-1.jpg'},
    {id:2, imageUrl:'https://www.avina.net/wp-content/uploads/2019/05/11-BancaEtica-1.jpg'},
    {id:3, imageUrl: 'https://www.avina.net/wp-content/uploads/2019/05/10-TCS-IP-Democracia-1.jpg'},
    {id:4, imageUrl: 'https://www.avina.net/wp-content/uploads/2019/05/09-TecnologiayCiudades-1.jpg'},
    {id:5, imageUrl: 'https://www.avina.net/wp-content/uploads/2019/05/07-Migraciones-1.jpg'},
    {id:6, imageUrl: 'https://www.avina.net/wp-content/uploads/2019/05/06-ProcesodePazenColombia-1.jpg'},
    {id:7, imageUrl: 'https://www.avina.net/wp-content/uploads/2019/05/02-AccionClimatica-1.jpg'},
    {id:8, imageUrl: 'https://www.avina.net/wp-content/uploads/2019/05/01-AccesoAlAgua-1.jpg'}
  ]
  return (
    <>
    <Header />
    <div className="logros">
      <h1>Logros</h1>
      <div className="card-div">
      {imagenes.map((imagen) => (
        <div className="card-div-card">
        <CardsLogros className='logro'
        key={imagen.id}
        imageUrl={imagen.imageUrl}/>
        </div>
        ))}
        
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Logros;