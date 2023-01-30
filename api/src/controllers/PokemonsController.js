const {Pokemon, Type} = require("../db");
const axios = require("axios");

const getAllApi = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100`)
    const pokemon = []
    response.data.results.forEach(e => {
        pokemon.push(
            axios.get(e.url)
            .then((res) => res.data) //Si no colocamos esto no se termina de ejecutar nunca
        )
    });
    const infoPokemons = Promise.all(pokemon)
        .then((res) => res.map((urlIteration) => {return {
        id: urlIteration.id,
        name: urlIteration.name,
        img: urlIteration.sprites.other.dream_world.front_default,
        type: urlIteration.types.map((typeName) => typeName.type.name),
        hp: urlIteration.stats[0].base_stat,
        attack: urlIteration.stats[1].base_stat,
        defense: urlIteration.stats[2].base_stat,
        speed: urlIteration.stats[5].base_stat,
        height: urlIteration.height,
        weight: urlIteration.weight,
        }})
        )
    return await infoPokemons;
}

const getByIDApi = async (id) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        return {
            id: response.data.id,
            name: response.data.name, 
            img: response.data.sprites.other.dream_world.front_default,
            type: response.data.types.map((typeName) => typeName.type.name),
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            speed: response.data.stats[5].base_stat,
            height: response.data.height,
            weight: response.data.weight,
            abilityOne: response.data.abilities[0].ability.name,
            abilityTwo: response.data.abilities[1].ability.name,
            moveOne: response.data.moves[0].move.name,
            moveTwo: response.data.moves[1].move.name
        }
    } catch (error) {
        return {
            error: "No se encontro el Pokemon"
        }
    }
}

const getByNameApi = async (name) => {
    try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        return {
            id: response.data.id,
            name: response.data.name, 
            img: response.data.sprites.other.dream_world.front_default,
            type: response.data.types.map((typeName) => typeName.type.name),
            hp: response.data.stats[0].base_stat,
            attack: response.data.stats[1].base_stat,
            defense: response.data.stats[2].base_stat,
            speed: response.data.stats[5].base_stat,
            height: response.data.height,
            weight: response.data.weight
        }
    } catch (error) {
        return {
            error: "No se encontro el Pokemon"
        }
    }
}

//--------------------------------------------------

const getAllDB = async () => {
    const pokemons = await Pokemon.findAll();
    return pokemons;
}

const getByIDDB = async (id) => {
    const pokemon = await Pokemon.findOne({
        where: {
          id: id
        },});
    return pokemon;
}

const getByNameDB = async (name) => {
    const pokemon = await Pokemon.findOne({
        where: {name: name}
    });
    return pokemon;
}

const createPokemon = async (name, type, hp, attack, defense, speed, height, weight, abilityOne, abilityTwo, moveOne, moveTwo) => {
    const pokemonCreate = await Pokemon.create({name, type, hp, attack, defense, speed, height, weight, abilityOne, abilityTwo, moveOne, moveTwo});
    return pokemonCreate;
}

const toModifyInDB = async (id) => {
    const pokemonToModify = await Pokemon.update({id})
    return pokemonToModify;
}

const toDeleteInDB = async (id) => {
    const pokemonToDelete = await Pokemon.findByPk(id)
    await pokemonToDelete.destroy()
    return pokemonToDelete
}

//--------------------------------------------------

const fusionPokemon = async () => {
    const api = await getAllApi();
    const db = await getAllDB();
    return api.concat(db)
}

module.exports = {
    fusionPokemon,
    getAllApi,
    getByIDApi,
    getByNameApi,
    getAllDB,
    getByIDDB,
    getByNameDB,
    createPokemon,
    toModifyInDB,
    toDeleteInDB
}