import React from 'react';
import './App.css';
import AuthProvider from "./auth/AuthProvider";
import AppRouter from "./routers/AppRouter";
import Sidebar from './components/Sidebar';

function App() {
  return (
    <>
    <Sidebar />
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </>
  );
}

export default App;
