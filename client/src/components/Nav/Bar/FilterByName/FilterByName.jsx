import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from "../../../../redux/actions"

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
            <div className="search-ctn">
                <input className="inputSearch" type="text" value={state.toLocaleLowerCase()} onChange={onChange}/>
                <button className="buttonSearch">Search</button>
            </div>
        </form>
    )
}

export default FilterByName