import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { filterPokemonByType, getPokemonTypes, filterPokemonByTypeCombinated} from "../../redux/actions";

import Fire from "../../assets/Types/fire.png";
import Water from "../../assets/Types/water.png";
import Grass from "../../assets/Types/grass.png";
import Ground from "../../assets/Types/ground.png";
import Rock from "../../assets/Types/rock.png";
import Steel from "../../assets/Types/steel.png";
import Ice from "../../assets/Types/ice.png";
import Electric from "../../assets/Types/electric.png";
import Dragon from "../../assets/Types/dragon.png";
import Ghost from "../../assets/Types/ghost.png";
import Psychic from "../../assets/Types/psychic.png";
import Normal from "../../assets/Types/normal.png";
import Fighting from "../../assets/Types/fighting.png";
import Poison from "../../assets/Types/poison.png";
import Bug from "../../assets/Types/bug.png";
import Flying from "../../assets/Types/flying.png";
import Dark from "../../assets/Types/dark.png";
import Fairy from "../../assets/Types/fairy.png";

import "./Filter.css";

function FilterByType () {
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getPokemonTypes())
    },[])

    const [firstType, setFirstType] = useState("")
    const [secondType, setSecondType] = useState("")

    const onChange = (e) => {
        if (!firstType) {
            setFirstType(e.target.name) //Fuego
        } else if (!secondType) {
            setSecondType(e.target.name) //Agua
        } else {
            setFirstType(secondType) //En el tercero, corro el primero tomando el valor del segundo, y pasando el nuevo valor al segundo
            setSecondType(e.target.name)
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (!secondType) {
            dispatch(filterPokemonByType(firstType))
        } else {
            dispatch(filterPokemonByTypeCombinated(firstType, secondType))
        }
    }

    return (
        <form className="FilterContainer" onSubmit={onSubmit}>
            <button onClick={onChange} className="buttonImage">
                <img src={Fire} alt="" className="image" name="fire"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Water} alt="" className="image" name="water"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Grass} alt="" className="image" name="grass"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Ground} alt="" className="image" name="ground"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Rock} alt="" className="image" name="rock"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Steel} alt="" className="image" name="steel"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Ice} alt="" className="image" name="ice"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Electric} alt="" className="image" name="electric"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Dragon} alt="" className="image" name="dragon"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Ghost} alt="" className="image" name="ghost"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Psychic} alt="" className="image" name="psychic"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Normal} alt="" className="image" name="normal"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Fighting} alt="" className="image" name="fighting"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Poison} alt="" className="image" name="poison"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Bug} alt="" className="image" name="bug"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Flying} alt="" className="image" name="flying"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Dark} alt="" className="image" name="dark"/>
            </button>
            <button onClick={onChange} className="buttonImage">
                <img src={Fairy} alt="" className="image" name="fairy"/>
            </button>
        </form>
    )
}

export default FilterByType;