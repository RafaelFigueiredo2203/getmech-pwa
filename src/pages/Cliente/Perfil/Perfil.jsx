import { CaretLeft } from 'phosphor-react';
import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/auth';
import './styles.scss';
import firebase from '../../../services/firebase/firebase'
import MaskInput from '../../../components/MaskInput.js';
import { Backdrop, Box, Fade, Modal, Typography } from '@material-ui/core';
import { Button } from 'rsuite';
import { toast } from 'react-toastify';
import { deleteUser, getAuth } from 'firebase/auth';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 296,
  height:160,
  bgcolor: '#FFE7D4',
  borderRadius:10,
  border: '1px solid #F56D00',
  boxShadow: 24,
  p: 4,
};



export function PerfilClient(){

  const {  user, signOut  } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const history = useHistory();

  
 
   useEffect(()=>{
     
 
     function load(){
      
       if(user?.googleAccount === true){
         history.push('/perfilClientGoogle');
       }
 
     }
     
     load();
     
 
   }, [history, user.cnpj]);

   function DeleteAccount(){
  
    
    const auth = getAuth();
    const uuser = auth.currentUser;
    
    deleteUser(uuser).then(() => {
  
  firebase.firestore().collection('userClient').doc(user?.uid)
  .delete();
  
  signOut();
  toast.success('🚀 Excluido com sucesso!');
   
     console.log('user deleted');
    }).catch((error) => {
      // An error ocurred
      // ...
    });
  
  
 ;
  }

  return(
    <div className="Perfilbody">
      <header className="headerPerfil">
      <Link to="/dashboard-emp" ><CaretLeft className="carretPer" size={28} color='#000' /></Link>
          <span className="spanHaderPer">Perfil</span>
      </header>

      <img className="perfilPhoto" src={user?.urlPhoto}  circle/>
      

      <section className="perfilInfo">
      <span className="Nameperfil">{user?.nome}</span>

      <div className="formPerfil">
          <label >E-mail:</label>
          <input disabled type="email"  value={user?.email} />

          <label >CPF:</label>
          <MaskInput disabled type="number"  name= "cpf"
              mask= "999.999.999/99" value={user?.cpf} />

          <label >Celular:</label>
          <input disabled type="phoneNumber"  value={user?.phoneNumber} />

          <label >End:</label>
          <input disabled type="text"  value={` ${user?.end},${user?.city}/${user?.state}`} />
      </div>

     

      </section>

      <div className="btndiv">
        <Button onClick={() => {history.push('/EditPerfilClient')}} className="edit">Editar</Button>
        <Button onClick={handleOpen}  className="exclude">Excluir Conta</Button>
      </div>

    
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography className="modall" id="transition-modal-title" variant="h6" component="h2">
            <span className="spanmodal"> Deseja excluir a conta? </span>
            </Typography>
            <Typography  id="transition-modal-description" sx={{ mt: 2 }}>
             <Button onClick={DeleteAccount} color="red" appearance="primary">Sim</Button>
             <Button onClick={handleClose} color="orange" appearance="primary" >Não</Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
  
    </div>
  );
}