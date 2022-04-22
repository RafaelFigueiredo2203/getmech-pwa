import React from 'react';
import './styles/newpassword.scss';
import forgotImg from '../../../assets/imgs/undraw_forgot_password_gi2d.svg';
import { useHistory } from 'react-router';

export function NewPassword(){

    const history = useHistory();

  return(
    <div className="newPassBody">
     <header className="headerNewPass">
          <h3>Recuperar Senha</h3>
        </header>

        <img src={forgotImg} className="forgotImg" alt="forgotImg" />

        <h2>Digite sua nova senha:</h2>

        <form action="">
        <input type="password"/>

        <label >Confirmar senha:</label>
        <input type="password"/>

        <button type="submit" onClick={() => {history.push('/login_email')}}className="Enviar">Enviar</button>
        </form>

    </div>
  );
}