<template lang="html">
  <div class="inicio" id="inicio">
  <div class="title">
  <h1>¿Qué te gustaría hacer?</h1>
</div>
<searchbar></searchbar>
<div class="tarjetasInicio">
  <div class="col-7">
  <router-link :to="{ name: 'pokedex', params: {} }">
    <div class="tarjetaPokedex">
      <div class="imgInicio">
        <img src="../assets/assets/img/pokedex.png" alt="">
      </div>
      <div class="pokedexText">
        <h2><span style="color: #ffffff">Pokédex</span></h2>
      </div>
    </div>
  </router-link>
  </div>
  <div class="col-5">
    <router-link :to="{ name: 'editor', params: {} }">
    <div class="tarjetaEditor">
      <div class="imgInicio">
        <img src="../assets/assets/img/editor.png" alt="">
      </div>
      <div class="pokedexText">
        <h2><span style="color: #ffffff">Editor</span></h2>
      </div>
    </div>
    </router-link>
  </div>
  <div class="col-5">
    <router-link :to="{ name: 'equipos', params: {} }">

    <div class="tarjetaEquipos">
      <div class="imgInicio">
        <img src="../assets/assets/img/equipos.png" alt="">
      </div>
      <div class="pokedexText">
        <h2><span style="color: #ffffff">Equipos</span></h2>
      </div>
    </div>
  </router-link>
  </div>
  <div class="col-7">
    <router-link :to="{ name: 'calculadora', params: {} }">
    <div class="tarjetaCalculadora">
      <div class="imgInicio">
        <img src="../assets/assets/img/calculadora.png" alt="">
      </div>
      <div class="pokedexText">
        <h2><span style="color: #ffffff">Calculadora</span></h2>
      </div>
    </div>
    </router-link>
  </div>
</div>
</div>
</template>

<script>
</script>

<style lang="css">

#inicio{
overflow-x: hidden;}
.title {
  margin-top: 105px;
}

.tarjetasInicio{
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 10px;
}
.tarjetaPokedex{
  width: 98%;
height: 31vh;
background-image: linear-gradient(45deg, #F5317F 0%, #FF7C6E 100%);
border-radius: 12px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
overflow:visible;
display: table;
}
.tarjetaEditor{
  width: 98%;
height: 31vh;
  background-image: linear-gradient(45deg, #FF8359 0%, #FFDF40 100%);
  border-radius: 12px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
  float: right;
  overflow:visible;
  display: table;


}
.tarjetaEquipos{
  width: 98%;
height: 31vh;
  background-image: linear-gradient(45deg, #54D169 0%, #AFF57A 100%);
  border-radius: 12px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
  margin-top: 10px;
  margin-bottom: 25px;
  overflow:visible;
  display: table;


}
.tarjetaCalculadora{
  width: 98%;
height: 31vh;
  background-image: linear-gradient(45deg, #1270E3 0%, #59C2FF 100%);
  border-radius: 12px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
  float: right;
  margin-top: 10px;
  margin-bottom: 25px;
  overflow:visible;
  display: table;

}
.imgInicio{
  padding-left:30pX;
  display: table-cell;
  border-spacing: 0px;
  vertical-align: middle;
  margin: 0;
}
.pokedexText{
  display: table-cell;
  vertical-align: middle;
}
</style>
