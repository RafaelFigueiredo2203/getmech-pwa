import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './global.scss';
import {BrowserRouter}  from 'react-router-dom';
import Routes from './routes';
import AuthProvider from './Contexts/auth';
import { ToastContainer } from 'react-toastify';
import "rsuite/dist/rsuite.min.css";


function App() {
  return (
    <>

    <AuthProvider>
        <BrowserRouter>
        <ToastContainer autoClose={3000}/>
           <Routes/>
        
      </BrowserRouter>
  </AuthProvider>
      
    </>
  );
}

export default App;
