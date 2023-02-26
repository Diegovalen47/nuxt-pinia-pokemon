import Pokemon from '@/models/pokemon.js'

export const state = () => ({
  pokemons: []
})

export const mutations = {
  changePokemons(state, payload) {
    state.pokemons = payload
  }
}

export const actions = {
  async fetchPokemons({ state, commit }) {
    const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
    const response = await this.$axios.$get(url)
    let newPokemons = []
    for (let i = 0; i < response.results.length; i++) {
      let pokemonData = {}
      pokemonData.name = response.results[i].name
      const specific_pokemon = await this.$axios.$get(response.results[i].url)
      const spedific_pokemon_data = await this.$axios.$get(specific_pokemon.forms[0].url)
      pokemonData.id = spedific_pokemon_data.id
      pokemonData.image = spedific_pokemon_data.sprites.front_default
      pokemonData.types = specific_pokemon.types.map(type => type.type.name)
      const newPokemon = new Pokemon(pokemonData)
      newPokemons.push(newPokemon)
    }
    commit('changePokemons', newPokemons)
  }
}