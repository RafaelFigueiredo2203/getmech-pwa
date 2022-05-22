import { Door } from "phosphor-react";
import { useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Button from "rsuite/esm/Button";
import { AuthContext } from "../../../Contexts/auth";


 
export function Dashboardemp(){

  const { signOut, user } = useContext(AuthContext);

  



 

  return(
      <div>
     

      <Button className="exitBtn" color="orange" appearance="primary" onClick={ () => signOut() }>
      <Door className="door" size={20} color="#f5f5f5" weight="bold" />

        Sair
        
        </Button>
      </div>
  );
}