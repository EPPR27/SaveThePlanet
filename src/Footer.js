import React from "react";
import './stylesheet/Footer.css';
import { Link } from "react-router-dom";

function Footer () {
  return (
    <div className="footer">
      <div className="footer-img">
        <img src={require('./imgs/logo-savetheplanet.png')} alt='logo-savetheplanet' />
      </div>
      <div className="footer-contacto">
        <h4>CONTACTO:</h4>
        <p>www.savetheplanet.com</p>
        <p>info.we@savetheplanet.net</p>
        <h4>FUNDACIÓN SAVETHEPLANET:</h4>
        <p>Calle Evelio Lara, Casa 131b,</p>
        <p>Ciudad del Saber, Clayton,</p>
        <p>Ciudad de Panamá, Panamá</p>
        <h4>SAVETHEPLANET AMERICANAS:</h4>
        <p>1300 I Street NW Suite 400E</p>
        <p>PMB 500104, Washington, DC</p>
        <p>20005. Estados Unidos</p>
      </div>
      <div className="footer-reclamo">
        <h4>RECLAMOS Y DENUNCIAS</h4>
        <button className="button"><Link className="button-link" to='/Reclamos'>Click Aqui</Link></button>
      </div>
    </div>
  );
}

export default Footer;