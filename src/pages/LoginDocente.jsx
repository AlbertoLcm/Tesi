import React, { useRef, useState } from "react";
import routes from "../helpers/routes";
import { Link, useLocation } from "react-router-dom";
import useAuth from "../auth/useAuth";
import "../stylesheets/Login.css";


function LoginDocente() {
  const { login } = useAuth();
  const location = useLocation();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const alertRef = useRef();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const actionLogear = (e) => {
    e.preventDefault(); //esto previene que el form se mande.
    login(userCredentials, location.state, alertRef)
  };

  return (
    <div className="contImagen">
      
      <div className="contDegradado">
        <div className="contLogin">
          <div className="login">
            <h2>Bienvenido Docente</h2>
            <form onSubmit={actionLogear} method="POST" className="form-group">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Correo o Matricula"
                  onChange={handleChange}
                  value={userCredentials.email}
                  required
                />
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Contraseña"
                  onChange={handleChange}
                  value={userCredentials.password}
                  required
                />
              <Link to={routes.talleresdocente} className="boton1">
                Ingresar
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginDocente;
