
import './App.css';
import {useState} from 'react';
import Sale from './Sale';
import imagen1 from './images/1001.jpg';
import imagen2 from './images/1002.jpg';
import imagen3 from './images/1003.jpg';
import imagen4 from './images/1004.jpg';
import imagen5 from './images/1005.jpg';
import imagen6 from './images/1006.jpg';


function App() {
  const products     =[
    {
      codigo: "1001",
      imagen: imagen1,
      nombre: "vestido largo",
      precio: 50000,
      descripcion: "Vestido largo de color azul con un diseño moderno y fresco para el verano o la playa",
    },
    {
      codigo: "1002",
      imagen: imagen2,
      nombre: "blusa strapless",
      precio: 40000,
      descripcion: "Blusa strapless con escote en V de color plateado con un estilo elegante para salir de fiesta ",
    },
    {
      codigo: "1003",
      imagen: imagen3,
      nombre: "camisa maga corta",
      precio: 40000,
      descripcion: "Camisa para caballero con un estampado de estilo moderno y fresco perfecto para el verano",
    },
    {
      codigo: "1004",
      imagen: imagen4,
      nombre: "Conjunto para niña",
      precio: 80000,
      descripcion: "Hermoso conjunto para niña de color rojo con estampado para la princesa de la casa, ideal para ocasiones especiales"
    },
    {
      codigo: "1005",
      imagen: imagen5,
      nombre: "Bolso Manos libre",
      precio: 30000,
      descripcion: "Lindo bolso color dorado muy practico para cada ocasion por su diseño delicado y casual",
    },
    {
      codigo: "1006",
      imagen: imagen6,
      nombre: "Gafas de sol",
      precio: 30000,
      descripcion: "Elegantes gafas de color negro con lente Degrade y un marco metalico, para estos dias soleados del verano 2026",
    }
  ]
  const [total,setTotal] = useState(0)

  return (
    <>
      <h1> Total a pagar: {total} COP</h1>
      <div className="container">
        <Sale codigo={products[0].codigo} nombre={products[0].nombre} imagen={products[0].imagen} precio={products[0].precio} descripcion={products[0].descripcion} setTotal={setTotal} />
        <Sale codigo={products[1].codigo} nombre={products[1].nombre} imagen={products[1].imagen} precio={products[1].precio} descripcion={products[1].descripcion} setTotal={setTotal} />
        <Sale codigo={products[2].codigo} nombre={products[2].nombre} imagen={products[2].imagen} precio={products[2].precio} descripcion={products[2].descripcion} setTotal={setTotal} />
        <Sale codigo={products[3].codigo} nombre={products[3].nombre} imagen={products[3].imagen} precio={products[3].precio} descripcion={products[3].descripcion} setTotal={setTotal} />
        <Sale codigo={products[4].codigo} nombre={products[4].nombre} imagen={products[4].imagen} precio={products[4].precio} descripcion={products[4].descripcion} setTotal={setTotal} />
        <Sale codigo={products[5].codigo} nombre={products[5].nombre} imagen={products[5].imagen} precio={products[5].precio} descripcion={products[5].descripcion} setTotal={setTotal} />
      </div>
    </>
  )
}

export default App
