
import { useContext, useEffect, useLayoutEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Buttoon } from '../../../components/ButtonsDAsh/Button';
import MyComponent from '../../../components/Maps/Maps';



import { Menu } from '../../../components/MenuRsuit/Menu';
import { AuthContext } from '../../../Contexts/auth';



export  function Dashboard(){

  const history = useHistory();
 const {   user } = useContext(AuthContext);

  useEffect(()=>{
    

    function load(){
     
      if(typeof user.cnpj !== 'undefined'){
        history.push('/dashboard-emp');
      }

    }
    
    load();

  }, [history, user.cnpj]);

  return(
    <div>
    
      
    <Menu/>
       <MyComponent/>
       

      
     <Buttoon />
     
    </div>
  )
}