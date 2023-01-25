import { Link } from "react-router-dom";

import Creator from "../../assets/01/creator.jpeg"

import Linkedin from "../../assets/Icons/linkedin.png"
import Github from "../../assets/Icons/github.png"

import s from "./AboutUs.module.css"

function AboutUs () {
    return (
        <div className={`${s.about_us_ctn}`}>
            <div className={`${s.about_us}`}>
                <div className={`${s.creator_ctn}`}>
                    <img src={Creator} alt="" className={`${s.image_creator}`}/>
                </div>
                <div className={`${s.text_ctn}`}>
                    <div className={`${s.name_ctn}`}>
                        <h1>Agustin Daniel Orellano Chavero</h1>
                    </div>
                    <p>Quiero agradecer al profesor y al equipo de enseñanza por brindarme una excelente experiencia en el curso de programación. Aprendí mucho y estoy emocionado de poner en práctica lo que aprendí. Gracias por su dedicación y paciencia en ayudarme a alcanzar mis metas.</p>
                    <div className={`${s.icons_link_ctn}`}>
                        <a href="https://www.linkedin.com/in/agustin-daniel-chavero-267378255/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin" className={`${s.icons_link}`}/></a>
                        <a href="https://github.com/AgustinChavero" target="_blank" rel="noreferrer"><img src={Github} alt="github" className={`${s.icons_link}`}/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;