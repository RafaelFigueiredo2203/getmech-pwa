import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './global.scss';
import {BrowserRouter}  from 'react-router-dom';
import Routes from './routes';

import AuthProvider from './Contexts/auth';
import { ToastContainer } from 'react-toastify';
import "rsuite/dist/rsuite.min.css";
import PrivateRoutes from './routes/PrivateRoutes';



function App() {
  return (
    <>

    <AuthProvider>
        <BrowserRouter>
        <ToastContainer autoClose={3000}/>
           <Routes/>
           <PrivateRoutes/>
      </BrowserRouter>
  </AuthProvider>
      
    </>
  );
}

export default App;
