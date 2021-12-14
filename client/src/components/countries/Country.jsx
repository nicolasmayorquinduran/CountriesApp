import React from 'react';
import styled from "styled-components"
import {Link} from "react-router-dom"

const Country = ({Image, Name, Continent, id}) => {
// Cada país es una tarjeta que renderiza los siguientes datos
// Imagen de la bandera
// Nombre
// Continente

const Country = styled.div``
const Flag = styled.div``
const Info = styled.div``
const Path1 = styled.div``
const Path2 = styled.div``


    return (
        <div>
            <Link to={`/Country/${id}`}>
            <Country>
               <Flag>
                   <Path1/>
                   <Path2/>
                   <img src={Image}/>
               </Flag>
               <Info>
                   <h3>{Name}</h3>
                   <p>{Continent}</p>
               </Info>
            </Country>
            </Link>
        </div>
    );
};

export default Country;