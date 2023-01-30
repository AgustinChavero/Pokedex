import LoadingGIF from "../../../assets/loading.gif"

import s from "./Loading.module.css"

function Loading () {
    return (
        <div className={`${s.loading_ctn}`}>
            <img src={LoadingGIF} alt="" />
        </div>
    )
}

export default Loading;