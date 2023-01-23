import { Link } from "react-router-dom";

import ButtonPositive from "../../components/ButtonPN/ButtonPositive";
import ButtonNegative from "../../components/ButtonPN/ButtonNegative";
import GIF from "../../assets/pikachufeliz.gif"

import s from "./HomeScreen.module.css";

function HomeScreen () {

    const OnClose = () => {

    }

    return (
        <main className={`${s.main}`}>
            <div className={`${s.ctn}`}>
                <div>
                    <img src={GIF} alt="pikachu-gif" className={`${s.pikachu}`} />
                </div>
                <div className={`${s.div_buttons}`}>
                    <Link to="/home">
                        <ButtonPositive>Start</ButtonPositive>
                    </Link>
                    <ButtonNegative onClick={OnClose}>Close</ButtonNegative>
                </div>
            </div>
        </main>
    )
}

export default HomeScreen;

