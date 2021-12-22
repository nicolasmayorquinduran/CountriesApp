// countries recibe por props continent, activities y sort,
// los cuales serán pasados como parámetros a estas funciones
// según seal el caso

export const filterByContinent = (countries, continent) => 
continent.length? 
countries.filter( country => country.continents.includes(continent))
: countries

export const filterBySort = (countries, sort) => 
{
    switch (sort) {
        case "A-z":
            return countries.sort((a, b) => a.name >= b.name ? 1:-1 )
        case "Z-a":
            return countries.sort((a, b) => a.name >= b.name ? -1:1 )
        case "most populated":
            return countries.sort((a, b) => a.population >= b.population ? -1:1 )
        case "less populated":
            return countries.sort((a, b) => a.population >= b.population ? 1:-1 )
    
        default:
            return countries
        }
}

export const matchByActivities = (countries, activity) => 
activity.length? 
countries.filter(country => country.activities.includes(activity))
: countries
