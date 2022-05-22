

import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Contexts/auth';

export default function RouteWrapper({
  component: Component,
  isPrivateUser,
  isPrivateEmp,
  ...rest
}){
  const { signed , user, loading } = useContext(AuthContext);



  
 
 

  // eslint-disable-next-line no-unreachable
  if(!signed &&  isPrivateUser    ){
    return <Redirect to="/question" />
  }
  
  if(signed &&  !isPrivateUser  ){
   
    
    return <Redirect to="/dashboard" /> 
   
   
  }
 


 
  

 
  
  
 

  
  
 

 
  

  
  

  

 


  return(
    <Route
      {...rest}
      render={ props => (
        <Component {...props} />
      )}
    />
  )
}