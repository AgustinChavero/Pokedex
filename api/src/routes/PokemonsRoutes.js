const {Router} = require("express");
const {
    fusionPokemon,
    getAllApi,
    getByIDApi,
    getByNameApi,
    getAllDB,
    getByIDDB,
    getByNameDB,
    createPokemon
} = require("../controllers/PokemonsController");

const router = Router();

router.get("/", async (req, res) => {
    const {name} = req.query;
    
    if (name) {
        try {
            var pokemonByName = await getByNameApi(name)
            if (pokemonByName.error) {
                pokemonByName = await getByNameDB(name)
            }
            return res.status(200).json(pokemonByName)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    } else {
        try {
            var pokemons = await fusionPokemon();
            return res.status(200).json(pokemons)
        } catch (error) {
            return res.status(404).json(error.message)
        }
    }
})

router.get("/:id", async (req, res) => {
    const {id} = req.params

    try {
        var pokemonByID = await getByIDApi(id)
        if (pokemonByID.error) {
            pokemonByID = await getByIDDB(id)
        }
        return res.status(200).json(pokemonByID)
    } catch (error) {
        return res.status(404).json(error.message)
    }
})

router.post("/", async (req, res) => {
    const {name, type, hp, attack, defense, speed, height, weight, abilityOne, abilityTwo, moveOne, moveTwo} = req.body;
    try {
        const newPokemon = await createPokemon(name, type, hp, attack, defense, speed, height, weight, abilityOne, abilityTwo, moveOne, moveTwo)
        return res.status(200).json(newPokemon)
    } catch (error) {
        return res.status(404).json(error.message)
    }
})

module.exports = router;