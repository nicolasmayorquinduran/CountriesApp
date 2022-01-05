import {ALLCOUNTRIES,
    COUNTRYBYPK,
    ALLACTIVITIES,
    PAGE} from "./actionTypes"

const initialState = {
    allCountries : [],
    countryByPk : {},
    allActivities:[],
    page:9
}

const Reducer = (store = initialState, action) => {
switch (action.type) {
    case ALLCOUNTRIES:
    return {...store, allCountries:action.payload}
    case COUNTRYBYPK:
        return {...store, countryByPk:action.payload}
        case ALLACTIVITIES:
            return {...store, allActivities:action.payload}
                case ALLACTIVITIES:
            return {...store, allActivities:action.payload}
    case PAGE:
    return {...store, page:action.payload}
    default:
        return store
}
}

export default Reducer