import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getAllPokemons } from "../../../redux/actions";

import FilterByName from "./FilterByName/FilterByName";
import ButtonPositive from "../../ButtonPN/ButtonPositive";

import "./Bar.css";


const Bar = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch()
    
    const onClick = () => {
      dispatch(getAllPokemons())
    }
  
    return (
      <div className="bar">
        <div className="searchBarContainer">
          <div className="manualSearch">
            {pathname === "/home" ? <div className="fn-ctn"><FilterByName/></div> : null}
            {pathname === "/home" ? <ButtonPositive onClick={onClick}>Reload</ButtonPositive> : null}
            <Link to="/createPokemon"><ButtonPositive>Create Pokemon</ButtonPositive></Link>
          </div>
        </div>
      </div>
    );
  };

export default Bar;