import { useSelector } from "react-redux";

const TypesData = () => {
    const types = useSelector(state=>state.pokemonsTypes)

    return (
        <div>
            {types?.map(type=>{
                return <p key={type.name}>
                    {type.name}
                </p>
            })}
        </div>
    )

}
export default TypesData;

