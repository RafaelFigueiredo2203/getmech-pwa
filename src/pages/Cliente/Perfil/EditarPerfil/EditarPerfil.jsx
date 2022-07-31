import { CaretLeft } from 'phosphor-react';
import { Link, useHistory } from 'react-router-dom';
import './styles.scss';
import { Button } from 'rsuite';
import { AuthContext } from '../../../../Contexts/auth';
import { useContext, useState } from 'react';
import MaskInput from '../../../../components/MaskInput';
import firebase from '../../../../services/firebase/firebase';
import { toast } from 'react-toastify';


export function EditarPerfilClient(){

  const {  user  } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();

  const [nome, setNome] = useState(user?.nome);
  const [urlPhoto, setUrlPhoto] = useState(user?.urlPhoto);
  const [cnpj, setCnpj] = useState(user?.cpf);
  const [celular, setCelular] = useState(user?.phoneNumber);
  const [end, setEnd] = useState(user?.end);
  const [city, setCity] = useState(user?.city);
  const [state, setState] = useState(user?.state);


  async function UpdatePerfil(){
    await firebase.firestore().collection('userClient').doc(user?.uid)
    .update({
        nome: nome,
        urlPhoto: urlPhoto,
        cpf:cnpj,
        phoneNumber: celular,
        end: end,
        city: city,
        state: state
    }).then(()=>{
     
      toast.success('🚀 Os dados foram salvos!');
      history.push('/dashboard-emp')
     
    }).catch((error)=>{
        console.log(error);
        console.log(nome);
    })
   }
  

  return(
    <div className="EditPerfilbody">
      <header className="headerPerfil">
      <Link to="/perfilClient" ><CaretLeft className="carretPer" size={28} color='#000' /></Link>
          <span className="spanHaderPer">Perfil</span>
      </header>

      <img className="perfilPhoto" src={user?.urlPhoto}  circle/>
      

      <section className="perfilInfo">
      <span className="Nameperfil">{user?.nome}</span>

      <div className="formPerfil">
          <label >urlPhoto:</label>
          <input  type="text" onChange={(e) => setUrlPhoto(e.target.value)} value={urlPhoto} />

          <label >Nome:</label>
          <input  type="text" onChange={(e) => setNome(e.target.value)} value={nome} />

          <label >CPF:</label>
          <MaskInput  type="number"  name= "cpf"
              mask= "999.999.999/99"  onChange={(e) => setCnpj(e.target.value)} value={cnpj} />

          <label >Celular:</label>
          <input  type="phoneNumber"  onChange={(e) => setCelular(e.target.value)} value={celular} />

          <label >End:</label>
          <input  type="text" onChange={(e) => setEnd(e.target.value.end)} value={end} />

          <label >Cidade:</label>
          <input  type="text" onChange={(e) => setCity(e.target.value)} value={city} />

          <label >Estado:</label>
          <select  defaultValue="" onChange={(e) => setState(e.target.value)} value={state}>
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
      </div>

     

      </section>

      <div className="btndiv">
        <Button onClick={UpdatePerfil} className="save">Salvar</Button>
      
      </div>

    
    
  
    </div>
  );
}