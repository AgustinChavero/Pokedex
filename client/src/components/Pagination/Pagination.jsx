import { useState } from "react";
import { useSelector } from "react-redux";

import Card from "./Cards/Card"

import Next from "../../assets/Arrows/next.png";
import Back from "../../assets/Arrows/back.png";

import s from "./pagination.module.css";

function Pagination (props) {
    
    //------------------------------------------------------------------//
    const allPokemons = useSelector((state => state.pokemonFilter));
    const count = 12; //Definimos la cantidad de cards que habra por pagina
    const [page, setPage] = useState(1);
    
    const pokePages = Math.ceil(allPokemons.length / count); //Se define la cantidad de paginas con los pokemons que tendra en base a los que trajimos
    const paginate = allPokemons?.slice( //Define el corte por el cual va a arrancar la siguiente paginacion
        (page - 1) * count, //Pagina arranca por uno, por lo tanto se resta 1 y luego se multiplica por count para definir cuantos pokemos pondremos
        page * count //Aca se define el corte por que hablamos
    ) 
    const handleChange = (e) => { //Con esto definimos el movimiento entre las paginas con los botones
        if (e.target.name === "-") {
            if (page > 1) {
                setPage(page - 1)
            }
        } else {
            if (page < pokePages) {
                setPage(page + 1)
            }
        }
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