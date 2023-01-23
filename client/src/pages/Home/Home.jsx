import Pagination from "../../components/Pagination/Pagination";
import FilterByType from "../../components/FilterByType/FilterByType";

import "./Home.css";
import s from "./Home.module.css"
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllPokemons } from "../../redux/actions";

function Home (props) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPokemons());
    }, [])
    return (
        <main>
            <div className={`${s.ft_ctn}`}>
                <FilterByType/>
            </div>
            <div className={`${s.cards_ctn}`}>
                <Pagination/>
            </div>
        </main>
    )
}

export default Home;