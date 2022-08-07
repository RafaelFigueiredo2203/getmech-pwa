import { CaretLeft, GithubLogo, Student } from "phosphor-react";
import { Link, useHistory } from "react-router-dom";
import { Button } from "rsuite";
import logo from '../../assets/imgs/Captura_de_tela_2021-08-05_201404-removebg-preview 2.svg';
import Githublogo from '../../assets/imgs/Octocat 1.svg';
import './styles.scss';

export function Sobre(){

  const history = useHistory();

  return(
    <div className="bodySobre">
       <header className="headerSobre">
      <Link to="/dashboard-emp" ><CaretLeft className="carret" color="#000" size={28}/></Link>
        <span className="spanHaderSobre">Sobre</span>
      </header>

     <img src={logo} alt="getMechlogo" />

     <span className="spanSobreBody">
     getMech é uma aplicação web PWA(Progressive Web App), que são websites que se comportam como se fossem 
     apps mobile nativos, além disso, é possível instalar a aplicação no seu dispositivo sem ocupar muita memória 
     como apps nativos ocupam.
     
<br/>
  
     O objetivo desse projeto é auxiliar motoristas na busca simples e rápida de oficinas mecânicas  próximas a sua localidade,
      é possível também ficar visíveis para essas oficinas com as ordens de serviços geradas quando o motorista utiliza o app.
       A empresa, pode pegar essas ordens e entrar em contato com seus clientes que necessitam de seus serviços na sua cidade.
     
<br/>
     
     getMech foi um projeto construído durante o Trabalho de Graduação dos alunos, Rafael Figueiredo Junior, Matheus Nardo Ventura, 
      Gabriel Mamede dos Santos, na FATEC - Ourinhos/SP(Faculdade de Tecnologia de Ourinhos-SP).
      </span>


     <a target="blank" href="https://github.com/RafaelFigueiredo2203/getmech-pwa"> <Button  className="gitbtn">
      Repositório do projeto <img src={Githublogo}/> </Button></a>

      <a target="blank" href="https://www.cps.sp.gov.br/fatecs/fatec-ourinhos/"> 
      <Button className="fatecbtn">Sobre a FATEC-Ourinhos <Student size={32} color="#000"/> </Button></a>

   
      <footer className="sobre">
      © 2022  getMech.
      </footer>
    </div>
  );
}