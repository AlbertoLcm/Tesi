import React from "react";
import Sidebar from "../components/Sidebar";
import ajedrez from "../images/ajedrez.webp";

const Taller = () => {
  return (
    <>
      <Sidebar />
      <header>
        <h1>Tesi</h1>
      </header>
      <div className="contenedorGeneralTaller">
        <div id="ContenedorTaller">
          <section className="contImagenTaller">
            <img src={ajedrez} alt="fondo" />
          </section>
          <h2>Ajedrez</h2>
          <p>25 Estudiantes se han postulado</p>
          <p>En este taller podras desarrollar grandes habilidades 
            y tacticas avanzadas en el juego de ajedrez
          </p>
          <button>Inscribete ahora</button>
        </div>
      </div>
    </>
  );
}

export default Taller;