const { pokemon, type } = require('../../db');
const { v4: uuidv4 } = require('uuid');

const createPokemon = async (id, name, vida, ataque, defensa, velocidad, altura, peso, type) =>
  await pokemon.create({
    id: uuidv4(),
    name,
    vida,
    ataque,
    defensa,
    velocidad,
    altura,
    peso,
    type,
    isDB: true,
  });

  module.exports = {
    createPokemon,
  }
