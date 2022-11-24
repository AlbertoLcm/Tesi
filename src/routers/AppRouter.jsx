import React from "react";
import { Route, Routes } from "react-router-dom";
import routes from "../helpers/routes";
import Home from "../pages/Home";

function AppRouter() {
  return (
    <div className='App'>
      <Routes>
        <Route path={routes.home} element={
          <Home />
        } />

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </div>
  );
}

export default AppRouter;
