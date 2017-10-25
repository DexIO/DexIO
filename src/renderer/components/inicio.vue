<template lang="html">
  <div class="inicio" id="inicio">
  <div class="title">
  <h1>¿Qué te gustaría hacer?</h1>
</div>
<searchbar></searchbar>
<div class="tarjetasInicio">
  <div class="col-7">
    <div class="tarjetaPokedex">
      <div class="col-3 imgInicio">
        <img src="../assets/assets/img/pokedex.png" alt="">
      </div>
    </div>
  </div>
  <div class="col-5">
    <div class="tarjetaEditor">

    </div>
  </div>
  <div class="col-5">
    <div class="tarjetaEquipos">

    </div>
  </div>
  <div class="col-7">
    <div class="tarjetaCalculadora">

    </div>
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
min-height:420px;
}
.tarjetaPokedex{
  width: 98%;
  height: 11.5625em;
  background: linear-gradient(90deg, #DF1515, #FC7272);
border-radius: 12px;
box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
overflow:visible;

}
.tarjetaEditor{
  width: 98%;
  height: 11.5625em;
  background: linear-gradient(90deg, #FF7406, #FFDF3D);
  border-radius: 12px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
  float: right;
  overflow:visible;

}
.tarjetaEquipos{
  width: 98%;
  height: 11.5625em;
  background: linear-gradient(90deg, #05745F, #3BDFD2);
  border-radius: 12px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
  margin-top: 10px;
  overflow:visible;

}
.tarjetaCalculadora{
  width: 98%;
  height: 11.5625em;
  background: linear-gradient(90deg, #015FDF, #1ED2FC);
  border-radius: 12px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.25);
  float: right;
  margin-top: 10px;
  overflow:visible;
}
.imgInicio{}
</style>
