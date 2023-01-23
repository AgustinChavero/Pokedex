import "./ButtonPN.css";

function ButtonPositive ({children, onClick}) {
    return (
        <button className="btn btnPositive" onClick={onClick}>
            {children}
        </button>
    )
}

export default ButtonPositive;