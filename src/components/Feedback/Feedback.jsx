import { CaretLeft } from "phosphor-react";
import emailjs from 'emailjs-com';
import { Link, Redirect, useHistory } from "react-router-dom";
import { Button } from "rsuite";
import firebase from '../../../src/services/firebase/firebase';
import './styles.scss';
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../Contexts/auth";
import { toast } from "react-toastify";

require('dotenv').config();

export function Feedback(){
  
  const {  user } = useContext(AuthContext);
  const history = useHistory();
  const [mensagem,setMensagem] = useState("");
  const [isBusy, setIsBusy] = useState(false);

  async function handleSubmit ()  {
    setIsBusy(true);
    await  firebase.firestore().collection('feedbacks')
    .doc()
      .set({
        mensagem:mensagem,
        autorName: user?.nome,
        autorEmail:user?.email
      })
     .then(() => {
       toast.success('🚀 Enviado com sucesso!');
       
        <Redirect to="/dashboard-emp" />
        history.push('/dashboard-emp');
        
        
      
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
    <div className="divFeedback">
      <header className="headerFeedback">
      <Link to="/dashboard-emp" ><CaretLeft className="carret" color="#000" size={28}/></Link>
        <span>Feedback</span>
      </header>
      

      <h1>Nos envie um problema, ideia ou <br/> pergunta sobre o getMech.</h1>
      
      <input   onChange={(e) => setMensagem(e.target.value)} name="message" placeholder="Ex: O app esta com erro no login."/>
      
      <Button onClick={handleSubmit} type="submit" size="lg" appearance="primary" color="orange">Enviar</Button>
      

      
    </div>
  );
}