import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getAllPokemons } from "../../../redux/actions";

import FilterByName from "./FilterByName/FilterByName";
import ButtonPositive from "../../ButtonPN/ButtonPositive";

import "./Bar.css";


const Bar = () => {
    const dispatch = useDispatch()
    
    const onClick = () => {
      dispatch(getAllPokemons())
    }
  
    return (
      <div className="bar">
        <div className="searchBarContainer">
          <div className="manualSearch">
            <div className="fn-ctn"><FilterByName/></div>
            <ButtonPositive onClick={onClick}>Reload</ButtonPositive>
            <Link to="/createPokemon"><ButtonPositive>Create Pokemon</ButtonPositive></Link>
          </div>
        </div>
      </div>
    );
  };

export default Bar;