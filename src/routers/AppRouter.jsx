import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../helpers/routes";
import Home from "../pages/Home";
import Startup from "../pages/Startup";

function AppRouter() {
  return (
    <div className='App'>
      <Routes>
        <Route path={routes.home} element={
          <Startup />
        } />

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default AppRouter;
