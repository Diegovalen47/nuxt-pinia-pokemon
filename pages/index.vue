<template>
  <v-row>
    <PokemonCard
      v-for="pokemon in pokemons" 
      :pokemon="pokemon" 
    />
  </v-row>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'IndexPage',
  computed: {
    ...mapState(['pokemons'])
  },
  async created() {
    await this.fetchPokemons()
  },
  methods: {
    ...mapActions(['fetchPokemons'])
  }
}
</script>
