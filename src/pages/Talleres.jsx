import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ajedrez from "../images/ajedrez.webp";
import teatro from "../images/teatro.jpg";
import lenguaje from "../images/lenguaje.jpg";

const Talleres = () => {
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ['Culturales', 'Deportivos'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19,],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const [visua, setVisua] = useState(2);
  
  return (
    <>
      <Sidebar />
      <header>
        <h1>Tesi</h1>
      </header>
      <div className="contenedorMenu">
        <div className="menu">
          <section className="titulo">
            <p>Talleres</p>
          </section>
          <ul>
            <li onClick={() => setVisua(1)}>Inicio</li>
            <li onClick={() => setVisua(2)}>Tu progreso</li>
            <li onClick={() => setVisua(3)}>Convocatorias</li>
          </ul>
        </div>
      </div>

      <div id="ContenedorTalleres">

        {visua === 1 ? (null) : visua === 2 ? (
          <>
            <div className="titulo">
              <h1>Tu progreso actual</h1>
            </div>

            <section className="contenedorProgreso">
              <div className="contenedorGrafica">
                <Doughnut data={data} />
              </div>

              <div className="informacion">
                <h3>Acerca de los creditos y talleres</h3>
                <p className="titulo">¿Por qué tomar un taller?</p>
                <p>Tomar una actividad diferente puede ayudarte a 
                  desarrollar habilidades que no conocias
                </p>
                <p className="titulo">¿Es necesario tomar talleres?</p>
                <p>Efectivamente, se necesitan de minimo 5 creditos los cuales 
                  completas con talleres
                </p>
              </div>
            </section>
          
          </>
        ) : (
          <>
            <div className="titulo">
              <h1>Inscripciones abiertas</h1>
            </div>
            <div className="tituloTaller"> <p>Culturales</p> </div>
            <div id="Talleres">
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={ajedrez} alt="fondo" />
                </section>
                <h2>Ajedrez</h2>
                <p>25 Estudiantes se han postulado</p>
                <p className="ver">Ver más acerca de este taller</p>
                <button>Postulate ahora</button>
              </div>
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={teatro} alt="fondo" />
                </section>
                <h2>Teatro</h2>
                <p>25 Estudiantes se han postulado</p>
                <p className="ver">Ver más acerca de este taller</p>
                <button>Postulate ahora</button>
              </div>
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={lenguaje} alt="fondo" />
                </section>
                <h2>Lenguaje</h2>
                <p>25 Estudiantes se han postulado</p>
                <p className="ver">Ver más acerca de este taller</p>
                <button>Postulate ahora</button>
              </div>
            </div>

          </>
        )}





      </div>
    </>
  );
};

export default Talleres;