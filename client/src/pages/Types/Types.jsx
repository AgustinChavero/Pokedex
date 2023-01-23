import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemonTypes } from "../../redux/actions"

import TypesData from "../../components/TypesData/TypesData";

function Types () {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPokemonTypes());
    }, [])
    return (
        <div>
            <TypesData/>
        </div>
    )
}

export default Types;