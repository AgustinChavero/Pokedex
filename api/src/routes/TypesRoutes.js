const {Router} = require("express");

const {
    getAllTypesApi
} = require("../controllers/TypesController");

const router = Router();

router.get("/", async (req, res) => {
    try {
        const pokemonsTypes = await getAllTypesApi();
        return res.status(200).json(pokemonsTypes)
    } catch (error) {
        return res.status(404).json(error.message)
    }
})

module.exports = router;

/* 

[ ] GET /types:
Obtener todos los tipos de pokemons posibles
En una primera instancia deberán traerlos desde pokeapi y guardarlos en su propia base de datos y luego ya utilizarlos desde allí

*/