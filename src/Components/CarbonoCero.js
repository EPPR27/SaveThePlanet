import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import '../stylesheet/CarbonoCero.css';

function CarbonoCero () {
  return (
    <>
    <Header />
    <div className="carbonoCero">
      <h1>Carbono Cero</h1>
      <div className='container'>
      <img src={require('../imgs/CeroCarbono.jpg')} alt="imgCeroCarbono"/>
      {/* <div className='parrafo'> */}
        <p>
          Elaboramos una Estrategia de Carbono Neutral, como una guía para alcanzar el objetivo de neutralidad de carbono al 2025: medir, reducir y compensar las emisiones por  operaciones directas y por proyectos donde participemos como organización.
          Nuestro objetivo principal es ayudar a las industrias a alcanzar la neutralidad de carbono, es decir, reducir y compensar por completo las emisiones de gases de efecto invernadero asociadas a sus actividades. Esto se logrará mediante la implementación de un enfoque integral que abarque la reducción interna de emisiones y la compensación externa a través de proyectos sostenibles.
          Evaluación de la huella de carbono:
          Realizaremos una evaluación exhaustiva de la huella de carbono de la organización, analizando las fuentes de emisión y las áreas de mejora potencial. Esta evaluación servirá como base para el diseño de estrategias de reducción y compensación efectivas.

          Eficiencia energética y uso de fuentes renovables:
          Trabajaremos en colaboración con la organización para identificar oportunidades de mejora en términos de eficiencia energética. Esto incluirá la implementación de medidas para reducir el consumo de energía, como la optimización de los sistemas de iluminación, calefacción y refrigeración, así como la adopción de fuentes de energía renovable en la medida de lo posible.

          Promoción de la movilidad sostenible:
          Fomentaremos el uso de medios de transporte sostenibles entre los empleados y miembros de la organización, como el uso compartido de automóviles, el fomento del transporte público, el uso de bicicletas y la promoción del teletrabajo. Además, se explorarán opciones para electrificar la flota de vehículos de la organización, si corresponde.

          Gestión responsable de residuos:
          Trabajaremos en la implementación de un sistema integral de gestión de residuos que promueva la reducción, reutilización y reciclaje. Esto incluirá la educación y capacitación de los empleados para minimizar el desperdicio, la implementación de programas de reciclaje adecuados y la exploración de oportunidades para el compostaje de residuos orgánicos.

          Compensación de emisiones:
          Implementaremos un programa de compensación de emisiones para neutralizar las emisiones residuales que no se puedan eliminar a través de las medidas anteriores. Esto puede lograrse mediante la inversión en proyectos de energías renovables, reforestación, conservación de la biodiversidad u otras iniciativas sostenibles que generen reducciones tangibles de emisiones de carbono.

          Monitoreo y divulgación:
          Estableceremos un sistema de monitoreo regular para evaluar el progreso hacia la neutralidad de carbono y realizar ajustes cuando sea necesario. Además, promoveremos la divulgación transparente de los resultados y logros obtenidos en relación con la reducción de emisiones y la compensación, para inspirar y educar a otros sobre las mejores prácticas ambientales.

          Participación y colaboración:
          Fomentaremos la participación activa de los empleados, miembros y partes interesadas en el proceso de transición hacia la neutralidad de carbono. Organizaremos eventos, talleres y programas de sensibilización para promover la conciencia ambiental y la adopción de prácticas sostenibles tanto dentro como fuera de la organización. Además, buscaremos colaborar con otras organizaciones y actores relevantes para impulsar un cambio sistémico hacia un futuro más sostenible.

          Implementar esta propuesta permitirá a la organización avanzar hacia un modelo de funcionamiento más sostenible y responsable con el medio ambiente, al tiempo que se convierte en un referente en la lucha contra el cambio climático y la protección del planeta.
        </p>
      {/* </div> */}
      </div>
      
      
    </div>
    <Footer />
    </>
  );
}

export default CarbonoCero;