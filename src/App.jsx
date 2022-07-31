import React, { useContext, useEffect } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './global.css';
import {BrowserRouter}  from 'react-router-dom';
import Routes from './routes';

import AuthProvider, { AuthContext } from './Contexts/auth';
import { ToastContainer } from 'react-toastify';
import 'rsuite/styles/index.less';
import 'react-modern-drawer/dist/index.css'




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
