import React from "react";
import Sidebar from "../components/Sidebar";

const Talleres = () => {
  return (
    <>
      <Sidebar />
      <div id="ContenedorTalleres">
        <h1>Talleres</h1>

        <div id="Talleres">
          <div className="targetaTaller">
            <h2>Ajedrez</h2>
          </div>
        </div>

        <div id="Talleres">
          <div className="targetaTaller">
            <h2>Ajedrez</h2>
          </div>
        </div>

        <div id="Talleres">
          <div className="targetaTaller">
            <h2>Ajedrez</h2>
          </div>
        </div>

      </div>
    </>
  );
};

export default Talleres;