import React, { useState } from 'react';
import Proyectos from './components/Proyectos';
import Tecnologias from './components/Tecnologias'; // Importa el componente de Tecnologias
import SobreMi from './components/SobreMi'; // Importa el componente de Sobre Mi
import './sass/App.scss'; // Importa tu archivo CSS para estilos personalizados

function App() {
  const [ventanaAbierta, setVentanaAbierta] = useState(false);
  const [ventanaContenido, setVentanaContenido] = useState(null);

  const toggleVentana = (contenido) => {
    setVentanaContenido(contenido);
    setVentanaAbierta(!ventanaAbierta);
  };

  return (
    <div className='container'>
      <div className='titulo'>
        <h2 className='titulo-head'>Frontend-developer</h2>
      </div>
      <section className='secciones'>
        <div className='cv'>
          <div className='seccion' onClick={() => toggleVentana(<Proyectos />)}>
            <h1 className='titulo-content'>proyectos</h1>
          </div>
          {ventanaAbierta && (
            <div className='ventana-container'>
              <p className='close' onClick={() => toggleVentana(null)}>x</p>
              <div className='ventana'>
                {ventanaContenido}
              </div>
            </div>
          )}
          <div className='seccion2' onClick={() => toggleVentana(<Tecnologias />)}>
            <h1 className='titulo-content'>Tecnologias</h1>
          </div>
        </div>
        <div className='cv'>
          <div className='seccion' onClick={() => toggleVentana(<SobreMi />)}>
            <h1 className='titulo-content'>sobre mi</h1>
          </div>
          <div className='seccion'>
            <a className='titulo-content' href="sadsad">descargar cv</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
