import { useContext, useEffect, useLayoutEffect } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './styles.scss';
import { Avatar, AvatarGroup } from 'rsuite';
import { AuthContext } from '../../../Contexts/auth';
import MenuOfcEmp from '../components/Menu/MenuOfc';
import Button from 'rsuite/Button';
import notOrdem from '../../../assets/imgs/undraw_empty_re_opql 1.svg'
import { Menu } from '../../../components/MenuRsuit/Menu';



export  function Dashboardemp(){
  

  useEffect(()=>{
    loadPerfilEmp();
  },[]);

  const id = useParams();
  const history = useHistory();
  const {  loadPerfilEmp, loadOrdens, user, ordem } = useContext(AuthContext);

  useEffect(()=>{
    

    function load(){
     
      if(typeof user.cnpj === 'undefined'){
        history.push('/dashboard');
      }

    }
    
    load();
    loadOrdens();
    console.log(ordem);
  }, [history, user.cnpj]);

  return(
    <div className="bodydash">
        
    
      <Menu/>

    
       
         
       
     
       {ordem?.length === 0 ? 

       <div className="empt-ordem">
        <img className="img" src={notOrdem} alt="" />

        <span>
        Ops! Não há clientes necessitando de serviços na sua área por enquanto.
        </span>
        </div>

        :

        <div className="notempt-ordem">

          <strong className="title ">Clientes na sua cidade</strong>


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

            <Button onClick={()=> {history.push(`/ordemdetails/${ordem.id}`)}} className="btn" appearance="primary" color="orange">Detalhes</Button>

          </div>
        )
      })}

        </div>
    }
     
    
   
    </div>
  )
}