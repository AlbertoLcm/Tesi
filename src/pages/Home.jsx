import React from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import '../stylesheets/Home.css';

function Home() {
  return (
    <>
      <Sidebar />
      <header>
        <h1>Tesi</h1>
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