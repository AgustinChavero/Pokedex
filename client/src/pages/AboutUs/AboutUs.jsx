import { Link } from "react-router-dom";

import Creator from "../../assets/01/creator.jpeg"

import Linkedin from "../../assets/Icons/linkedin.png"
import Github from "../../assets/Icons/github.png"
import JavaScript from "../../assets/Icons/javascript.png"
import ReactJS from "../../assets/Icons/react.png"
import ReactRedux from "../../assets/Icons/redux.png"
import CSS from "../../assets/Icons/css.png"
import SQL from "../../assets/Icons/sql.png"

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
                    <p>I want to thank the professor and the teaching team for giving me an excellent experience in the programming course. I learned a lot and am excited to put what I learned into practice. Thank you for your dedication and patience in helping me achieve my goals.</p>
                    <div className={`${s.icons_link_ctn}`}>
                        <a href="https://www.linkedin.com/in/agustin-daniel-chavero-267378255/" target="_blank" rel="noreferrer"><img src={Linkedin} alt="linkedin" className={`${s.icons_link}`}/></a>
                        <a href="https://github.com/AgustinChavero" target="_blank" rel="noreferrer"><img src={Github} alt="github" className={`${s.icons_link}`}/></a>
                    </div>
                </div>
            </div>
            <div className={`${s.tech_ctn}`}>
                <div className={`${s.tech}`}>
                    <h1 className={`${s.tech_tittle}`}>Technologies used in this project</h1>
                    <div className={`${s.icons_tech_ctn}`}>
                        <div className={`${s.icons_tech}`}>
                            <h3 className={`${s.tech_tittle}`}>SQL</h3>
                            <img src={SQL} alt="" className={`${s.icons_t}`}/>
                        </div>
                        <div className={`${s.icons_tech}`}>
                            <h3 className={`${s.tech_tittle}`}>JS</h3>
                            <img src={JavaScript} alt="" className={`${s.icons_t}`}/>
                        </div>
                        <div className={`${s.icons_tech}`}>
                            <h3 className={`${s.tech_tittle}`}>React</h3>
                            <img src={ReactJS} alt="" className={`${s.icons_t}`}/>
                        </div>
                        <div className={`${s.icons_tech}`}>
                            <h3 className={`${s.tech_tittle}`}>Redux</h3>
                            <img src={ReactRedux} alt="" className={`${s.icons_t}`}/>
                        </div>
                        <div className={`${s.icons_tech}`}>
                            <h3 className={`${s.tech_tittle}`}>CSS</h3>
                            <img src={CSS} alt="" className={`${s.icons_t}`}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;