import axios from "axios";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemonTypes } from "../../redux/actions";
import validation from "./validation";

import ButtonPositive from "../../components/Buttons/ButtonPositive"
import ButtonNegative from "../../components/Buttons/ButtonNegative";

import s from "./form.module.css";


function CreatePokemon () {
    const dispatch = useDispatch()
    const types = useSelector(state => state.pokemonsTypes)
    useEffect(() => {
        dispatch(getPokemonTypes())
    },[])
    const [state, setState] = useState({
        name: "",
        type: [],
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        abilityOne: "",
        abilityTwo: "",
        moveOne: "",
        moveTwo: "",
    })
    const [errors, setErrors] = useState({
        name: "",
        type: "",
        hp: "",
        attack: "",
        defense: "",
        speed: "",
        height: "",
        weight: "",
        abilityOne: "",
        abilityTwo: "",
        moveOne: "",
        moveTwo: "",
    })
    const onChange = (e) => {
        const property = e.target.name;
        const value = e.target.value;
        if (property === "type") {
          setState({ ...state, [property]: [value] });
        } else {
          setState({ ...state, [property]: value });
          setErrors({...errors, ...validation({[property]: [value]})})
        }
      };
    const onSubmit = (e) => {
        e.preventDefault()
        const validate = validation(state);
        if (Object.keys(validate).length === 0) {
            axios.post("http://localhost:3001/pokemons", state)
            .then(() => {alert("Pokemon creado con exito")})
            .catch(() => {alert("Hubo un error en los datos administrados")})
        } else {
            console.log(validate)
        }
    }

    return (
        <div className={`${s.base}`}>
            <form onSubmit={onSubmit} className={`${s.form_ctn}`}>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>Name</h3></label>
                            <input type="text" 
                                name="name"
                                value={state.name.toLowerCase()}
                                onChange={onChange}
                                placeholder="Write the name of your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>Type</h3></label>
                            <select onChange={onChange} name="type">
                                <option>Select Type</option>
                                {types.map((t, index) => (
                                    <option key={index} value={t.name}>
                                        {t.name}
                                    </option>
                                ))}
                            </select>
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>HP</h3></label>
                            <input type="number" 
                                name="hp"
                                value={state.hp}
                                onChange={onChange}
                                placeholder="Write the life of your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>Speed</h3></label>
                            <input type="number" 
                                name="speed"
                                value={state.speed}
                                onChange={onChange}
                                placeholder="Write the speed of your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>Attack</h3></label>
                            <input type="number" 
                                name="attack"
                                value={state.attack}
                                onChange={onChange}
                                placeholder="Write the attack of your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>Defense</h3></label>
                            <input type="number" 
                                name="defense"
                                value={state.defense}
                                onChange={onChange}
                                placeholder="Write the defense of your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>Height</h3></label>
                            <input type="number" 
                                name="height"
                                value={state.height}
                                onChange={onChange}
                                placeholder="Write the height of your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>Weight</h3></label>
                            <input type="number" 
                                name="weight"
                                value={state.weight}
                                onChange={onChange}
                                placeholder="Write the weight of your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>First Ability</h3></label>
                            <input type="text" 
                                name="abilityOne"
                                value={state.abilityOne}
                                onChange={onChange}
                                placeholder="Invent a skill for your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>Second Ability</h3></label>
                            <input type="text" 
                                name="abilityTwo"
                                value={state.abilityTwo}
                                onChange={onChange}
                                placeholder="Invent a skill for your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>First Move</h3></label>
                            <input type="text" 
                                name="moveOne"
                                value={state.moveOne}
                                onChange={onChange}
                                placeholder="Invent a move for your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>Second Move</h3></label>
                            <input type="text" 
                                name="moveTwo"
                                value={state.moveTwo}
                                onChange={onChange}
                                placeholder="Invent a move for your pokemon"
                                className={`${s.text_input}`}
                            />
                    </div>
                </div>
                <div className={`${s.error_ctn}`}>
                        {errors.name ? <div className={`${s.error}`}>{errors.name}</div> : null}
                        {errors.hp || errors.speed ? <div className={`${s.error}`}>{errors.hp} - {errors.speed}</div> : null}
                        {errors.attack || errors.defense ? <div className={`${s.error}`}>{errors.attack} - {errors.defense}</div> : null}
                        {errors.height || errors.weight ? <div className={`${s.error}`}>{errors.height} - {errors.weight}</div> : null}
                        {errors.abilityOne || errors.abilityTwo ? <div className={`${s.error}`}>{errors.abilityOne} - {errors.abilityTwo}</div> : null}
                        {errors.moveOne || errors.moveTwo ? <div className={`${s.error}`}>{errors.moveOne} - {errors.moveTwo}</div> : null}
                </div>
                <div className={`${s.buttons_ctn}`}>
                    <ButtonPositive>Create Pokemon</ButtonPositive>
                    <Link to="/home"><ButtonNegative>Go Back</ButtonNegative></Link>
                </div>
                
                
                
            </form>
        </div>
    )
}

export default CreatePokemon;