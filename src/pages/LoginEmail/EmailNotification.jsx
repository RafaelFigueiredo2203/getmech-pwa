import React from 'react';
import './styles/emailnotification.scss';
import emailImg from '../../assets/imgs/undraw_Mail_sent_re_0ofv.svg';
import { useHistory } from 'react-router';

export function EmailNotification(){

    const history = useHistory();

  return(
    <div className="email-notification">
      <header className="enotifi">
          <h3>Recuperar Senha</h3>
        </header>

        <img src={emailImg} className="email "alt="emailImg" />

        <h2>Uma mensagem de passo a passo para redefinição , foi enviada para o email digitado.</h2>

        <button className="Voltar" onClick={() => {history.push('/login_email')}}>Voltar</button>
    </div>
  );
}