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
import Shadow from "../../assets/Types/shadow.png"
import Unknow from "../../assets/Types/unknow.png"

import s from "./FilterByType.module.css"

function FilterByType () {
    const dispatch = useDispatch();
    useEffect( () => {
        dispatch(getPokemonTypes())
    },[])

    const [firstType, setFirstType] = useState("")
    const [secondType, setSecondType] = useState("")

    const onClick = (e) => {
        if (!firstType) { //Si es la primera vez que escribimos aca
            setFirstType(e.target.name) //Insertamos el name en el primer state
        } else if (!secondType) { //Si por segunda vez hacemos click, entramos aca
            setSecondType(e.target.name) //Insertamos en el segundo state este name
        } else {
            setFirstType(secondType) //En el tercero, corro el primero tomando el valor del segundo 
            setSecondType(e.target.name) //Pasando el nuevo valor al segundo
        }
    }
    const onSubmit = (e) => {
        e.preventDefault()
        if (!secondType) { //Si no hay segundo state, solo ejecutamos el primer filter
            dispatch(filterPokemonByType(firstType))
        } else { //Si hay dos, se ejecuta el siguiente filtro combinado
            dispatch(filterPokemonByTypeCombinated(firstType, secondType))
        }
    }

    return (
        <form className={`${s.filter_ctn}`} onSubmit={onSubmit}>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Fire} alt="" className={`${s.image}`} name="fire"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Water} alt="" className={`${s.image}`} name="water"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Grass} alt="" className={`${s.image}`} name="grass"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Ground} alt="" className={`${s.image}`} name="ground"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Rock} alt="" className={`${s.image}`} name="rock"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Steel} alt="" className={`${s.image}`} name="steel"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Ice} alt="" className={`${s.image}`} name="ice"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Electric} alt="" className={`${s.image}`} name="electric"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Dragon} alt="" className={`${s.image}`} name="dragon"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Ghost} alt="" className={`${s.image}`} name="ghost"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Psychic} alt="" className={`${s.image}`} name="psychic"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Normal} alt="" className={`${s.image}`} name="normal"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Fighting} alt="" className={`${s.image}`} name="fighting"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Poison} alt="" className={`${s.image}`} name="poison"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Bug} alt="" className={`${s.image}`} name="bug"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Flying} alt="" className={`${s.image}`} name="flying"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Dark} alt="" className={`${s.image}`} name="dark"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Fairy} alt="" className={`${s.image}`} name="fairy"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Shadow} alt="" className={`${s.image}`} name="shadow"/>
            </button>
            <button onClick={onClick} className={`${s.button_image}`}>
                <img src={Unknow} alt="" className={`${s.image}`} name="unknow"/>
            </button>
        </form>
    )
}

export default FilterByType;