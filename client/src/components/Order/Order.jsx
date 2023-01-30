import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonAPI, getPokemonDB, OrderPokemonsAttack, OrderPokemonsAZZA } from "../../redux/actions";

import ButtonPositive from "../Buttons/ButtonPositive"

import s from "./Order.module.css"

function Order () {
    const dispatch = useDispatch()
    const [name, setName] = useState("")
    const [attack, setAttack] = useState("")
    const onClickAZZA = (e) => {
        setName(e.target.value)
        dispatch(OrderPokemonsAZZA(name))
    }
    const onClickAttack = (e) => {
        setAttack(e.target.value)
        dispatch(OrderPokemonsAttack(attack))
    }
    const onClickDB = (e) => {
        dispatch(getPokemonDB())
    }
    const onClickAPI = (e) => {
        dispatch(getPokemonAPI())
    }
    return (
        <div className={`${s.button_ctn}`}>
            <ButtonPositive onClick={onClickAZZA} value="descendent">
                A-Z
            </ButtonPositive>
            <ButtonPositive onClick={onClickAZZA} value="ascendent">
                Z-A
            </ButtonPositive>
            <ButtonPositive onClick={onClickAttack} value="ascendent">
                +Attack
            </ButtonPositive>
            <ButtonPositive onClick={onClickAttack} value="descendent">
                -Attack
            </ButtonPositive>
            <ButtonPositive onClick={onClickDB}>
                Locals
            </ButtonPositive>
            <ButtonPositive onClick={onClickAPI}>
                API
            </ButtonPositive>
        </div>
    )
}

export default Order;