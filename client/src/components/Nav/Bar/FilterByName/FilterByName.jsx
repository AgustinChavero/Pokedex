import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../../../redux/actions"

import s from "./FilterByName.module.css"

function FilterByName () {
    const dispatch = useDispatch()
    const [state, setState] = useState("");
    
    const onChange = (e) =>{
        setState(e.target.value)
    }
    const onSubmit = (e)=>{
      e.preventDefault()
      dispatch(getPokemonByName(state))
    }
    return (
        <form onSubmit={onSubmit}>
            <div className={`${s.search_ctn}`}>
                <input className={`${s.input_search}`} type="text" value={state.toLocaleLowerCase()} onChange={onChange}/>
                <button className={`${s.button_search}`}>Search</button>
            </div>
        </form>
    )
}

export default FilterByName