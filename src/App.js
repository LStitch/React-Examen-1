import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Movies from './Components/Movies';
import Ticket from './Components/Ticket';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      compra:{},
      cartelera:[
        {codigo:1,nombre:"Halloween Kills", idioma:'SUB', clasificacion:'C',horarios:['13:00','17:50','20:30'],duracion:'106 min',url:'https://static.cinepolis.com/img/peliculas/37049/1/1/37049.jpg'},
        {codigo:2,nombre:"Los Locos Addams 2", idioma:'ESP', clasificacion:'A',horarios:['9:00','11:30','13:30'],duracion:'93 min',url:'https://static.cinepolis.com/img/peliculas/37048/1/1/37048.jpg'},
        {codigo:3,nombre:"Sin Tiempo Para Morir", idioma:'ESP', clasificacion:'B',horarios:['11:00','13:50','19:40'],duracion:'164 min',url:'https://static.cinepolis.com/img/peliculas/36792/1/1/36792.jpg'},
        {codigo:4,nombre:"Venom: Carnage Liberado", idioma:'ESP', clasificacion:'B',horarios:['10:30','14:20','18:30'],duracion:'98 min',url:'https://static.cinepolis.com/img/peliculas/36934/1/1/36934.jpg'},
      ],
    };
 
  }

  eliminarCompra=()=>{
    alert("Se ha cancelao")
    this.setState({
      ...this.state,
      compra:[],
    })
  } 

  agregar=(a,h)=>{

    const temp={
      codigo:a.codigo,
      nombre:a.nombre, 
      idioma:a.idioma, 
      clasificacion:a.clasificacion,
      horario:h,
      cantidad:0,
      duracion:a.duracion,
      total:0
    }
    this.setState({
      ...this.state,
      compra:temp
    })  
  }
 
  calcular=(b,p)=>{
    
    let precio;
    if(p.clasificacion==='A')
    {
      precio=70;
    }
    if(p.clasificacion==='B')
    {
      precio=105; 
    }   
    if(p.clasificacion==='C')
    {
      precio=115;
    }

    const temp={
      codigo:p.codigo,
      nombre:p.nombre, 
      idioma:p.idioma, 
      clasificacion:p.clasificacion,
      horario:p.horario,
      cantidad:b,
      duracion:p.duracion,
      total:b*precio
    }
    this.setState({
      ...this.state,
      compra:temp,
    })
  } 
  
  comprar=(p)=>{

    if(p.cantidad<=0)
    {
      alert("Favor de ingresar cuantos boletos quiere")
    }
    else
    {
      if(p.cantidad>0)
      {
      alert("Disfruta tu película :3")
      this.setState({
      ...this.state,
      compra:[],
      })
      }
    }
  }

  render() {
    
    return (
      <div className="App">
        
        <Header className="App-header"/>
        
        <div className="Separador">
          
          <Movies
            cartelera={this.state.cartelera}
            agregar={this.agregar}
          />

          <Ticket
            compra={this.state.compra}
            calcular={this.calcular}
            eliminarCompra={this.eliminarCompra}
            comprar={this.comprar}
          />
          
        </div>
      </div>
    )
  }
}

export default App;
