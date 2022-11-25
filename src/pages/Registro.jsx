import React from "react";
import Sidebar from "../components/Sidebar";

const Registro = () => {
  return (
    <>
    <Sidebar />
      <header>
        <h1>Tesi</h1>
      </header>
      <div id="ContenedorRegistro">
        <form>
          <label>Horario</label>
          <input type="text" />
          <label>Kardex</label>
          <input type="file" />
          <label>Tira de materias</label>
          <input type="file" />
          <label>Credencial institucional</label>
          <input type="file" />
          <button>Registrarse</button>
        </form>
      </div>
    </>
  );
}

export default Registro;