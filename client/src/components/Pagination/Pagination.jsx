import { useState } from "react";
import { useSelector } from "react-redux";

import Card from "./Cards/Card"

import Next from "../../assets/Arrows/next.png";
import Back from "../../assets/Arrows/back.png";

import s from "./pagination.module.css";

function Pagination (props) {
    
    //------------------------------------------------------------------//
    const allPokemons = useSelector((state => state.pokemonFilter));
    const count = 12;
    const [page, setPage] = useState(1);
    
    const pokePages = Math.ceil(allPokemons.length / count); //Se define la cantidad de paginas con los pokemons que tendra
    const paginate = allPokemons?.slice(
        (page - 1) * count,
        page * count
    ) //Define el corte por el cual va a arrancar la siguiente paginacion
    const handleChange = (e) => {
        if (e.target.name === "-") {if (page > 1) {setPage(page - 1)}
        } else {if (page < pokePages) {setPage(page + 1)}}
    }
    const index = [];
    for (let i = 1; i < pokePages; i++) {
        index.push(i)
    }

    return (
        <div>
            <div className={`${s.buttons_ctn}`}>
                <img src={Back} alt="back" className={`${s.button_move}`} onClick={handleChange} name="-"/>
                <img src={Next} alt="next" className={`${s.button_move}`} onClick={handleChange} name="+"/>
            </div>
            <div className={`${s.card_place}`}>
            {paginate?.map((e) => {
                    return (
                        <Card
                            key={e.id}
                            id={e.id}
                            name={e.name}
                            img={e.img}
                            hp={e.hp}
                            attack={e.attack}
                            defense={e.defense}
                            speed={e.speed}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Pagination;