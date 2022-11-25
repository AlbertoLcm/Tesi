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
          <section>
            <h2>Horario</h2>
            <input type="checkbox" name="lun" id="" /> <label>Lunes: 9:00 - 11:00</label>
            <input type="checkbox" name="lun" id="" /> <label>Martes: 9:00 - 11:00</label>
            <input type="checkbox" name="lun" id="" /> <label>Miercoles: 9:00 - 11:00</label>
            <input type="checkbox" name="lun" id="" /> <label>Jueves: 9:00 - 11:00</label>
            <input type="checkbox" name="lun" id="" /> <label>Viernes: 9:00 - 11:00</label>
            <input type="checkbox" name="lun" id="" /> <label>Sabado: 9:00 - 11:00</label>
          </section>
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