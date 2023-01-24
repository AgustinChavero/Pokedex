import { useState } from "react";
import { useDispatch } from "react-redux";
import { OrderPokemonsAZ } from "../../redux/actions";


import AZ from "../../assets/Types/az.png";
import ZA from "../../assets/Types/za.png";

function Order () {
    const dispatch = useDispatch()
    const [state, setState] = useState("")
    const onClick = (e) => {
        console.log(e.target.name)
        setState(e.target.name)
    }
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(OrderPokemonsAZ(state))
    }

    return (
        <form onSubmit={onSubmit}>
            <button onClick={onClick} className="buttonImage">
                <img src={AZ} alt="" className="image" name="ascendent"/>
            </button>
            <button onClick={onClick} className="buttonImage">
                <img src={ZA} alt="" className="image" name="descendent"/>
            </button>
        </form>
    )
}

export default Order;