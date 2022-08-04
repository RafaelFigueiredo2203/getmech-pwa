import { useContext, useEffect, useLayoutEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './styles.scss';
import { Avatar, AvatarGroup } from 'rsuite';
import { AuthContext } from '../../../Contexts/auth';

import Button from 'rsuite/Button';
import notOrdem from '../../../assets/imgs/undraw_empty_re_opql 1.svg'
import { Menu } from '../../../components/MenuRsuit/Menu';
import { CaretLeft } from 'phosphor-react';



export  function HistoricoCli(){
  

  
  const id = useParams();
  const history = useHistory();
  const {  loadOrdensHistoryClient, user, ordem } = useContext(AuthContext);

  useEffect(()=>{
  
    loadOrdensHistoryClient();
    console.log(ordem);
  }, []);

  return(
    <div className="bodyHist">
        
  
 
      <header className="headerPerfil">
      <Link to="/dashboard" ><CaretLeft className="carretPer" size={28} color='#000' /></Link>
          <span className="spanHaderPer">Histórico de Ordens</span>
      </header>

       {ordem?.length === 0 ? 

       <div className="empt-ordem">

        <img className="img" src={notOrdem} alt="" />

        <span>
        Ops! Não há ordens registradas em seu nome até agora!.
        </span>
        </div>

        :

        <div className="notempt-ordem">

        


       {ordem.map((ordem)=>{
        return(
         
          <div className="ordem-div" key={ordem.id} >
            <div className="header">
            <Avatar circle size="md"  src={ordem.urlPhoto} alt="@superman66" />
             <span>{ordem.nome}</span>
            </div>


            <span className="ordemData">Veículo: {ordem.tipo} </span> 
            <span className="ordemData">Marca: {ordem.marca} </span> 
            <span className="ordemData">Modelo: {ordem.modelo}</span>

            <Button onClick={()=> {history.push(`/historydetails/${ordem.id}`)}} className="btn" appearance="primary" color="orange">Opções</Button>

          </div>
        )
      })}

        </div>
    }
     
    
   
    </div>
  )
}