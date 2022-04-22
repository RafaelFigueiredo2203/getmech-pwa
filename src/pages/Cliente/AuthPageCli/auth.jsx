import React, { useContext } from 'react';
import Enterimg from '../../../assets/imgs/undraw_Login_re_4vu2.svg'; 
import './auth.scss';
import GoogleLogo from '../../../assets/imgs/icons8-google-logo 1.svg';
import FacebookLogo from '../../../assets/imgs/facebook 1.svg';
import { Redirect, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/auth';

export function AuthPageCli(){

  const history = useHistory();
  const {user, SignGoogle, SignFacebook } = useContext(AuthContext);
 
  async  function LoginGoogle(){
    if(!user){
      await SignGoogle()
    }
  
   
 }

 
  return(
    <div className="AuthBody">
      <img src={Enterimg} className="Enterimg" alt="Enterimg" />

      <h3>Entre com</h3>

      <button className="google" onClick={LoginGoogle}  >
       <img src={GoogleLogo}  alt="GoogleLogo"/>
      
       Google
       </button>
       

       <a href="/login_email"><button className="Email_senha" >
      Email/Senha
       </button></a>

       <h3>Ou</h3>

       <button onClick={() => {history.push('/cliente-form')}} className="cadastre-se"  >
      Cadastre-se
       </button>
    </div>
  );
}