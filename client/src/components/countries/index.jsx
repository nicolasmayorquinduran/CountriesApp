import {useState, useEffect, useRef} from 'react';
import Country from "../countries/Country"
import styled from 'styled-components';
import {getAllCountries} from "../../redux/actions"
import {useDispatch, useSelector} from "react-redux"
import {filterByContinent, filterBySort, matchByActivities} from "./filters"
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Countries = styled.div`
{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 50px;
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);
} & .country{
        width: 18%;
        margin: 0 1%;
        overflow: hidden;
        
}
`
const Pagination = styled.div`
width: 80%;
margin: 20px 10%;
display: flex;
margin-bottom: 10px;

& button {
    color: #888;
    border: #fff;
    background: transparent;
    font-size: 1.6rem;
} & button:hover{
    font-size: 1.7rem;
    color: #448
}
& ul {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 0;
    padding: 0;
} & li {
    color:#999;
    padding: 0 5px;
    list-style: none;
} & li:hover{
    color: #448;
    font-weight: bold;
} & a{
    color:#999;
}
`

const Index = ({continent, activity, sort, search}) => {

    let [page, setPage] = useState(9)

    // const getListSize = () => {
    //     const newWidth = imgRef.current.clientWidth;
    //     setWidth(newWidth);
    //   };


    const dispatch = useDispatch()
    useEffect(() => {
        setPage(9);
        return dispatch(getAllCountries(search))},
    [dispatch, continent, activity, search])
    
    let allCountries = useSelector(store => store.allCountries)
    allCountries = matchByActivities(filterByContinent(filterBySort(allCountries, sort), continent), activity)
    return (
        <>
        <Pagination>
            <>{
                page > 9 &&
                    <FontAwesomeIcon icon={faChevronLeft} onClick={()=> setPage(page-9)}/>
            }</>
            <ul>
            {
                allCountries.map((c,i)=>
                i>0 && i%9==0 &&
                <li onClick={()=> setPage(page=i)}><a>{i/9}</a></li>
                )
            }
                 <li onClick={()=> setPage(page= allCountries.length + 1)}>{Math.ceil(allCountries.length / 9)}</li>
            </ul>
            <>{
                page < allCountries.length + 1 &&
                    <FontAwesomeIcon icon={faChevronRight} onClick={()=> setPage(page+9)}/>
            }</>
        </Pagination>

            <Countries>
                {allCountries.length?
                allCountries.map((c,i) =>
                {

  
                return   i>=page-9 && i<page &&
                <Country 
                Image ={c.flags }
                Name ={c.name}
                Continent={c.continents.join(", ")}
                id ={c.cca3} />
            }
):
<div>loading countries...</div>

}
            </Countries>
        </>
    );
};

export default Index;