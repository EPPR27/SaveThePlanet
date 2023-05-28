import React, { useState } from "react";
import '../stylesheet/ReclamosForm.css';
import Header from "../Header";
import Footer from "../Footer";

function ReclamosForm () {
  const paises = [
    {
      id: 1,
      name: 'Argentina',
      regions: ['Buenos Aires','Cordoba','Santa Fe']
    },
    {
      id: 2,
      name: 'Brasil',
      regions: ['Sao Paulo','Rio de Janeiro','Bahia']
    },
    {
      id: 3,
      name: 'Perú',
      regions: ['Lima','La Libertad','Cusco']
    },
  ];

  const[seleccionarPais, setPaises] = useState(null);

  const handleCountryChange = (e) => {
    const paisId = parseInt(e.target.value);
    const pais = paises.find((c) => c.id === paisId);
    setPaises(pais);
  };
  return (
    <>
    <Header />
    <div>
    <div class="card-form">
      <span class="title">Reclamos y Denuncias</span>
      <form class="form">
    <div class="group">
      <input placeholder="" type="text" required="" />
      <label for="name">Nombre</label>
    </div>
    <div class="group">
          <label for='pais'>Pais</label>
          <select onChange={handleCountryChange}>
        <option value="">-- Selecciona --</option>
        {paises.map((pais) => (
          <option key={pais.id} value={pais.id}>
            {pais.name}
          </option>
        ))}
      </select>
        </div>
        {seleccionarPais && (
        <div class='group'>
          <label for='region'>Región</label>
          <select>
            {seleccionarPais.regions.map((region) => (
              <option key={region}>{region}</option>
            ))}
          </select>
          </div>
      )}
    <div class="group">
      <input placeholder="" type="email" id="email" name="email" required="" />
      <label for="email">Correo Electrónico</label>
    </div>
    <div class="group">
      <input placeholder="" type="email" id="email" name="email" required="" />
      <label for="email">Telefono</label>
    </div>
    <div class="group">
      <textarea placeholder="" id="comment" name="comment" rows="5" required=""></textarea>
      <label for="comment">Descripción</label>
    </div>
    <button type="submit">Enviar</button>
  </form>
    </div>
    </div>

    <Footer />
    </>
  );
}

export default ReclamosForm;