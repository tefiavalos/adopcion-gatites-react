import React from 'react';
import styled from 'styled-components'

const Card = styled.div`
  display: flex;
  border-radius: 10px;
  background-color: ${prop=> prop.hayAdopcion ? "coral" : "grey"};
  width:350px;
  height: 150px;
  margin: 10px;
`

const Cards = ({name, shortDesc, img, disponible}) => {
  return(
    <Card hayAdopcion={disponible}>
    <div className="img">
    <img src={img} alt={name}/>
    </div>
    <div className="descripcion">
    <h2>{name}</h2>
    <p>{shortDesc}</p>
    <button className="mostrarModal">Ver mas</button>
    </div>
    </Card>
  )
};

export default Cards; 