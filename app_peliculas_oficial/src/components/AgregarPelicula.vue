<template>
  <v-form v-model="validado" ref="form" lazy-validation>
    <v-text-field label="Nombre:" v-model="nombre" :rules="reglasNombre" required></v-text-field>
    <v-text-field label="Descripción:" v-model="descripcion" multi-line required
      :rules="reglasDescripcion"></v-text-field>
    <v-select label="Año de publicación:" v-model="anho_pub" :items="anhos" required :rules="reglasAnhoPub"></v-select>
    <v-text-field label="Género:" v-model="genero" required :rules="reglasGenero"></v-text-field>
    <v-btn @click="enviar" :disabled="!validado">
      Enviar
    </v-btn>
    <v-btn @click="limpiar">Limpiar</v-btn>
  </v-form>
</template>
<script>
//import axios from 'axios';

export default {
  data: () => ({
    validado: true,
    nombre: "",
    reglasNombre: [v => !!v || "Se requiere el nombre de la película"],
    descripcion: "",
    reglasDescripcion: [
      v => !!v || "Se requiere la descripción de la película"
    ],
    genero: "",
    reglasGenero: [
      v => !!v || "Se requiere el género de la película",
      v =>
        (v && v.length <= 80) ||
        "El género debe de ser menor o igual a 80 caracteres"
    ],
    anho_pub: "",
    reglasAnhoPub: [
      v => !!v || "Se requiere establecer el año de publicación de la película"
    ],
    select: null,
    anhos: [
      "2022",
      "2021",
      "2020",
      "2019",
      "2018",
      "2017",
      "2016",
      "2015",
      "2014",
      "2013",
      "2012",
      "2011",
      "2010"
    ]
  }),
  methods: {
    enviar() {
      if (this.$refs.form.validate()) {
        //   // Realizar una acción
        //   // Agrégame una película por favor;
        //   return axios({
        //     method: 'post',
        //     data: {
        //       nombre: this.nombre,
        //       descripcion: this.descripcion,
        //       anho_pub: this.anho_pub,
        //       genero: this.genero,
        //     },
        //     url: '/peliculas',
        //     headers: {
        //       'Content-Type': 'application/json',
        //     },
        //   })
        //     .then(() => {
        //       this.$swal(
        //         '¡Excelente!',
        //         '¡Película agregada satisfactoriamente!',
        //         'success',
        //       );
        //       this.$router.push({ name: 'Inicio' });
        //       this.$refs.form.reset();
        //     })
        //     .catch(() => {
        //       this.$swal(
        //         '¡Error!',
        //         'No se pudo agregar la película, verifique con el administrador o con el desarrollador que hizo la aplicación',
        //         'error',
        //       );
        //     });
        const pelicula = {
          nombre: this.nombre,
          descripcion: this.descripcion,
          anho_pub: this.anho_pub,
          genero: this.genero
        };
        this.$store.dispatch("agregarPelicula", pelicula);
        this.$refs.form.reset();
        this.$router.push({ name: "Inicio" });
      }
      return true;
    },
    limpiar() {
      this.$refs.form.reset();
    }
  }
};
</script>
