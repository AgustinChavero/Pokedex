import GIF from "../../assets/error404.gif"

import s from "./NotFound.module.css"

function NotFound () {
    return (
        <div className={`${s.not_found_ctn}`}>
            <img src={GIF} alt="error404" className={`${s.not_found_img}`}/>
            <h1>Not Found 404</h1>
        </div>
    )
}

export default NotFound;