import {useState} from 'react';
import {useSelector} from "react-redux"
import {postActivity} from "../../redux/actions"
import styled from 'styled-components';


// formulario controlado para crear una nueva actividad
//con los siguientes campos:
// Nombre
// Dificultad
// Duración
// Temporada (Verano, Otoño, Invierno o Primavera)
// Brinda la posibilidad de seleccionar/agregar varios países en simultaneo
// tiene un Botón/Opción para crear una nueva actividad turística

const Form = styled.form`
& div {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
} & button{
    margin-top:20px;
} & #season {
    display: table;
    width: 80%;
    height: 104px;
} & #countries {
    width: 80%;
    height: 300px;`

const Index = () => {

    let allCountries = useSelector(store => store.allCountries)
    const [state, setState] = useState({
        search:"",
        name: "",
        difficulty: 0,
        duration: 0,
        season: [],
        countries:[]
        })

    allCountries = state.search.length? allCountries.filter(c => c.name.includes(state.search)): allCountries


    const handleState = e => {
        e.target.id == "season" || e.target.id == "countries"?
        !state[e.target.id].includes(e.target.value)?
        e.target.value.length && setState({...state, [e.target.id]:[...state[e.target.id], e.target.value]}):
        e.target.value.length && setState({...state, [e.target.id]:[...state[e.target.id].filter(element => e.target.value != element)]})
        :
        e.target.value.length !== 0 && setState({...state, [e.target.id]: e.target.value})
    }
    console.log(state)
    return (
        <div>
            <div>
            <h1>Create here New Activity</h1>
            <p>that is popular in one or more countries</p>
            </div>

            <Form >
                <div>
                <input id='name' type="text" placeholder='name of activity' onChange={e => handleState(e)}/>
                </div>

                <div>
                <label>{`Difficulty: ${state.difficulty}`}</label>
                <input  id='difficulty' type="range" min="0" max="5" defaultValue="0"  onChange={e => handleState(e)}/>
                </div>

                <div>
                <label>{`Duration on Hours: ${state.duration}`}</label>
                <input  id='duration' type="range" min="0" max="100" defaultValue="0"  onChange={e => handleState(e)}/>
                </div>

                <div>
                <select id='season'  onChange={e => handleState(e)} multiple>
                    <option value="">Season</option>
                    <option value="summer">summer</option>
                    <option value="fall">fall</option>
                    <option value="winter">winter</option>
                    <option value="spring">spring</option>
                </select>
                </div>

                <div>  
                    <input id='search' type="text" placeholder='search country'  onChange={e => handleState(e)} />
                    <select id="countries"  onChange={e => handleState(e)} multiple>
                        <option value="">Select Countries</option>
                        {
                            allCountries.map(c => <option value={c.name}>{c.name}</option>)
                        }
                    </select>
                </div>

                <div>
                    <button onClick={() => postActivity({
                    name: state.name,
                    difficulty: Number(state.difficulty),
                    duration: Number(state.duration),
                    season: state.season,
                    countries:state.countries
                 })}>Send New Activity</button>
                 </div>
            </Form>
        </div>
    );
};

export default Index;