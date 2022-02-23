import React from 'react';
import './styles/loginemail.scss';

import secureLogin from '../../assets/imgs/undraw_secure_login_pdn4.svg';

export function LoginEmail(){
  return (
    <div className="LoginEmailbody">
      <img src={secureLogin} className="secureLogin" alt="secureLogin" />

      <h3>Bem-Vindo</h3>

      <form action="">
        <label>E-mail: </label>
        <input type="text" name="" id="" />

        
        <label>Senha:</label>
        <input type="text" name="" id="" />

        <button type="submit" className="enter">Entrar</button>
      </form>

      <a href="/recoverpassword">Recuperar senha</a>
    </div>
  );
}