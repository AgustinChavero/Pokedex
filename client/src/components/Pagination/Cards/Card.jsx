import { Link } from "react-router-dom";

import ButtonPositive from "../../Buttons/ButtonPositive"

import ImageDefault from "../../../assets/default.jpg"
import s from "./Card.module.css"

function Card (props) {

    return (
        <div className={`${s.reverse_card_ctn}`}>
            <div className={`${s.reverse_card}`}>
                <div className={`${s.reverse_card_front}`}>  
                    <div className={`${s.tittle_ctn}`}>
                        <h4 className={`${s.title}`}>{props.name}</h4>    
                    </div> 
                    <img src={props.img ? props.img : ImageDefault} alt="PokemonImage" className={`${s.poke_image}`}/>
                </div>
                <div className={`${s.reverse_card_back}`}>
                    <Link to={`/detail/${props.id}`} className={`${s.stats}`}><ButtonPositive>Detail</ButtonPositive></Link>
                    <div className={`${s.stats_ctn}`}>
                        <p className={`${s.stats}`}>HP: {props.hp}</p>
                        <p className={`${s.stats}`}>Attack: {props.attack}</p>
                        <p className={`${s.stats}`}>Defense: {props.defense}</p>
                        <p className={`${s.stats}`}>Speed: {props.speed}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;

