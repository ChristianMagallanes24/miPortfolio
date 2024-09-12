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

        <div className='nav'>
          <h1 className='titulo-nav'>Christian magallanes</h1>
          <h2 className='titulo-head'>Frontend-developer</h2>
        </div>

      </div>
      <section className='secciones'>
        <div className='cv'>
          <div className='seccion-proyectos' onClick={() => toggleVentana(<Proyectos />)}>
            <h1 className='titulo-content'>Proyectos</h1>
          </div>
          {ventanaAbierta && (
            <div className='ventana-container'>
              <p className='close' onClick={() => toggleVentana(null)}>❌</p>
              <div className='ventana'>
                {ventanaContenido}
              </div>
            </div>
          )}
          <div className='seccion-tecnologias' onClick={() => toggleVentana(<Tecnologias />)}>
            <h1 className='titulo-content'>Tecnologias</h1>
          </div>
        </div>
        <div className='cv'>
          <div className='seccion-sobreMi' onClick={() => toggleVentana(<SobreMi />)}>
            <h1 className='titulo-content'>Sobre mi</h1>
          </div>
          <div className='seccion-cv' onClick={() => window.open("https://drive.google.com/file/d/1A3tDT_7Z-6j4QfEgHrZ7khY1IUhUcFmM/view?usp=sharing", "_blank")}>
            <a className='titulo-content' href="https://drive.google.com/file/d/1A3tDT_7Z-6j4QfEgHrZ7khY1IUhUcFmM/view?usp=sharing" target='_blank'>Descargar CV</a>
          </div>

        </div>
      </section>
    </div>
  );
}

export default App;
