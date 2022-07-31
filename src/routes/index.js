
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
import { OrdemDetails } from '../pages/Empresa/Ordem/OrdemDetails/OrdemDetails';
import { OrdemSucccess } from '../pages/Empresa/Ordem/OrdemSuccess/OrdemSuccess';
import { Perfil } from '../pages/Empresa/Perfil/Perfil';

import { EditarPerfil } from '../pages/Empresa/Perfil/EditarPerfil/EditarPerfil';
import { Feedback } from '../components/Feedback/Feedback';
import { EditarPerfilClient } from '../pages/Cliente/Perfil/EditarPerfil/EditarPerfil';
import { PerfilClient } from '../pages/Cliente/Perfil/Perfil';
import { PerfilClientGoogle } from '../pages/Cliente/Perfil/PerfilGoogle';





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
    <Route exact  path="/perfilClient" component={PerfilClient} isPrivateUser  />
    <Route exact  path="/EditPerfilClient" component={EditarPerfilClient} isPrivateUser  />
     <Route exact  path="/perfilClientGoogle" component={PerfilClientGoogle} isPrivateUser  />
    
    
    <Route exact path="/emp-form" component={EmpresaForm} />
    <Route exact path="/login_emailemp" component={LoginEmailEmp}/>
    <Route exact  path="/dashboard-emp" component={Dashboardemp} isPrivateUser  />
    <Route exact  path="/ordemdetails/:id" component={OrdemDetails} isPrivateUser  />
    <Route exact  path="/ordemEmpsuccess/:id" component={OrdemSucccess} isPrivateUser  />
    <Route exact  path="/perfilEmp" component={Perfil} isPrivateUser  />
    <Route exact  path="/EditPerfilEmp" component={EditarPerfil} isPrivateUser  />
    <Route exact  path="/feedback" component={Feedback} isPrivateUser  />
    

    
  </Switch>

  
  )
}