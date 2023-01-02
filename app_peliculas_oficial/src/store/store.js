import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    peliculas: []
  },
  getters: {
    obtenerPeliculas: state => state.peliculas
  },
  mutations: {
    PELICULAS: (state, payload) => {
      state.peliculas = payload;
    },
    AGREGAR_PELICULA: (state, payload) => {
      state.peliculas.unshift(payload);
    }
  },
  actions: {
    agregarPeliculas: (context, payload) => {
      return axios({
        method: "post",
        data: payload,
        url: "/peliculas",
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(respuesta => {
          context.commit("AGREGAR_PELICULA", respuesta.data);
          this.$swal(
            "¡Felicidades!",
            "Pelicula agregada satisfactoriamente",
            "success"
          );
        })
        .catch(() => {
          this.$swal("Error", "No se pudo agregar la pelicula", "error");
        });
    },
    obtenerPeliculas: (context, payload) => {
      axios({
        method: "get",
        url: "/peliculas"
      })
        .then(respuesta => {
          context.commit("PELICULAS", respuesta.data.peliculas);
        })
        .catch(() => {});
    }
  }
});
