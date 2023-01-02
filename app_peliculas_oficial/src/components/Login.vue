<template>
  <div>
    <div class="login">
      <a class="btn facebook" href="/login/facebook"> LOGIN CON FACEBOOK </a>
      <a class="btn google" href="/login/google"> LOGIN CON GOOGLE </a>
      <a class="btn linkedin" href="/login/linkedin"> LOGIN CON LINKEDIN </a>
    </div>
    <v-form v-model="valido" ref="formulario" lazy-validation>
      <v-text-field
        label="Email:"
        v-model="email"
        :rules="reglasEmail"
        required
      ></v-text-field>
      <v-text-field
        label="Contraseña:"
        v-model="contrasenha"
        type="password"
        required
      ></v-text-field>
      <v-btn @click="acceder" :disabled="!valido">Acceder</v-btn>
      <v-btn @click="limpiar">Limpiar</v-btn>
    </v-form>
  </div>
</template>
<script>
import axios from 'axios';
import bus from './../bus';

export default {
  data: () => ({
    valido: true,
    email: '',
    contrasenha: '',
    reglasEmail: [
      v => !!v || '¡Email requerido!',
      v => /\S+@\S+\.\S+/.test(v) || '¡Email inválido!',
    ],
  }),
  methods: {
    async acceder() {
      return axios({
        method: 'post',
        data: {
          email: this.email,
          contrasenha: this.contrasenha,
        },
        url: '/usuarios/login',
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((respuesta) => {
          window.localStorage.setItem('auth', respuesta.data.token);
          this.$swal('¡Felicidades!', '¡Usted está listo para iniciar con todo!', 'success');
          bus.$emit('actualizarUsuario');
          this.$router.push({ name: 'Inicio' });
        })
        .catch((error) => {
          const mensaje = error.response.data.mensaje;
          this.$swal('¡Error!', `${mensaje}`, 'error');
          this.$router.push({ name: 'Login' });
        });
    },
    limpiar() {
      this.$refs.formulario.reset();
    },
  },
};
</script>
