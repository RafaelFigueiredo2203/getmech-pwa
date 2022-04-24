
import { Switch } from 'react-router-dom';
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
    <Route exact path="/dashboard" component={Dashboard} isPrivate/>
    <Route exact path="/ordem" component={Ordem} isPrivate/>
    <Route exact path="/ordemSuccess" component={Success} isPrivate/>

  </Switch>
  )
}