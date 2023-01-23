import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { getPokemonByID } from "../../redux/actions";

import Class from "../../assets/Icons/class.png"
import Stats from "../../assets/Icons/stats.png"
import Ability from "../../assets/Icons/ability.png"
import Moves from "../../assets/Icons/moves.png"

import fire from "../../assets/Types/fire.png";
import water from "../../assets/Types/water.png";
import grass from "../../assets/Types/grass.png";
import ground from "../../assets/Types/ground.png";
import rock from "../../assets/Types/rock.png";
import steel from "../../assets/Types/steel.png";
import ice from "../../assets/Types/ice.png";
import electric from "../../assets/Types/electric.png";
import dragon from "../../assets/Types/dragon.png";
import ghost from "../../assets/Types/ghost.png";
import psychic from "../../assets/Types/psychic.png";
import normal from "../../assets/Types/normal.png";
import fighting from "../../assets/Types/fighting.png";
import poison from "../../assets/Types/poison.png";
import bug from "../../assets/Types/bug.png";
import flying from "../../assets/Types/flying.png";
import dark from "../../assets/Types/dark.png";
import fairy from "../../assets/Types/fairy.png";

import ButtonNegative from "../../components/ButtonPN/ButtonNegative";
import s from "./Detail.module.css";

const pokemonType = {
    fire,
    water,
    grass,
    ground,
    rock,
    steel,
    ice,
    electric,
    dragon,
    ghost,
    psychic,
    normal,
    fighting,
    poison,
    bug,
    flying,
    dark,
    fairy,
};

function Detail () {
    const {id} = useParams();
    const dispatch = useDispatch();
    const Pokemon = useSelector (state => state.pokemonDetail)
    useEffect(() => {
        dispatch(getPokemonByID(id));
    },[])
    
    return (
        <div className={`${s.detail_ctn}`}>
            <div className={`${s.detail_card}`}>
                <div className={`${s.image_ctn}`}>
                    <div className={`${s.poke_name_ctn}`}>
                        <h1>{Pokemon.name}</h1>
                    </div>
                    <img src={Pokemon.img} alt="ImagePokemon" className={`${s.poke_image}`}/>
                </div>
                <div className={`${s.poke_info_ctn}`}>
                    <div className={`${s.poke_info}`}>
                        <img src={Class} alt="class" className={`${s.ref_icon}`}/>
                        <h3 className={`${s.type}`}>Type: </h3>
                        <img src={pokemonType[Pokemon.type]} alt="type_icon" className={`${s.type_icon}`}/>
                    </div>
                    <div className={`${s.poke_info}`}>
                        <img src={Stats} alt="stats" className={`${s.ref_icon}`}/>
                        <h3>Stats: </h3>
                        <div className={`${s.stats}`}>
                            <p>HP: {Pokemon.hp}</p>
                            <p>Attack: {Pokemon.attack}</p>
                            <p>Defense: {Pokemon.defense}</p>
                            <p>Speed: {Pokemon.speed}</p>
                            <p>Height: {Pokemon.height}</p>
                            <p>Weight: {Pokemon.weight}</p>
                        </div>
                    </div>
                    <div className={`${s.poke_info}`}>
                        <img src={Ability} alt="ability" className={`${s.ref_icon}`}/>
                        <h3>Abilities: </h3>
                        <div className={`${s.ability}`}>
                            <p>{`${Pokemon.abilityOne} and ${Pokemon.abilityTwo}`}</p>
                        </div>
                    </div>
                    <div className={`${s.poke_info}`}>
                        <img src={Moves} alt="moves" className={`${s.ref_icon}`}/>
                        <h3>Moves: </h3>
                        <div className={`${s.moves}`}>
                            <p>{`${Pokemon.moveOne} and ${Pokemon.moveTwo}`}</p>
                        </div>
                    </div>
                </div>
                <div className={`${s.button_ctn}`}>
                    <Link to="/home"><ButtonNegative>Go Back</ButtonNegative></Link>
                </div>
            </div>
        </div>
    )
}

export default Detail;