import axios from "axios";

export const GET_ALL_POKEMONS = "GET_ALL_POKEMONS"
export const GET_POKEMON_DB = "GET_POKEMON_DB"
export const GET_POKEMON_API = "GET_POKEMON_API"
export const GET_POKEMON_BY_ID = "GET_POKEMON_BY_ID"
export const GET_POKEMON_BY_NAME = "GET_POKEMON_BY_NAME"
export const GET_POKEMONS_TYPES = "GET_POKEMONS_TYPES"
export const FILTER_POKEMONS_BY_TYPES = "FILTER_POKEMONS_BY_TYPES"
export const FILTER_POKEMONS_BY_TYPES_COMBINATED = "FILTER_POKEMONS_BY_TYPES_COMBINATED"
export const ORDER_POKEMONS_AZ_ZA = "ORDER_POKEMONS_AZ_ZA"
export const ORDER_POKEMONS_ATTACK = "ORDER_POKEMONS_ATTACK"
export const DELETE_POKEMON_DB = "DELETE_POKEMON_DB"


export const getAllPokemons = () => {
    return async function(dispatch) {
        const response = await axios.get("http://localhost:3001/pokemons");
        const pokemons = response.data;
        dispatch({
            type: GET_ALL_POKEMONS, payload: pokemons
        })
    }
}

export const getPokemonDB = () => {
    return ({
        type: GET_POKEMON_DB
    })
} 

export const getPokemonAPI = () => {
    return ({
        type: GET_POKEMON_API
    })
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


export const deletePokemonDB = (id) => {
    return async function (dispatch) {
        const response = await axios.delete(`http://localhost:3001/pokemons/${id}`);
        const pokemonDeleted = response.data
        dispatch({
            type: DELETE_POKEMON_DB,
            payload: pokemonDeleted
        })
    }
}

export const getPokemonByName = (name) => {
    return async function (dispatch) {
        const response = await axios.get(`http://localhost:3001/pokemons?name=${name}`)
        const pokemons = response.data.name;
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
export const OrderPokemonsAZZA = (state) => {
    return ({
        type: ORDER_POKEMONS_AZ_ZA,
        payload: state
    })
}
export const OrderPokemonsAttack = (state) => {
    return ({
        type: ORDER_POKEMONS_ATTACK,
        payload: state
    })
}