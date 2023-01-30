import "./PositiveNegative.css";

function ButtonNegative ({children, onClick}) {
    return (
        <button className="btn btnNegative" onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonNegative;