import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Countries from "../countries";
import { getAllActivities, putPage } from "../../redux/actions";
import styled from "styled-components";

/*
Requerimiento del readme:
Ruta principal: debe contener

[x] Input de búsqueda para encontrar países por nombre
[x] Botones/Opciones para filtrar por continente y por tipo de actividad turística
[x] Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población
*/

const Wrapper = styled.div`
  padding: 1em;
  display: flex;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 16px;
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  & div {
    display: flex;
    flex-direction: column;
  }
`;

const Search = styled.input`
  width: 80%;
  font-size: 2rem;
  margin: 30px 0;
`;

const Option = styled.option`
  font-weight: bold;
`;

const Index = () => {
  const [state, setState] = useState({
    search: "",
    continent: "",
    activity: "",
    sort: "",
  });

  const dispatch = useDispatch();
  useEffect(() => dispatch(getAllActivities()), [dispatch]);

  const allActivities = useSelector((store) => store.allActivities);

  const handleSetState = (e) => {
    setState({
      ...state,
      [e.target.id]: e.target.value,
    });
    dispatch(putPage(9));
  };

  return (
    <div>
      {/* Input de búsqueda para encontrar países por nombre */}

      <Search
        onChange={(e) => handleSetState(e)}
        type="text"
        placeholder="Search country"
        id="search"
      ></Search>

      {/* // Botones/Opciones para filtrar por continente y por tipo de actividad turística */}

      <Wrapper>
        <div>
          <select onClick={(e) => handleSetState(e)} id="continent">
            <Option value="">Continent</Option>
            <option value="Antarctica">Antarctica</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
            <option value="Asia">Asia</option>
            <option value="Africa">Africa</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>

        <>
          {allActivities.length ? (
            <div>
              <select onClick={(e) => handleSetState(e)} id="activity">
                <Option value="">Tourist activities</Option>
                {allActivities.map((a) => (
                  <option value={a}>{a}</option>
                ))}
              </select>
            </div>
          ) : null}
        </>

        {/* Botones/Opciones para ordenar tanto ascendentemente como descendentemente los países por orden alfabético y por cantidad de población */}

        <div>
          <select onClick={(e) => handleSetState(e)} name="sort" id="sort">
            <Option value="">Population quantity</Option>
            <option value="most populated">most populated</option>
            <option value="less populated">less populated</option>
          </select>
        </div>

        <div>
          <select onClick={(e) => handleSetState(e)} name="sort" id="sort">
            <Option value="">order alphabetically</Option>
            <option value="A-z">A-z</option>
            <option value="Z-a">Z-a</option>
          </select>
        </div>

        <div></div>
      </Wrapper>

      {/* los valores capturados de la búsqueda y en los filtros son enviados 
      como props al componente hijo countries, que se encarga de hacer
      el renderizado filtrando esas props.
      */}

      <Countries
        continent={state.continent}
        activity={state.activity}
        sort={state.sort}
        search={state.search}
      />
    </div>
  );
};

export default Index;
