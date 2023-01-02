<template>
  <div class="hello">
    <h1> {{ msg }} </h1>
    <h1>El conteo es: {{ $store.state.conteo }} </h1>
    <!--<h1>El conteo es: {{ obtenerConteo }}</h1>-->
    <button class="btn btn-primary"
    @click="incrementar">Incrementar + </button>
    <button class="btn btn-primary"
    @click="decrementar">Decrementar - </button>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'HolaMundo',
  data() {
    return {
      msg: 'Bienvenido a su aplicacion Vue.js',
    };
  },
  computed: mapGetters([
    'obtenerConteo',
  ]),
  methods: mapActions([
    'incrementar',
    'decrementar',
  ]),
};
</script>
<!-- AGREGAMOS COMPONENTE -->
<style scoped>
</style>

