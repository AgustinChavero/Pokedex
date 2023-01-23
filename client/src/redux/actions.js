import axios from "axios";

export const CREATE_POKEMON = "CREATE_POKEMON";
export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_POKEMONS_TYPES = "GET_POKEMONS_TYPES"
export const FILTER_POKEMONS_BY_TYPES = "FILTER_POKEMONS_BY_TYPES"
export const FILTER_POKEMONS_BY_TYPES_COMBINATED = "FILTER_POKEMONS_BY_TYPES_COMBINATED"
export const ORDER_POKEMONS_BY_NAME = "ORDER_POKEMONS_BY_NAME"



export function createPokemon (pokemon) {
    return ({
            type: CREATE_POKEMON,
            payload: pokemon
    })
}

export const getAllPokemons = () => {
    return async function(dispatch) {
        const response = await axios.get("http://localhost:3001/pokemons");
        const pokemons = response.data;
        dispatch({
            type: GET_ALL_POKEMONS, payload: pokemons
        })
    }
}

export const getPokemonByID = (id) => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/pokemons/${id}`)
        const pokemons = response.data;
        dispatch({
            type: GET_POKEMON_BY_ID,
            payload: pokemons
        })
    }
}

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        const pokemons = response.data.name;
        console.log(pokemons)
        dispatch({
            type: GET_POKEMON_BY_NAME,
            payload: pokemons
        })
    }
}

export const getPokemonTypes = () => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/types`)
        const pokemonsTypes = response.data;
        dispatch({
            type: GET_POKEMONS_TYPES,
            payload: pokemonsTypes
        })
    }
}

export const filterPokemonByType = (type) => {
    return ({
        type: FILTER_POKEMONS_BY_TYPES,
        payload: type
    })
}

export const filterPokemonByTypeCombinated = (first, second) => {
    return ({
        type: FILTER_POKEMONS_BY_TYPES_COMBINATED,
        payload: {first, second}
    })
}

export const OrderPokemonsByName = (name) => {
    return ({
        type: ORDER_POKEMONS_BY_NAME,
        payload: name
    })
}