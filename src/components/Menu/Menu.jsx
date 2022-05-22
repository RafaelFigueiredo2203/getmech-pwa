import * as React from "react";
import {Door, User, ClockCounterClockwise, ChatTeardropDots,ProjectorScreenChart} from "phosphor-react";
import { useContext  } from 'react';
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

        <div className="optionsMenu">

        <Button appearance="primary" color="orange" className="buttonMenu">
        <User className="UserIcon" size={20} color="#000000" weight="duotone" />
        <span>Perfil</span>
        </Button>

        <Button appearance="primary" color="orange" className="buttonMenu">
        <ClockCounterClockwise size={20} color="#050505" weight="duotone" />
        <span>Histórico</span>
        </Button>
        
        <Button appearance="primary" color="orange" className="buttonMenu">
        <ChatTeardropDots size={20} color="#050505" weight="duotone" />
        <span>Feedback</span>
        </Button>
        
        <Button appearance="primary" color="orange" className="buttonMenu">
        <ProjectorScreenChart size={20} color="#050505" weight="duotone" />
        <span>Sobre</span>
        </Button>
        
        

        </div>
      <footer>
      <Button className="exitBtn" color="orange" appearance="primary" onClick={ () => signOut() }>
      <Door className="door" size={20} color="#f5f5f5" weight="bold" />

        Sair
        
        </Button>
      
      </footer>
      </div>
    </div>
  );
};
