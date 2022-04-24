 import success from '../../../assets/imgs/undraw_order_confirmed_re_g0if 1.svg';
 import './style.scss';
 import Button from 'rsuite/Button';
import {  useHistory } from 'react-router-dom';



 
 export default function Success(){

  const history = useHistory();

   return(
     <div className='success'>
       <img src={success} alt="success" />
       <span>Sucesso ! Agora é só aguardar a oficina entrar em contato contigo!</span>

       <Button className="btnsuc" onClick={() => {history.push('/dashboard')}} >Voltar</Button>
     </div>
   )
 }