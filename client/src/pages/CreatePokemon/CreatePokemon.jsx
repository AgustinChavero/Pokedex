import axios from "axios";
import { useState, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPokemonTypes } from "../../redux/actions";
import validation from "./validation";

import ButtonPositive from "../../components/ButtonPN/ButtonPositive"
import ButtonNegative from "../../components/ButtonPN/ButtonNegative";

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
        setState({...state, [e.target.name]: e.target.value})
        setErrors({...errors, ...validation({[e.target.name]: e.target.value})})
    }
    const onSubmit = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/pokemons", state)
            .then(() => {alert("FUE CREADO PAPA")})
            .catch(() => {alert("ERROR PAPA")})
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
                    <div className={`${s.error_ctn}`}>
                        {errors.name ? <div className={`${s.error}`}>{errors.name}</div> : null}
                    </div>
                </div>
                <div className={`${s.box_ctn}`}>
                    <div className={`${s.box}`}>
                        <label className={`${s.description}`}><h3>Type</h3></label>
                            <select onChange={onChange}>
                                <option>Select Type</option>
                                {types?.map((t) => {
                                    return <option name="type" value={state.type}>{t.name}</option>
                                })}
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
                    <div className={`${s.error_ctn}`}>
                        {errors.hp ? <div className={`${s.error}`}>{errors.hp}</div> : null}
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
                    <div className={`${s.error_ctn}`}>
                        {errors.attack ? <div className={`${s.error}`}>{errors.attack}</div> : null}
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
                    <div className={`${s.error_ctn}`}>
                        {errors.defense ? <div className={`${s.error}`}>{errors.defense}</div> : null}
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
                    <div className={`${s.error_ctn}`}>
                        {errors.speed ? <div className={`${s.error}`}>{errors.speed}</div> : null}
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
                    <div className={`${s.error_ctn}`}>
                        {errors.height ? <div className={`${s.error}`}>{errors.height}</div> : null}
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
                    <div className={`${s.error_ctn}`}>
                        {errors.weight ? <div className={`${s.error}`}>{errors.weight}</div> : null}
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
                    <div className={`${s.error_ctn}`}>
                        {errors.abilityOne ? <div className={`${s.error}`}>{errors.abilityOne}</div> : null}
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
                    <div className={`${s.error_ctn}`}>
                        {errors.abilityTwo ? <div className={`${s.error}`}>{errors.abilityTwo}</div> : null}
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
                    <div className={`${s.error_ctn}`}>
                        {errors.moveOne ? <div className={`${s.error}`}>{errors.moveOne}</div> : null}
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
                    <div className={`${s.error_ctn}`}>
                        {errors.moveTwo ? <div className={`${s.error}`}>{errors.moveTwo}</div> : null}
                    </div>
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