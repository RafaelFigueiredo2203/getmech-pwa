import React from 'react';
import Enterimg from '../../../assets/imgs/undraw_Login_re_4vu2.svg'; 
import './auth.scss';

import Button from 'rsuite/Button';

export function AuthPageEmp(){


 

  return(
    <div className="AuthBody">
      <img src={Enterimg} className="Enterimg" alt="Enterimg" />

      <h3>Entre com</h3>

    
       <a href="/login_emailemp"><button className="Email_senha" >
      Email/Senha
       </button></a>

       <h3>Ou</h3>

       <a href="/emp-form"> <button  className="cadastre-se"  >
      Cadastre-se
       </button></a>
    </div>
  );
}