const {Pokemon, Type} = require("../db");
const axios = require("axios");

const getAllTypesApi = async () => {
    const response = await axios.get(`https://pokeapi.co/api/v2/type`)
    const types = response.data.results;
    const pokemonsTypes = [];
    for (let type of types) {
      let existingType = await Type.findOne({ where: { name: type.name } }); 
      // lo que hago aca es buscar si ya tengo un type con tal nombre lo guardo en vez de crear otro para evitar pisar el id
      if(existingType){
        pokemonsTypes.push(existingType);
      } else {
        const newType = await Type.create({
          name: type.name,
        });
        pokemonsTypes.push(newType);
      }
    }
    return pokemonsTypes;
};

module.exports = {
    getAllTypesApi
}