import React from 'react';
import './global.scss';
import {BrowserRouter,Switch, Route}  from 'react-router-dom';
import { Home } from './pages/Home/Home';

import { LoginEmail } from './pages/LoginEmail/LoginEmail';
import { RecoverPassword } from './pages/LoginEmail/RecoverPassword';
import { EmailNotification } from './pages/LoginEmail/EmailNotification';
import { NewPassword } from './pages/LoginEmail/NewPassword';
import Question from './pages/Question/Question';
import { ClienteForm } from './pages/Cliente/CadastroCliente/ClienteForm';

import { AuthPageCli } from './pages/Cliente/AuthPageCli/auth';
import { AuthPageEmp } from './pages/Empresa/AuthPageEmp/auth';
import { redirect } from './pages/redirect/redirect';


function App() {
  return (
    <>
    <BrowserRouter>
 
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/authpagecli" component={AuthPageCli}/>
      <Route exact path="/authpageemp" component={AuthPageEmp}/>
      <Route exact path="/login_email" component={LoginEmail}/>
      <Route exact path="/recoverpassword" component={RecoverPassword}/>
      <Route exact path="/email-notification" component={EmailNotification}/>
      <Route exact path="/new_password" component={NewPassword}/>
      <Route exact path="/question" component={Question}/>
      <Route exact path="/cliente-form" component={ClienteForm}/>
      <Route exact path="/redirect" component={redirect}/>

    </Switch>
    
  </BrowserRouter>
      
    </>
  );
}

export default App;
