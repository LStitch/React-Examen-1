import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ticket = (props) => {
    return ( 
        <div className="Lista">
        {
            Object.keys(props.compra).length!==0
           ?<div>
                <h4>Compra</h4>
                <div className="Compra">
                  <p><strong>{props.compra.nombre}</strong> ({props.compra.idioma})</p>
                  <p><strong>Hora: </strong>{props.compra.horario}</p>
                  <p><strong>Cantidad: </strong><input type='number'  className="text-left" style={{width: '7vmin'}} value={props.compra.cantidad} min="1" max="6" onChange={e=>props.calcular(e.target.value,props.compra)}/></p>
                  <p><strong>Total: </strong>${(props.compra.total)}</p>
                  <div className="Boton">
                    <Button onClick={()=>props.eliminarCompra()}variant="danger">Cancelar</Button> 
                    <Button onClick={()=>props.comprar(props.compra)}variant="success">Comprar</Button> 
                  </div>
                </div> 
            </div> 
            :<div className="Texto">
                <p>Echate una película picandole a su horario</p>
            </div>
        }
        </div>
     );
}
 
export default Ticket;