import { useContext } from 'react';
import { Buttoon } from '../../../components/ButtonsDAsh/Button';
import MyComponent from '../../../components/Maps/Maps';
import Home from '../../../components/Maps/Maps';

import MenuOfc from '../../../components/Menu/MenuOfc';



export  function Dashboard(){


  return(
    <div>
    
      

       <MyComponent/>
       <MenuOfc/>

      
     <Buttoon />
     
    </div>
  )
}