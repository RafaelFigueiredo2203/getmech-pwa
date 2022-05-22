
import { Redirect, Switch } from 'react-router-dom';
import Route from './Route';

import { Home } from '../pages/Home/Home';


import Question from '../pages/Question/Question';
import { ClienteForm } from '../pages/Cliente/CadastroCliente/ClienteForm';

import { AuthPageCli } from '../pages/Cliente/AuthPageCli/auth';
import { AuthPageEmp } from '../pages/Empresa/AuthPageEmp/auth';
import { Dashboard } from '../pages/Cliente/Dashboard/Dashboard';
import { RecoverPassword } from '../pages/Cliente/LoginEmail/RecoverPassword';
import { EmailNotification } from '../pages/Cliente/LoginEmail/EmailNotification';
import { LoginEmail } from '../pages/Cliente/LoginEmail/LoginEmail';
import { NewPassword } from '../pages/Cliente/LoginEmail/NewPassword';
import { Ordem } from '../pages/Cliente/Ordem/Ordem';
import Success from '../pages/Cliente/Ordem/Success';
import { LoginEmailEmp } from '../pages/Empresa/LoginEmail/LoginEmail';
import { EmpresaForm } from '../pages/Empresa/CadastroEmp/EmpresaForm';
import { Dashboardemp } from '../pages/Empresa/Dashborad/Dashboardemp';
import { AuthContext } from '../Contexts/auth';
import { Component, useContext } from 'react';




export default function Routes(){

  

  

  return(
    <Switch>
    <Route exact path="/" component={Home}/>
    <Route exact path="/authpagecli" component={AuthPageCli}/>
    <Route exact path="/authpageemp" component={AuthPageEmp}/>
    <Route exact path="/login_email" component={LoginEmail}/>
    <Route exact path="/recoverpassword" component={RecoverPassword}/>
    <Route exact path="/email-notification" component={EmailNotification}/>
    <Route exact path="/new_password" component={NewPassword}/>
    <Route exact path="/question" component={Question}/>
    <Route exact path="/cliente-form" component={ClienteForm} />
    <Route exact path="/dashboard" component={Dashboard} isPrivateUser />
    <Route exact path="/ordem" component={Ordem} isPrivateUser />
    <Route exact path="/ordemSuccess" component={Success}  isPrivateUser />

    

    <Route exact path="/login_emailemp" component={LoginEmailEmp}/>
    <Route exact  path="/dashboard-emp" component={Dashboardemp} isPrivateUser  />

    

    
  </Switch>

  
  )
}