import React from "react";
import "./stylesheet/Header.css";
import { Link } from "react-router-dom";

function Header () {
  return (
    <div className='header'>
      <div className="header-img">
      <Link to='/'><img src={require('./imgs/logo-savetheplanet.png')} alt='logo-savetheplanet' /></Link>
      </div>
      <div className="header-h1">
      <Link className="header-h1-link" to='/'><h1>savetheplanet</h1></Link>
      </div>
      <div className="header-link">
        <Link className="link" to='/logros'>Logros</Link>
        <Link className="link" to='/carbono-cero'>Carbono Cero</Link>
        <Link className="link" to='/campanias-ganadas'>Campañas Ganadas</Link>
      </div>
    </div>
  );
}

export default Header;