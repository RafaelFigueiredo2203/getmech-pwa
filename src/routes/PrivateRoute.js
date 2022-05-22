import { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Contexts/auth';

export default function RouteWrapperr({
  component: Component,
  isPrivateEmp,
  
  ...rest
}){
  const { signed, user,  loading } = useContext(AuthContext);



  if(loading){
    return(
      <div></div>
    )
  }
 

  // eslint-disable-next-line no-unreachable
  if(!signed &&  isPrivateEmp    ){
    return <Redirect to="/question" />
  }
  
  
  
  if(typeof user.cnpj !== 'undefined'  && !isPrivateEmp  ){
   
    
    return <Redirect to="/dashboard-emp" /> 
    
  
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