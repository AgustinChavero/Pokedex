import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";

import Pagination from "../../components/Pagination/Pagination";
import FilterByType from "../../components/FilterByType/FilterByType";
import Order from "../../components/Order/Order"

import s from "./Home.module.css";

function Home () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllPokemons());
    }, [])
    return (
        <main>
            <div className={`${s.ft_ctn}`}>
                <FilterByType/>
                <Order/>
            </div>
            <div className={`${s.cards_ctn}`}>
                <Pagination/>
            </div>
        </main>
    )
}

export default Home;