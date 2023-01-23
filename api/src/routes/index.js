const { Router } = require('express');
const express = require('express');
const morgan = require("morgan");
const PokemonsRoutes = require("./PokemonsRoutes")
const TypesRoutes = require("./TypesRoutes");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use(morgan("dev")); //Metodo middleware
router.use(express.json()); //Metodo convertidor

router.use("/types", TypesRoutes) //Declara las rutas de type
router.use("/pokemons", PokemonsRoutes) //Declara las rutas de Pokemons



module.exports = router;
