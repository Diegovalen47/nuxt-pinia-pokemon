<template>
  <v-row>
    <PokemonCard
      v-for="pokemon in pokemons" 
      :pokemon="pokemon" 
    />
  </v-row>
</template>

<script>
import { usePokemonStore } from '@/store/indexPinia'
export default {
  name: 'IndexPage',
  data() {
    return {
      pokemonsStore: usePokemonStore(),
    }
  },
  computed: {
    pokemons() {
      return this.pokemonsStore.pokemons
    }
  },
  async created() {
    await this.pokemonsStore.fetchPokemons()
  },
}
</script>
