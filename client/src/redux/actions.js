import axios from "axios"
import {ALLCOUNTRIES,
        COUNTRYBYPK,
        ALLACTIVITIES,
        PAGE} from "./actionTypes"

export const getAllCountries = (name) => async (dispatch) => 
name?
axios.get(`http://localhost:3001/countries?name=${name}`)
.then(res => dispatch({type:ALLCOUNTRIES, payload: res.data}))
.catch(err => dispatch({type:ALLCOUNTRIES, payload: []})):
axios.get(`http://localhost:3001/countries`)
.then(res => dispatch({type:ALLCOUNTRIES, payload: res.data}))
.catch(err => dispatch({type:ALLCOUNTRIES, payload: []}))

export const getCountryByPk = (id) => async (dispatch) => 
axios.get(`http://localhost:3001/countries/${id}`)
.then(res => dispatch({type:COUNTRYBYPK, payload: res.data}))
.catch(err => dispatch({type:COUNTRYBYPK, payload: {}}))

export const getAllActivities = () => async (dispatch) => 
axios.get(`http://localhost:3001/activities`)
.then(res => dispatch({type:ALLACTIVITIES, payload: res.data}))
.catch(err => dispatch({type:ALLACTIVITIES, payload: []}))

export const postActivity = async (payload) => {
        return axios.post('http://localhost:3001/activity', payload)
       .then(function (response) {})
       .catch(function (error) {});
     };

export const putPage = (payload) => async (dispatch) =>  dispatch({type:PAGE, payload})