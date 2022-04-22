import Button from  '@material-ui/core/Button';
import { Link, Redirect, useHistory } from 'react-router-dom';
import './style.scss'

export  function Buttoon(){

  const history  = useHistory();

  return(
    <div className='btndiv'>
    <a target="blank"href="https://www.google.com/maps/search/oficina+mecanica/" variant="btn"className="btn1"  >Buscar Mecânico</a>
    <button variant="btn" onClick={() => history.push('./ordem')} className="btn">Ordem de Serviço</button>
    </div>
  )
}




