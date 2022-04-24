import * as React from "react";

import { useContext, useState,  } from 'react';
import  firebase  from '../../services/firebase/firebase';
import './styles.css';
import { AuthContext } from '../.././Contexts/auth';

import Button from 'rsuite/Button';
import "rsuite/dist/rsuite.min.css";

  const isMenuOpen = true;


export const Menu = ({ isMenuOpen }: IMenuProps) => {
   
  const { user } = useContext(AuthContext);
  
  const { signOut } = useContext(AuthContext);





 

  return (
    <div className={`app-menu ${isMenuOpen ? "menu-open" : ""}`} >
      <header className="MenuHeader">
      <img src={user.urlPhoto} className="foto" alt="" />
   
      <h2  className="Nome" >{user.nome} </h2>
      </header>

      <div className="bodyMenu">
      <footer>
      <Button color="orange" appearance="primary" onClick={ () => signOut() }>Fazer logout</Button>
      
      </footer>
      </div>
    </div>
  );
};
