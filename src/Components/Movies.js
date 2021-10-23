import React from 'react'
import '../App.css';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Movies (props) {
    return (
        <div className="Separao">
            <h4 style={{marginBottom:'5vmin' }}>Cartelera</h4>
            {
                props.cartelera.map((a,ini)=>{
                    return (
                    <div className="Recuadro" key={ini}>
                        <div  className="Imagen">
                            <img src={a.url} alt={a.nombre}/>
                        </div> 
                        <div className="Form">
                            <p>{a.nombre}</p>
                            <p>{a.idioma}</p>
                            <p>{a.clasificacion}</p>
                            <p>{a.duracion}</p>
                            <div className="Horarios">
                                {a.horarios.map((b,ini)=><Button variant="dark" key={ini} onClick={()=>props.agregar(a,b)}style={{margin:'1vmin'}}>{b}</Button>)}
                            </div>
                        </div>
                    </div>)   
                })
            }  
        </div>
    )
}
