import { CaretLeft } from "phosphor-react";
import firebase from '../../../../services/firebase/firebase';
import { Link, useHistory, useParams } from "react-router-dom";
import { Avatar, Button } from "rsuite";
import { AuthContext } from "../../../../Contexts/auth";
import './styles.scss';
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";


export function OrdemDetails(){

  const {  user  } = useContext(AuthContext);
  const { id } = useParams();
  const history = useHistory();
  const [ordemId, setOrdemId] = useState({});
  const [orderDisponibility, setOrderDisponibility] = useState(false);

  useEffect(() => {
    async function loadOrdenId(){
     const ordem = await firebase.firestore().collection('services').doc(id)
      .get()
     
  
        let ordemId = {
  
        
       
        id:ordem.id,
        ano: ordem.data().ano,
        city: ordem.data().city,
        description:ordem.data().description,
        email:ordem.data().email,
        marca: ordem.data().marca,
        modelo: ordem.data().modelo,
        nome: ordem.data().nome,
        phoneNumber: ordem.data().phoneNumber,
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
 
   async function receiveOrder(){
    
    setOrderDisponibility(false);
    await firebase.firestore().collection('services').doc(id)
    .update({
      
      orderDisponibility: orderDisponibility,
      orderRegisterId: user?.uid
    }).then(()=>{
      console.log('Ordem Registrada com sucesso');
      toast.success('🚀 Ordem recebida com sucesso!');
      history.push(`/ordemEmpsuccess/${ordemId?.id}`);
    }).catch((error)=>{
        console.log(error);
    })
   }

  return(
      <div className="OrdemDetailsBody">
        <header className="ordemHeader">
        <Link to="/dashboard-emp" ><CaretLeft className="carret" size={22} color="#FAFAFA" weight="bold" /></Link>
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

            <Button   onClick={receiveOrder} className="btn" appearance="primary" color="orange">Pegar Ordem</Button>

        </section>  
      </div>
  )
}