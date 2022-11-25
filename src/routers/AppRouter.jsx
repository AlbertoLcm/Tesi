import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../helpers/routes";
import Login from "../pages/Login";
import Talleres from "../pages/Talleres";
import TalleresDocente from "../pages/TalleresDocente";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import Taller from "../pages/Taller";
import Registro from "../pages/Registro";
import LoginDocente from "../pages/LoginDocente"

function AppRouter() {
  return (
    <div className='App'>
      <Routes>
        <Route path={routes.home} element={
          <PrivateRoute>
            <Talleres />
          </PrivateRoute>
        } />
        <Route path={routes.talleresdocente} element={
          <PublicRoute>
            <TalleresDocente />
          </PublicRoute>
        } />
        <Route path={routes.login} element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        } />
        <Route path={routes.logindocente} element={
          <PublicRoute>
            <LoginDocente />
          </PublicRoute>
        } />
        <Route path={'/registro/:id'} element={
          <PrivateRoute>
            <Registro />
          </PrivateRoute>
        } />

         <Route path={'/taller/:id'} element={
          <Taller />
        } />
        
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default AppRouter;
