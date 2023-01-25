import "./PositiveNegative.css";

function ButtonNegative ({children}) {
    return (
        <button className="btn btnNegative">
            {children}
        </button>
    )
}

export default ButtonNegative;