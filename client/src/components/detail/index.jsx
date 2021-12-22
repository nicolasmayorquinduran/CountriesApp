import {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {useParams} from "react-router-dom"
import {getCountryByPk} from "../../redux/actions"
import SphereShadows from "../../img/shadows-sphere.jpg"
import SphereLigth from "../../img/ligths-sphere.jpg"
import Country from "../countries/Country"
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMale, faThLarge } from '@fortawesome/free-solid-svg-icons'


// detalle de país: debe contener

// [ ] Los campos mostrados en la ruta principal 
//para cada país (imagen de la bandera, nombre, código de país de 3 letras y continente)
// [ ] Código de país de 3 letras (id)
// [ ] Capital
// [ ] Subregión
// [ ] Área (Mostrarla en km2 o millones de km2)
// [ ] Población
// [ ] Actividades turísticas con toda su información asociada


const Activities= styled.div``


const Index = () => {
    
    const {id} = useParams()

    const dispatch = useDispatch()
    useEffect(() => dispatch(getCountryByPk(id)), [dispatch])
    const country = useSelector(store => store.countryByPk)

    const Wrapper= styled.div`
    display:flex;
    flex-wrap:wrap;
    height: 100vh;
    & #country {
        display: flex;
        justify-content: center;
        width: 100%;
    } & #country div {
        width: 80%;
        height:${window.innerWidth *.27}px;
        margin: auto;
    } & #infography, #sphere {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    } & .subregion {
        transform: translateY(42px);
    } 
    `

    return (
        country.hasOwnProperty("cca3") ?
        <> <h1 id='title'>{country.name}</h1>
            <Wrapper>
                <div id = "country">
                
                <div id="sphere">
                <Country 
                Image ={country.flags }
                Continent={country.continents.join(", ")}
                id ={country.cca3} />
                <p className='subregion'>{`Subregion : ${country.subregion} `}</p>
                </div>

                <div id ="infography">
                <p>{`Population : ${country.population} `}</p>
                <div class ="icons">{
                    country.population.toString().split("").map(e =>
                        <FontAwesomeIcon icon ={faMale}></FontAwesomeIcon>)
                }</div>
                <p>{`Area : ${country.area} `}</p>
                <div class ="icons">{
                    country.area.toString().split("").map(e =>
                        <FontAwesomeIcon icon ={faThLarge}></FontAwesomeIcon>)
                }</div>
                </div>
                </div>

            <Activities>
            {country.activities.map(a =>
               <>
                <h3>{a.name}</h3>
                <h6>{a.difficulty}</h6>
                <h6>{a.duration}</h6>
                <ul>
                {a.season.map(s =>
                    <>
                    <li>{s}</li>
                    </>
                    )}
               </ul>
               </>
                )
                }
            </Activities>
            </Wrapper>

        </>:
        <div>cargando detalle...</div>
    );
};

export default Index;