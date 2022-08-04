import { CaretLeft } from "phosphor-react";
import firebase from '../../../../services/firebase/firebase';
import { Link, useHistory, useParams } from "react-router-dom";
import { Avatar, Button } from "rsuite";
import { AuthContext } from "../../../../Contexts/auth";
import './styles.scss';
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Backdrop, Box, Fade, Modal, Typography } from "@material-ui/core";
import { deleteUser, getAuth } from "firebase/auth";


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

export function HistoricoOption(){

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const {  user,signOut  } = useContext(AuthContext);
  const { id } = useParams();
  const history = useHistory();
  const [ordemId, setOrdemId] = useState({});
  const [orderDisponibility, setOrderDisponibility] = useState(false);

  useEffect(() => {
    async function loadOrdenId(){
     const ordem = await firebase.firestore().collection('services').doc(id)
      .get()
     
  
        let ordemDetails = {
  
        
       
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
      
     setOrdemId(ordemDetails);
     localStorage.setItem('ordemId', JSON.stringify(ordemDetails));
      }

      loadOrdenId();
      
      console.log(ordemId);
     
  },[]);
 
  async function DeleteOrder(){
  
  
  
  firebase.firestore().collection('services').doc(ordemId?.id)
  .delete().then(() => {
    toast.success('🚀 Excluido com sucesso!');
   
    console.log('ordem deleteda');

    history.push('/historycli');
  }).catch((error) => {
      console.log(error.message);
      toast.error('Erro ao excluir!');
      // ...
    });
  
  
 ;
  }

  return(
      <div className="ordemBody">
        <header className="ordemHeader">
        <Link to="/historycli" ><CaretLeft className="carret" size={22} color="#000" weight="bold" /></Link>
          <span className="spanHader">Opções</span>
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

           

        </section>  

        <div className="btndiv">
        
        <Button onClick={handleOpen}  className="exclude">Excluir Ordem</Button>
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
            <span className="spanmodal"> Deseja excluir a ordem? </span>
            </Typography>
            <Typography  id="transition-modal-description" sx={{ mt: 2 }}>
             <Button onClick={DeleteOrder} color="red" appearance="primary">Sim</Button>
             <Button onClick={handleClose} color="orange" appearance="primary" >Não</Button>
            </Typography>
          </Box>
        </Fade>
      </Modal>
      </div>
  )
}