import React from 'react'

function Sale({codigo, nombre, precio, descripcion, imagen, setTotal}) {
    const compra=(element)=>{
        setTotal((e)=> e + precio);
        element.target.parentNode.parentNode.style.display="none";
    }

    return (
        <>
          <div className="product">
            <h1> {nombre}</h1>
              <img src={imagen}/>
              <div className="codigo"> Código: {codigo} </div>
              <div className="precio"> Precio: {precio} COP</div>
              <div className="descripcion"> Descripción del producto: {descripcion}</div>
              <div>
                <button onClick={compra} >Comprar</button>
              </div>
          </div>
        </>

    )
}

export default Sale
