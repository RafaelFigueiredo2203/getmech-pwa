import React, { useState, useContext } from 'react';
import './styles/loginemail.scss';

import Button from 'rsuite/Button';
import "rsuite/dist/rsuite.min.css";

import IconButton from "@material-ui/core/IconButton";

import Visibility from "@material-ui/icons/Visibility";
import InputAdornment from "@material-ui/core/InputAdornment";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import Input from "@material-ui/core/Input";

import secureLogin from '../../../assets/imgs/undraw_secure_login_pdn4.svg';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import firebase from '../../../services/firebase/firebase';
import { AuthContext } from '../../../Contexts/auth';
import { useHistory } from 'react-router-dom';

export function LoginEmailEmp(){

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });
  
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  
  const handlePasswordChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const [email, setEmail] =  useState();
 
  const history = useHistory();
  const { signInEmp, loadingAuth} = useContext(AuthContext);


  function handleSignIn(e){

    e.preventDefault();
    
    if(email !== '' && values.password !== ''){
      signInEmp(email, values.password)
    }
    history.push('./dashboard-emp');
}


  return (
    <div className="LoginEmailbody">
      <img src={secureLogin} className="secureLogin" alt="secureLogin" />

      <h3>Bem-Vindo</h3>

      <form onSubmit={handleSignIn}>
        <label>E-mail: </label>
        <input className="input" type="email" value={email} name="email" id="email" onChange={ (e) => setEmail(e.target.value)} />

        
        <label>Senha:</label>
      <Input className="input"
        type={values.showPassword ? "text" : "password"}
        onChange={handlePasswordChange("password")}
        value={values.password}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
            >
              {values.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        }
      />

        <Button type="submit"  className="enter">{loadingAuth ? 'Carregando...' : 'Entrar'}</Button>
      </form>

      <a href="/recoverpassword">Recuperar senha</a>
    </div>
  );
}