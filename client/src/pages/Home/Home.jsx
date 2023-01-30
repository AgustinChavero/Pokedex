import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllPokemons } from "../../redux/actions";

import Pagination from "../../components/Pagination/Pagination";
import FilterByType from "../../components/FilterByType/FilterByType";
import Order from "../../components/Order/Order";
import Loading from "./Loading/Loading";

import s from "./Home.module.css";

function Home () {
    const dispatch = useDispatch();
    const [load, setLoad] = useState(true);
    useEffect(() => {
        setLoad(true)
        dispatch(getAllPokemons());
        setTimeout(() => {
            setLoad(false)
        }, 2000)
    }, [])
    return (
        <main className={`${s.main_ctn}`}>
            <div className={`${s.ft_ctn}`}>
                <FilterByType/>
                <Order/>
            </div>
            {load ? (<Loading/>) : (
                <div className={`${s.cards_ctn}`}>
                    <Pagination/>
                </div>
            )}
        </main>
    )
}

export default Home;