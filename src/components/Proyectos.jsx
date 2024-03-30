import React from 'react';
import myImagen3 from "../assets/m3.png"
import myImagen1 from "../assets/m1.png"
import myImagen2 from "../assets/m2.png"
import { IoIosLink, IoLogoSass, IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { TbHtml } from "react-icons/tb";
import { MdCss } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
function Proyectos() {
  return (
    <div className='proyectos-container'>
      <div className="proyectos-card">
        <div className="img-container">
          <img className='img' src={myImagen1} alt="a" />
        </div>

        <div className='tecnologias-container'> <RiReactjsLine className='url' /> <IoLogoJavascript className='url' /> <TbHtml className='url' /><MdCss className='url' /> <IoLogoSass className="url" /> 
        <div className='links'>
        <a href="https://dvincenzini.vercel.app/" target='_blank'><IoIosLink className='links-url' /> </a><a href="https://github.com/ChristianMagallanes24/proyectodaniela" target='_blank'><FaGithub className='links-url' /></a>
        </div>
         </div>
      </div>

      <div className="proyectos-card">
        <div className="img-container">
          <img className='img' src={myImagen2} alt="a" />
        </div>

        <div className='tecnologias-container'> <RiReactjsLine className='url' /> <IoLogoJavascript className='url' /> <TbHtml className='url' /><MdCss className='url' /> <IoLogoSass className="url" /> 
        <div className='links'>
        <a href="http://digitalpen.shop/" target='_blank'><IoIosLink className='links-url' /> </a><a href="https://github.com/ChristianMagallanes24/DigitalPen" target='_blank'><FaGithub className='links-url'/></a>
        </div>
         </div>
      </div>

      <div className="proyectos-card">
        <div className="img-container">
          <img className='img' src={myImagen3} alt="a" />
        </div>

        <div className='tecnologias-container'> <IoLogoJavascript className='url' /> <TbHtml className='url' /><MdCss className='url' /> 
        <div className='links'>
        <a href="https://color-dev.vercel.app/" target='_blank'><IoIosLink className='links-url'/> </a><a href="https://github.com/ChristianMagallanes24/colorDev" target='_blank'><FaGithub className='links-url' /></a>
        </div>
         </div>
      </div>


    </div>
  );
}

export default Proyectos;

