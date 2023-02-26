import { defineStore } from 'pinia'
import Pokemon from '@/models/pokemon.js'

export const usePokemonStore = defineStore('pokemons',{
  state: () => ({
    pokemons: []
  }),
  // Los getters son igual que en Vuex
  actions: {
    async fetchPokemons() {
      const url = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=20'
      const response = await this.$nuxt.$axios.get(url)
      let newPokemons = []
      for (let i = 0; i < response.data.results.length; i++) {
        let pokemonData = {}
        pokemonData.name = response.data.results[i].name
        const specific_pokemon = await this.$nuxt.$axios.get(response.data.results[i].url)
        const specific_pokemon_data = await this.$nuxt.$axios.get(specific_pokemon.data.forms[0].url)
        pokemonData.id = specific_pokemon_data.data.id
        pokemonData.image = specific_pokemon_data.data.sprites.front_default
        pokemonData.types = specific_pokemon_data.data.types.map(type => type.type.name)
        const newPokemon = new Pokemon(pokemonData)
        newPokemons.push(newPokemon)
      }
      this.pokemons = newPokemons
    }
  }
})
