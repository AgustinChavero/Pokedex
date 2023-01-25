import "./PositiveNegative.css";

function ButtonPositive ({children, onClick, value}) {
    return (
        <button className="btn btnPositive" onClick={onClick} value={value}>
            {children}
        </button>
    )
}

export default ButtonPositive;