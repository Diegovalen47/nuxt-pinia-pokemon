<template>
  <v-col cols="12" xl="6" lg="6" md="6">
    <v-row>
      <v-col cols="12" xl="4" lg="4" md="4">
        <v-img
          :src="pokemon.image"
          :alt="pokemon.name"
          max-width="100%"
          max-height="100%"
        />
      </v-col>
      <v-col cols="12" xl="8" lg="8" md="8">
        <v-card>
          <v-card-title class="d-flex flex-row justify-space-between">
            <div>
              <h3>
                {{ capitalizedName }}
              </h3>
            </div>
            <div>
              <h3>
                {{ pokemon.id }}
              </h3>
            </div>
          </v-card-title>
          <v-card-text>
            <v-row>
              <v-col cols="12">Types</v-col>
            </v-row>
            <v-row>
              <v-col 
                cols="3"
                v-for="type in pokemon.types"
                :key="type"
              >
                <h5>
                  {{ type }}
                </h5>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  name: 'PokemonCard',
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  computed: {
    capitalizedName() {
      return this.pokemon.name.charAt(0).toUpperCase() + this.pokemon.name.slice(1)
    }
  },
  mounted() {
    console.log(this.pokemon)
  }
}
</script>