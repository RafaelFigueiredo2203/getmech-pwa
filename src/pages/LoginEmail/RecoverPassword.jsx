import React from 'react';
import './styles/recoverPassword.scss';
import forgotImg from '../../assets/imgs/undraw_forgot_password_gi2d.svg';
import { useHistory } from 'react-router-dom';


export function RecoverPassword(){
  const history = useHistory();

  return(
    <div className="forgotPassword">
        <header className="recoverHeader">
          <h3>Recuperar Senha</h3>
        </header>

        <img src={forgotImg} className="forgotImg" alt="forgotImg" />

        <h2>Digite seu e-mail:</h2>

        <form action="">
          <input type="e-mail" />
          
          <button onClick={() => {
            history.push('/email-notification')
          }} type="submit" className="Enviar">
        
           Enviar
           
           </button> 
          
        </form>
    </div>
  );
}