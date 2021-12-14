import axios from "axios"
import {ALLCOUNTRIES,
        COUNTRYBYPK,
        ALLACTIVITIES,} from "./actionTypes"

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

export const postActivity = (id) => async (payload) => 
axios.get(`http://localhost:3001/activity`, payload)
.then(res => res)
.catch(err => err)

