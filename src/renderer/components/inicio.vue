<template lang="html">
  <div class="inicio" id="inicio">
  <div class="title">
  <h1>¿Qué te gustaría hacer?</h1>
</div>
<searchbar></searchbar>
  <div class="tarjeta">
    <div class="menu">
      <a href="#/pokedex">
        <div class="pokedexMenu">
          <img src="../assets/assets/img/pokedex.png">
        <h3>Investigar en la <br>pokédex</h3>
      </div>
    </a>
    <a href="#/editor">
      <div class="editorMenu">
        <img src="../assets/assets/img/editor.png">
        <h3>Crear pokémon <br>con el editor</h3>
      </div>
    </a>
      <a href="#/calculadora">
      <div class="calculadoraMenu">
        <img src="../assets/assets/img/calculadora.png">
        <h3>Analizar con la <br>calculadora</h3>
      </div>
      </a>
      <a href="#/equipos">
      <div class="equiposMenu">
        <img src="../assets/assets/img/equipos.png">
        <h3>Descubrir tácticas <br>con equipos</h3>
      </div>
    </a>

  </div>
  <div class="bugReport">
    <a href="#/bug">
    <h4>Reportar error</h4>
  </a>
  </div>

</div>
</div>
</template>

<script>
</script>

<style lang="css">

#inicio{
  overflow: hidden;
}
.title {
  margin-top: 105px;
}

.tarjeta {
	width: auto;
	height: auto;
  position: absolute;
  bottom:0;
  top:0;
  left:0;
  right:0;
	border-radius: 14px;
	box-shadow: 0 2px 10px 10px rgba(0, 0, 0, 0.1);
  margin-left: 70px;
  margin-right: 70px;
  margin-top: 185px;
  margin-bottom: 40px;
}
.menu{
  position: relative;
  }
.pokedexMenu{
  width:25%;
  height: 25%;
  float: left;
  display: block; /*for the img inside your div */
margin: 0 auto;
text-align: center;
margin-top: 30px;

}
.editorMenu{
  width:25%;
     height: 25%;
     float: left;
     display: block; /*for the img inside your div */
margin: 0 auto;
text-align: center;
margin-top: 30px;

}
.calculadoraMenu{
  width:25%;
  height: 25%;
  float: left;
  display: block; /*for the img inside your div */
margin: 0 auto;
text-align: center;
margin-top: 30px;

}
.equiposMenu{
  width:25%;
  height: 25%;
  float: left;
  display: block; /*for the img inside your div */
margin: 0 auto;
text-align: center;
margin-top: 30px;

}
.bugReport{
  text-align: center;
  margin-top: 331px;
}
</style>
