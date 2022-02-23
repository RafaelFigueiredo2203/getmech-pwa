import React from 'react';
import Enterimg from '../../../assets/imgs/undraw_Login_re_4vu2.svg'; 
import './auth.scss';
import GoogleLogo from '../../../assets/imgs/icons8-google-logo 1.svg';
import FacebookLogo from '../../../assets/imgs/facebook 1.svg';


export function AuthPageEmp(){


 

  return(
    <div className="AuthBody">
      <img src={Enterimg} className="Enterimg" alt="Enterimg" />

      <h3>Entre com</h3>

      <button className="google"  >
       <img src={GoogleLogo}  alt="GoogleLogo"/>
      
       Google
       </button>
       <button className="facebook"  >
       <img src={FacebookLogo} className="FacebookLogo" alt="FacebookLogo"/>  
      
       Facebook
       </button>

       <a href="/login_email"><button className="Email_senha" >
      Email/Senha
       </button></a>

       <h3>Ou</h3>

       <button  className="cadastre-se"  >
      Cadastre-se
       </button>
    </div>
  );
}