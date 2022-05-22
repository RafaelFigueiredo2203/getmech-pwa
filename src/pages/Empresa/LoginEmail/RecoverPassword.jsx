import React, {useContext, useEffect, useState} from 'react';
import './styles/recoverPassword.scss';
import forgotImg from '../../../assets/imgs/undraw_forgot_password_gi2d.svg';
import { Redirect, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/auth';
import firebase from '../../../services/firebase/firebase';
import { toast } from 'react-toastify';


export function RecoverPassword(){
  const history = useHistory();
  const [email, setEmail]  = useState('');
  const { user} = useContext(AuthContext);
  const [isBusy, setIsBusy] = useState(false);



    function handleRecovery(){
      setIsBusy(true);
   firebase.auth().sendPasswordResetEmail(email);
   toast.success('✅ E-mail enviado com sucesso');
   setTimeout(50000);
   history.push('./email-notification');
 
}


   return(
    <div className="forgotPassword">
        <header className="recoverHeader">
          <h3>Recuperar Senha</h3>
        </header>

        <img src={forgotImg} className="forgotImg" alt="forgotImg" />

        <h2>Digite seu e-mail:</h2>

        <form onSubmit={handleRecovery}>
          <input type="e-mail"  value={email} name="email" id="email" onChange={ (e) => setEmail(e.target.value)} required  />
          
          <button type="submit"  disabled={isBusy}  className="Enviar">
        
           Enviar
           
           </button> 
          
        </form>
    </div>
  );
}