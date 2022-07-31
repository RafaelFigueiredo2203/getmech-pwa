
import './style.scss';
import enviar from '../../../assets/imgs/undraw_Letter_re_8m03 1.png';
import Button from 'rsuite/Button';
import "rsuite/dist/rsuite.min.css";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { Link, Redirect, useHistory } from "react-router-dom";
import firebase from '../../../services/firebase/firebase';
import { AuthContext } from "../../../Contexts/auth";
import { CaretLeft } from 'phosphor-react';

export function Ordem(){
  const [orderDisponibility, setOrderDisponibility] = useState(true);
  const [tipo, setTipo] = useState('');
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [description, setDescription] = useState('');
  const [state,setState] = useState('');
  const [city, setCity] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const history = useHistory();
  const [isBusy, setIsBusy] = useState(false);
  const { user } = useContext(AuthContext);

  async function handleSubmit ()  {
    setIsBusy(true);
    await  firebase.firestore().collection('services')
    .doc()
      .set({
        nome:user.nome,
        urlPhoto:user.urlPhoto,
        email:user.email,
        tipo:tipo,
        marca:marca,
        modelo:modelo,
        ano:ano,
        description:description,
        state:state,
        city:city,
        phoneNumber:phoneNumber.trim(),
        orderDisponibility:orderDisponibility
        
      })
     .then(() => {
       toast.success('🚀 Enviado com sucesso!');
       
        <Redirect to="/ordemSuccess" />
        history.push('/ordemSuccess');
        
        
      
       // ...
      })
      .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
   console.log(errorMessage);

      toast.error('⭕ erro');
        history.go(0);
        // ..
      });
     
      // ...
   
   
    
   
      
  }


  return(
    <div className="ordem">
      <header className="header">
      <Link to="/dashboard" ><CaretLeft className="carret" color="#000" size={28}/></Link>
        <h1>Ordem de Serviço</h1>
      </header>

<div className="body">
      <span>Lançe uma ordem de serviço para oficinas  próximas de você !</span>


    <form  className="form-ordem">

    <label >Tipo de veículo:</label>
          <select required defaultValue="" value={tipo} name="tipo" onChange={ (e) => setTipo(e.target.value)} >
          <option value="Selecione">Selecione</option>
          <option value="Carro">Carro</option>
            <option value="Moto">Moto</option>
            <option value="Caminhao">Caminhão </option>
            <option value="Onibus">Ônibus</option>
            </select>

            <label >Marca do veículo:</label>
            <input required type="text" value={marca}  name="marca" id="marca" onChange={(e) => setMarca(e.target.value)} placeholder="Ex: Chevrolet, Fiat, Ford, etc." />

            <label >Modelo do veículo:</label>
            <input  required type="text" value={modelo} name="modelo" id="modelo" onChange={(e) => setModelo(e.target.value)} placeholder="Ex: Kadett 1.4, Uno 1.0,etc." />

    
            <label >Ano:</label>
            <input required type="number" value={ano} onChange={(e) => setAno(e.target.value)} placeholder="Ex: 2005" />

            <label >Descreva o que está acontecendo:</label>
            <textarea  required className="textarea" type="textarea" value={description}  onChange={(e) => setDescription(e.target.value)} placeholder="Ex: Meu carro não está ligando e está com um som estranho na bateria !"  />

            <label >Cidade:</label>
          <input required type="text" value={city} onChange={(e) => setCity(e.target.value)}   />

          <label >Estado:</label>
          <select required  defaultValue="" value={state} onChange={(e) => setState(e.target.value)}  >
          <option value="Selecione">Selecione</option>
            <option value="AC">AC</option>
            <option value="AP">AP</option>
            <option value="AM">AM </option>
            <option value="PA">PA </option>
            <option value="RO">RO</option>
            <option value="RR">RR</option>
            <option value="TO">TO</option>
            <option value="AL">AL</option>
            <option value="BA">BA</option>
            <option value="CE">CE</option>
            <option value="MA">MA</option>
            <option value="PB">PB</option>
            <option value="PE">PE</option>
            <option value="PI">PI</option>
            <option value="RN">RN</option>
            <option value="SE">SE</option>
            <option value="ES">ES</option>
            <option value="MG">MG</option>
            <option value="RJ">RJ</option>
            <option value="SP" selected>SP</option>
            <option value="PR">PR</option>
            <option value="RS">RS</option>
            <option value="SC">SC</option>
            <option value="DF">DF</option>
            <option value="GO">GO</option>
            <option value="MT">MT</option>
            <option value="MS">MS</option>
             </select>

            <label >Seu número para contato:</label>
            <input  required type="phone" value={phoneNumber.trim()} onChange={(e) => setPhoneNumber(e.target.value.trim())} placeholder="Ex:14996112228" />


            <img src={enviar} alt="" />
            <Button  type="submit" disabled={isBusy} onClick={ () => {if(modelo || marca && ano && tipo && description && city && state && phoneNumber  && '') {
              handleSubmit();
              history.push('/ordemSuccess')
            }
            else{
              toast.error('preencha todos os dados')
            }
            }}  className="btn" color="orange" appearance="primary">Enviar</Button>
    </form>

      </div>
    </div>
  )
}