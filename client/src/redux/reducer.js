import {ALLCOUNTRIES,
    COUNTRYBYPK,
    ALLACTIVITIES,} from "./actionTypes"

const initialState = {
    allCountries : [],
    countryByPk : {},
    Activities:[],
}

const Reducer = (store = initialState, action) => {
switch (action.type) {
    case ALLCOUNTRIES:
    return {...store, allCountries:action.payload}
    case COUNTRYBYPK:
        return {...store, countryByPk:action.payload}
        case ALLACTIVITIES:
            return {...store, Activities:action.payload}
    default:
        return store
}
}

export default Reducer