import { useState } from "react";
import { useSelector } from "react-redux";


function CreatePokemon () {
    const types = useSelector(state => state.pokemonsTypes)
    const [state, setState] = useState({
        name: "",
        type: "",
        hp: "",
        attack: "",
    })

    const onSubmit = () => {

    }
    

    return (
        <div>
            {/* <form onSubmit={onSubmit}>
                <label htmlFor="">Name</label>
                    <input type="text" 
                        name=""
                        value=""
                        onChange=""
                        placeholder=""
                    />
                <label htmlFor="">Type</label>
                    <select>
                        <option>Select Type</option>
                        {types?.map((t) => {
                            return <option value={t.name}>{t.name}</option>
                        })}
                    </select>
                <label htmlFor="">HP</label>
                    <input type="number" 
                        name=""
                        value=""
                        onChange=""
                        placeholder=""
                    />
                <label htmlFor="">Attack</label>
                    <input type="number" 
                        name=""
                        value=""
                        onChange=""
                        placeholder=""
                    />
            </form> */}
        </div>
    )
}

export default CreatePokemon;