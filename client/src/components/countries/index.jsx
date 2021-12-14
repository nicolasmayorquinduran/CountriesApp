import {useEffect} from 'react';
import Country from "../countries/Country"
import styled from 'styled-components';
import {getAllCountries} from "../../redux/actions"
import {useDispatch, useSelector} from "react-redux"

const Index = () => {

    const Countries = styled.div``
    const allCountries = useSelector(store => store.allCountries)

    const dispatch = useDispatch()
    useEffect(() => dispatch(getAllCountries()),[dispatch])

    return (
        <>
            <Countries>
                {allCountries.map(c =>
                <Country 
                Image ={c.flags }
                Name ={c.name}
                Continent={c.continents.join(", ")}
                id ={c.cca3} />
)}
            </Countries>
        </>
    );
};

export default Index;