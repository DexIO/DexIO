<template lang="html">
  <div class="ficha">
    <div class="col-6">

      <img class="imagen_pk" src="../../assets/assets/img/132.png" />
      <div class="tipo">
        <normal></normal>
      </div>
    </div>
    <div class="col-6">
      <h1 class="especie">#132 Ditto</h1>
      <h5 class="generacion">Primera generación</h5>
      <h5 class="generacion">Pokémon transformación</h5>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.ficha{
  margin-top: 105px;
  margin-left: 70px;
  margin-right: 70px;
}
.tipo{
  display: table;
  margin: 0 auto;
}
.especie{
  margin: 0px;
}
.generacion{
  color: #157FF3;
  margin: 10px;
  font-size: 36px;
}
.imagen_pk{
  width: 80%;
  display: table;
  margin: 0 auto;
}
</style>
