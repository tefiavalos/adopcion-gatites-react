import React from 'react';

const Cards = props => {
  return(
    <div className="card">
    <div className="img">
    <img src={props.info.img} />
    </div>
    <div className="descripcion">
    <h2>{props.info.name}</h2>
    <p>{props.info.shortDesc}</p>
    <button className="mostrarModal">Ver más</button>
    </div>
    </div>
  )
};

export default Cards; 