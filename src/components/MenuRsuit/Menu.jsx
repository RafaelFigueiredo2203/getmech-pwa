
import { AlignLeft, CaretLeft, ChatTeardropDots, ClockCounterClockwise, Door, List, ProjectorScreenChart, ToggleLeft, User } from 'phosphor-react';
import { useContext, useState } from 'react';
import Drawer from 'react-modern-drawer'
import { useHistory } from 'react-router-dom';
import {  Button, ButtonToolbar, IconButton } from 'rsuite';
import PlaceholderParagraph from 'rsuite/esm/Placeholder/PlaceholderParagraph';
import { AuthContext } from '../../Contexts/auth';
import './styles.scss';

const styles = {
  radioGroupLabel: {
    padding: '8px 12px',
    display: 'inline-block',
    verticalAlign: 'middle'
  }
};

export function Menu(){

  const { user } = useContext(AuthContext);
  const history = useHistory();
  const { signOut } = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false)
  const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState)
  }


  return(
    <div className="header">
     
     <Button className="btnMenu" onClick={toggleDrawer}> <List size={30} color="#050505" weight="bold" />  Menu</Button>
            <Drawer
                open={isOpen}
                onClose={toggleDrawer}
                direction='left'
                className='bla bla bla'
            >
                <header className="MenuHeader">
      <img src={user.urlPhoto} className="foto" alt="" />
   
      <h2  className="Nome" >{user.nome} </h2>
      </header>

      <div className="bodyMenu">

        <div className="options-Menu">

        {!user?.cnpj ?
          <Button onClick={() => {history.push('/perfilClient')}} appearance="primary" color="orange" className="buttonMenu">
          <User className="UserIcon" size={20} color="#000000" weight="duotone" />
          <span>Perfil </span>
          </Button> 
        :
        <Button onClick={() => {history.push('/perfilEmp')}} appearance="primary" color="orange" className="buttonMenu">
        <User className="UserIcon" size={20} color="#000000" weight="duotone" />
        <span>Perfil </span>
        </Button>
        }
        
        {!user?.cnpj ?
        <Button onClick={() => {history.push('/historycli')}} appearance="primary" color="orange" className="buttonMenu">
        <ClockCounterClockwise size={20} color="#050505" weight="duotone" />
        <span>Histórico</span>
        </Button>
        :
        <Button appearance="primary" color="orange" className="buttonMenu">
        <ClockCounterClockwise size={20} color="#050505" weight="duotone" />
        <span>Histórico</span>
        </Button>

        }
        
        
        <Button onClick={() => {history.push('/feedback')}} appearance="primary" color="orange" className="buttonMenu">
        <ChatTeardropDots size={20} color="#050505" weight="duotone" />
        <span>Feedback</span>
        </Button>
        

        <Button appearance="primary" color="orange" className="buttonMenu">
        <ProjectorScreenChart size={20} color="#050505" weight="duotone" />
        <span>Sobre</span>
        </Button>
        
        

        </div>
      <footer>
      <Button className="exitBtn" color="orange" appearance="primary" onClick={ () => signOut() }>
      <Door className="door" size={20} color="#f5f5f5" weight="bold" />

        Sair
        
        </Button>
      
      </footer>
      </div>
           
          
          
           </Drawer>
     
    </div>
  );
}