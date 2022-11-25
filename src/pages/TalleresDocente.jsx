import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ajedrez from "../images/ajedrez.webp";
import teatro from "../images/teatro.jpg";
import lenguaje from "../images/lenguaje.jpg";
import deportes from "../images/deportes.jpg";
import culturales from "../images/culturales.jpg";
import academicos from "../images/academicos.jpg";
import '../stylesheets/TalleresDocente.css';
import Modal from "../components/Modal";
import { Link } from "react-router-dom";

const TalleresDocente = () => {
  const [showModal, setShowModal] = useState(false);
  
  ChartJS.register(ArcElement, Tooltip, Legend);

  const data = {
    labels: ['Culturales', 'Deportivos', 'Académicos', 'Por completar'],
    datasets: [
      {
        label: '# of Votes',
        data: [1, 1, 2, 1],
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
            <li onClick={() => setVisua(2)}>Tus talleres</li>
          </ul>
        </div>
      </div>

      <div id="ContenedorTalleres">

        {visua === 1 ? (null) : visua === 2 ? (
          <>
            <section className="contTallDoc">
                <div className="tarTallDoc">
                    <h2>Nombre del taller</h2>
                    <div>Asistentes: #</div>
                    <button className="botTarjTall">Enviar constancias</button>
                </div>
                <div className="tarTallDoc">
                    <h2>Nombre del taller</h2>
                    <div>Asistentes: #</div>
                    <button className="botTarjTall">Enviar constancias</button>
                </div>
                <div className="tarTallDoc">
                    <h2>Nombre del taller</h2>
                    <div>Asistentes: #</div>
                    <button className="botTarjTall">Enviar constancias</button>
                </div>
                <div className="tarTallDoc">
                    <h2>Nombre del taller</h2>
                    <div>Asistentes: #</div>
                    <button className="botTarjTall">Enviar constancias</button>
                </div>
                <div className="tarTallDoc">
                    <h2>Nombre del taller</h2>
                    <div>Asistentes: #</div>
                    <button className="botTarjTall">Enviar constancias</button>
                </div>
            </section>
          
          </>
        ) : (
          <>
            <Modal
            estado={showModal}
            cambiarEstado={setShowModal}
            titulo={"Crear un evento"}
            >
              Hola
            </Modal>
          
            <div className="titulo">
              <h1>Inscripciones abiertas</h1>
            </div>

            <div className="tituloTaller"> 
              <img src={culturales} alt="fondo" />
              <p>Culturales</p> 
            </div>

            <div id="Talleres">
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={ajedrez} alt="fondo" />
                </section>
                <h2>Ajedrez</h2>
                <p>25 Estudiantes se han postulado</p>
                <Link to="/taller/id" className="ver">Ver más acerca de este taller</Link>
                <br />
                <Link to={'/registro/id'} className='buttonLink'>Inscribete ahora</Link>
              </div>
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={teatro} alt="fondo" />
                </section>
                <h2>Teatro</h2>
                <p>25 Estudiantes se han postulado</p>
                <Link to="/taller/id" className="ver">Ver más acerca de este taller</Link>
                <br />
                <Link to={'/registro/id'} className='buttonLink'>Inscribete ahora</Link>
              </div>
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={lenguaje} alt="fondo" />
                </section>
                <h2>Lenguaje</h2>
                <p>25 Estudiantes se han postulado</p>
                <Link to="/taller/id" className="ver">Ver más acerca de este taller</Link>
                <br />
                <Link to={'/registro/id'} className='buttonLink'>Inscribete ahora</Link>
              </div>
            </div>

            <div className="tituloTaller"> 
              <img src={deportes} alt="fondo" />
              <p>Deportivos</p> 
            </div>

            <div id="Talleres">
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={ajedrez} alt="fondo" />
                </section>
                <h2>Ajedrez</h2>
                <p>25 Estudiantes se han postulado</p>
                <Link to="/taller/id" className="ver">Ver más acerca de este taller</Link>
                <br />
                <Link to={'/registro/id'} className='buttonLink'>Inscribete ahora</Link>
              </div>
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={teatro} alt="fondo" />
                </section>
                <h2>Teatro</h2>
                <p>25 Estudiantes se han postulado</p>
                <Link to="/taller/id" className="ver">Ver más acerca de este taller</Link>
                <br />
                <Link to={'/registro/id'} className='buttonLink'>Inscribete ahora</Link>
              </div>
            </div>

            <div className="tituloTaller"> 
              <img src={academicos} alt="fondo" />
              <p>Académicos</p> 
            </div>

            <div id="Talleres">
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={ajedrez} alt="fondo" />
                </section>
                <h2>Ajedrez</h2>
                <p>25 Estudiantes se han postulado</p>
                <Link to="/taller/id" className="ver">Ver más acerca de este taller</Link>
                <br />
                <Link to={'/registro/id'} className='buttonLink'>Inscribete ahora</Link>
              </div>
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={teatro} alt="fondo" />
                </section>
                <h2>Teatro</h2>
                <p>25 Estudiantes se han postulado</p>
                <Link to="/taller/id" className="ver">Ver más acerca de este taller</Link>
                <br />
                <Link to={'/registro/id'} className='buttonLink'>Inscribete ahora</Link>
              </div>
              <div className="targetaTaller">
                <section className="contImagenTaller">
                  <img src={lenguaje} alt="fondo" />
                </section>
                <h2>Lenguaje</h2>
                <p>25 Estudiantes se han postulado</p>
                <Link to="/taller/id" className="ver">Ver más acerca de este taller</Link>
                <br />
                <Link to={'/registro/id'} className='buttonLink'>Inscribete ahora</Link>
              </div>
            </div>

          </>
        )}





      </div>
    </>
  );
};

export default TalleresDocente;