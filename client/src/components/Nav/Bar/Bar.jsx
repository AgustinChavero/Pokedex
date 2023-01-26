import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { getAllPokemons } from "../../../redux/actions";

import FilterByName from "./FilterByName/FilterByName";
import ButtonPositive from "../../Buttons/ButtonPositive";

import s from "./Bar.module.css";


const Bar = () => {
    const { pathname } = useLocation();
    const dispatch = useDispatch()
    
    const onClick = () => {
      dispatch(getAllPokemons())
    }
  
    return (
      <div className={`${s.bar}`}>
        <div className={`${s.search_bar_ctn}`}>
          <div className={`${s.manual_search}`}>
            {pathname === "/home" ? <div className={`${s.fn_ctn}`}><FilterByName/></div> : null}
            {pathname === "/home" ? <ButtonPositive onClick={onClick}>Reload</ButtonPositive> : null}
            <Link to="/createPokemon"><ButtonPositive>Create Pokemon</ButtonPositive></Link>
          </div>
        </div>
      </div>
    );
  };

export default Bar;