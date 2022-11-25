import React from "react";
import "../stylesheets/Startup.css"
import TesiLogo from "../images/TesiLogo.png"
import EdoMexLogo from "../images/EdoMexLogo.gif"
import TesiFull from "../images/TesiFull.jpg"

function Startup() {
    return (
        <>
            <header id="hderPagInicial">
                <div className="contImgLogoHd">
                    <img src={TesiLogo} alt="Image not fund" />
                </div>
                <div className="contImgLogoHd">
                    <img src={EdoMexLogo} alt="Image not fund" />
                </div>
            </header>
            <div className="contContactos">
                <section className="contContacto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-phone" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2" />
                    </svg>
                </section>

                <section className="contContacto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-mailbox" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M10 21v-6.5a3.5 3.5 0 0 0 -7 0v6.5h18v-6a4 4 0 0 0 -4 -4h-10.5" />
                        <path d="M12 11v-8h4l2 2l-2 2h-4" />
                        <path d="M6 15h1" />
                    </svg>
                </section>

                <section className="contContacto">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-map-pin" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <circle cx="12" cy="11" r="3" />
                        <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                </section>
            </div>
            <div className="contPagInicial">
                <div className="contFullImg">
                    <center><img src={TesiFull} alt="si bueno" /></center>
                </div>
                {/* Aqui va un mapeado de las noticias*/}
                {/* ejemplo de tipos de noticias*/}
                <div className="tarjNoticias">
                    <h2>Titulo de la noticia</h2>
                    <p>Tecto que define la noticia, a porder ser corto</p>
                </div>
                <div className="tarjNoticias">
                    <h2>Titulo de la noticia</h2>
                    <p>Tecto que define la noticia, a porder ser corto</p>
                </div>
                <div className="tarjNoticias">
                    <h2>Titulo de la noticia</h2>
                    <p>Tecto que define la noticia, a porder ser corto</p>
                </div>
            </div>
        </>
    );
}

export default Startup;