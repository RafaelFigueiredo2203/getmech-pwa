import { useContext, useEffect, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';


import { AuthContext } from '../../../Contexts/auth';
import MenuOfcEmp from '../components/Menu/MenuOfc';



export  function Dashboardemp(){

  const history = useHistory();
 const {  loadOrdens, user, ordem } = useContext(AuthContext);

  useEffect(()=>{
    

    function load(){
     
      if(typeof user.cnpj === 'undefined'){
        history.push('/dashboard');
      }

    }
    
    load();
    loadOrdens();
  }, [history, user.cnpj]);

  return(
    <div>
    
      

    
       <MenuOfcEmp/>
       
       {ordem.map((ordem)=>{
        return(
          <li key={ordem.id} >
            <span>Titulo: {ordem.modelo} </span> <br/>
            <span>Autor: {ordem.nome} </span> <br/> <br/>
          </li>
        )
      })}
    
     
    </div>
  )
}