<template>
  <v-layout row wrap>
    <v-flex xs4 v-for="pelicula in peliculas" :key="pelicula._id">
      <v-card>
        <v-card-title primary-title>
          <div>
            <div class="headline">
              <v-btn text v-bind:to="`/peliculas/${pelicula._id}`">
                {{ pelicula.nombre }}
              </v-btn>
              </div>
            <span class="grey--text">{{ pelicula.anho_pub }} &middot; {{
            pelicula.genero }}</span>
          </div>
        </v-card-title>
        <v-card-text>
          {{ pelicula.descripcion }}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from 'axios';

export default {
  name: 'Peliculas',
  // data() {
  //   return {
  //     peliculas: [],
  //   };
  // },
  computed:{
    peliculas(){
      return this.$store.getters.obtenerPeliculas;
    }
  },
  mounted() {
    this.$store.dispatch(obtenerPeliculas());
  },
  methods: {
    async obtenerPeliculas() {
      // const token = window.localStorage.getItem('auth');
      return axios({
        method: 'get',
        url: '/peliculas',
        // headers: {
        //   Authorization: `JWT ${token}`,
        //   'Content-Type': 'application/json',
        // },
      })
        .then((respuesta) => {
          this.peliculas = respuesta.data.peliculas;
          this.usuario_actual = respuesta.data.usuario_actual;
        })
        .catch(() => {
        });
    },
  },
};
</script>
