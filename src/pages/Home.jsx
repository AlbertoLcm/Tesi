import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import '../stylesheets/Home.css';
import tesi from "../images/tesi.png";

function Home() {
  return (
    <>
      <Sidebar />
      <header>
        <img src={tesi} alt="logo" />
      </header>
      <div id="ContenedorHome">
        <section className="">
          <Link to={'/talleres'} className="link">Talleres</Link>
        </section>
      </div>
    </>
  );
}

export default Home;