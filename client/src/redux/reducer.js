import { GET_ALL_POKEMONS, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, GET_POKEMONS_TYPES, ORDER_POKEMONS_AZ_ZA, FILTER_POKEMONS_BY_TYPES, FILTER_POKEMONS_BY_TYPES_COMBINATED } from "./actions";

const initialState = {
    allPokemons: [],
    pokemonFilter: [],
    pokemonDetail: [],
    pokemonsTypes: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_POKEMONS : return {
            ...state,
            allPokemons: action.payload,
            pokemonFilter: action.payload
        }
        case GET_POKEMON_BY_ID : return {
            ...state,
            pokemonDetail: action.payload
        }
        case GET_POKEMON_BY_NAME : return {
            ...state,
            pokemonFilter: state.allPokemons.filter((e) => e.name === action.payload)
        }
        case GET_POKEMONS_TYPES : return {
            ...state,
            pokemonsTypes: action.payload
        }
        case FILTER_POKEMONS_BY_TYPES : return {
            ...state,
            pokemonFilter: state.allPokemons.filter((e) => e.type.includes(action.payload))
        }
        case FILTER_POKEMONS_BY_TYPES_COMBINATED : return {
            ...state,
            pokemonFilter: state.allPokemons.filter((e) => e.type.includes(action.payload.first) && e.type.includes(action.payload.second))
        }
        case ORDER_POKEMONS_AZ_ZA : return {
            ...state,
            pokemonFilter: [...state.pokemonFilter].sort((a, b) => {
                if (action.payload.value === "ascendent") {
                    if (a[action.payload] > b[action.payload]) {
                        return 1;
                    } else return -1;
                } else {
                    if (a[action.payload.sort] > b[action.payload.sort]) {
                        return -1;
                    } else return 1;
                }
            })
        }
        default: return state;
    }
};

export default reducer;