import { CaretLeft } from "phosphor-react";
import { useContext, useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { Avatar, Button } from "rsuite";
import firebase from '../../../../services/firebase/firebase';
import OrdemDeatilsPhoto  from '../../../../assets/imgs/undraw_ordemdetails.svg';
import Tel from '../../../../assets/imgs/tel.svg';
import Zap from '../../../../assets/imgs/zap.svg';
import Email from '../../../../assets/imgs/email.svg';
import './styles.scss';
import { AuthContext } from "../../../../Contexts/auth";

export function HistoricoOptionEmp(){
  const { id } = useParams();
  const history = useHistory();
  const [ordemId, setOrdemId] = useState({});
  const {  user  } = useContext(AuthContext);

  useEffect(() => {
    async function loadOrdenId(){
     const ordem = await firebase.firestore().collection('services').doc(id)
      .get()
     
  
        let ordemId = {
  
        
       
        id:ordem.id,
        ano: ordem.data().ano,
        city: ordem.data().city,
        description:ordem.data().description,
        email:ordem.data().email.replace(/\s/g, ''),
        marca: ordem.data().marca,
        modelo: ordem.data().modelo,
        nome: ordem.data().nome,
        phoneNumber: ordem.data().phoneNumber.replace(/\s/g, ''),
        state: ordem.data().state,
        tipo: ordem.data().tipo,
        urlPhoto: ordem.data().urlPhoto,
        }
      
     setOrdemId(ordemId);
   
      }

      loadOrdenId();
      localStorage.setItem('ordemId', JSON.stringify(ordemId));
      console.log(ordemId);
      console.log(ordemId);
  },[]);
 
   

  return(
      <div className="OrdemDetails">
        <header className="ordemHeader">
        <Link to="/historyemp" ><CaretLeft className="carret" size={22} color="#000" weight="bold" /></Link>
          <span className="spanHader">Detalhes</span>
        </header>

        <section className="ordemInfo">
        <div className="header">
            <Avatar circle size="md"  src={ordemId?.urlPhoto} alt="@superman66" />
             <span>{ordemId?.nome}</span>
            </div>


            <span className="ordemData">Veículo: {ordemId?.tipo}</span> 
            <span className="ordemData">Marca: {ordemId?.marca} </span> 
            <span className="ordemData">Modelo: {ordemId?.modelo}</span>
            <span className="ordemData">Ano: {ordemId?.ano}</span>
            <span className="ordemData">Descrição: {ordemId?.description}</span>


            <section className="line"></section>

           <img className="OrdemDeatilsPhoto" src={OrdemDeatilsPhoto} alt="OrdemDeatilsPhoto" />

           <span className="spanStrong">Entrar em contato por :</span>
         
           <div className="rowDiv">
             <a href={`tel:+55${ordemId.phoneNumber}`}> <div className="columnDiv">
                <img src={Tel} alt="tel" />
                <span>Telefone</span>
              </div>
              </a>
              
              <a href={`https://wa.me/55${ordemId?.phoneNumber}?text=Olá,%20aqui%20é%20a(o)%20${user?.nome},%20vi%20sua%20ordem%20no%20site%20do%20getMech,%20seu%20veículo%20está%20com%20problemas?%20Em%20que%20posso%20ajudar?!`}> 
               <div className="columnDiv">
                <img src={Zap} alt="zap" />
                <span>WhatsApp</span>
              </div>
              </a>
              

              <a href={`mailto:${ordemId?.email}`}><div className="columnDiv" >
                <img src={Email} alt="email" />
                <span>E-mail</span>
             
           </div>
           </a>
           </div>

        </section>  
        <Button   onClick={()=> {history.push('/historyemp')}} className="btn" appearance="primary" color="orange">Voltar</Button>
      </div>
  )
}