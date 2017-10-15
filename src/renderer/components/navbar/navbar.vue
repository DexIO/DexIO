<template>
<div>
  <nav class="fixed-nav-bar">
    <div class="navbody">
      <div class="navigation">
        <ul>
          <div class="dexioNav">
            <h2><router-link :to="{ name: 'inicio', params: {} }"><li>DexIO</li></router-link></h2></div>
          <div class="pokedexNav">
            <h4><router-link :to="{ name: 'pokedex', params: {} }"><li>Pokédex</li></router-link></h4></div>
          <div class="editorNav">
            <h4><router-link :to="{ name: 'editor', params: {} }"><li>Editor</li></router-link></h4></div>
          <div class="calculadoraNav">
            <h4><router-link :to="{ name: 'calculadora', params: {} }"><li>Calculadora</li></router-link></h4></div>
          <div class="equiposNav">
            <h4><router-link :to="{ name: 'equipos', params: {} }"><li>Equipos</li></router-link></h4></div>
          <div class="cajasNav">
            <h4><router-link :to="{ name: 'cajas', params: {} }"><li>Cajas</li></router-link></h4></div>
          <div class="masNav">
            <h4><router-link :to="{ name: 'mas', params: {} }"><li>Más funciones</li></router-link></h4></div>
          <div class="perfilNav">
            <h4><router-link :to="{ name: 'perfil', params: {} }"><li><div class="perfil"><img src="../../assets/assets/img/profile.png" /></div></li></router-link></h4></div>
        </ul>
      </div>
    </div>
    <navline></navline>
  </nav>

</div>
</template>

<script>
export default {
  name: 'navbar',
};
</script>

<style>
.col-1 {
  width: 8.33%;
}

.col-2 {
  width: 16.66%;
}

.col-3 {
  width: 25%;
}

.col-4 {
  width: 33.33%;
}

.col-5 {
  width: 41.66%;
}

.col-6 {
  width: 50%;
}

.col-7 {
  width: 58.33%;
}

.col-8 {
  width: 66.66%;
}

.col-9 {
  width: 75%;
}

.col-10 {
  width: 83.33%;
}

.col-11 {
  width: 91.66%;
}

.col-12 {
  width: 100%;
}
[class*="col-"] {
    float: left;
    padding-top: 10px;
}
input,
label,
select,
button,
textarea {
  margin: 0;
  border: 0;
  padding: 0;
  display: inline-block;
  vertical-align: middle;
  white-space: normal;
  background: none;
  line-height: 1;

  /* Browsers have different default form fonts */
  font-size: 13px;
  font-family: Arial;
}





/* Remove the stupid outer glow in Webkit */

input:focus {
  outline: 0;
}





/* Box Sizing Reset
-----------------------------------------------*/


/* All of our custom controls should be what we expect them to be */

input,
textarea {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}





/* These elements are usually rendered a certain way by the browser */

button,
input[type=reset],
input[type=button],
input[type=submit],
input[type=checkbox],
input[type=radio],
select {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}





/* Text Inputs
-----------------------------------------------*/

input[type=date],
input[type=datetime],
input[type=datetime-local],
input[type=email],
input[type=month],
input[type=number],
input[type=password],
input[type=range],
input[type=search],
input[type=tel],
input[type=text],
input[type=time],
input[type=url],
input[type=week] {}





/* Button Controls
-----------------------------------------------*/

input[type=checkbox],
input[type=radio] {
  width: 13px;
  height: 13px;
}





/* File Uploads
-----------------------------------------------*/

input[type=file] {}





/* Search Input
-----------------------------------------------*/


/* Make webkit render the search input like a normal text field */

input[type=search] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
}





/* Turn off the recent search for webkit. It adds about 15px padding on the left */

::-webkit-search-decoration {
  display: none;
}





/* Buttons
-----------------------------------------------*/

button,
input[type="reset"],
input[type="button"],
input[type="submit"] {
  /* Fix IE7 display bug */
  overflow: visible;
  width: auto;
}





/* IE8 and FF freak out if this rule is within another selector */

::-webkit-file-upload-button {
  padding: 0;
  border: 0;
  background: none;
}





/* Textarea
-----------------------------------------------*/

textarea {
  /* Move the label to the top */
  vertical-align: top;

  /* Turn off scroll bars in IE unless needed */
  overflow: auto;
}





/* Selects
-----------------------------------------------*/

select {}

select[multiple] {
  /* Move the label to the top */
  vertical-align: top;
}

@font-face {
  font-family: 'Fira Sans';
  /*a name to be used later*/
  src: url('../../assets/assets/fonts/FiraSans-Light.ttf');
  font-weight: 300;
  /*URL to font*/
}

@font-face {
  font-family: 'Fira Sans';
  /*a name to be used later*/
  src: url('../../assets/assets/fonts/FiraSans-Bold.ttf');
  font-weight: bold;
  /*URL to font*/
}

@font-face {
  font-family: 'Fira Sans';
  /*a name to be used later*/
  src: url('../../assets/assets/fonts/FiraSans-Medium.ttf');
  font-weight: 500;
  /*URL to font*/
}

html,
body {
  height: 100%;
  font-family: "Fira Sans";
  margin: 0px;
  background-color: #fff;
}

a {
  color: inherit;
  text-decoration: none;
}

h1 {
  font-family: 'Fira Sans';
  font-size: 48px;
  font-weight: bold;
  text-align: left;
  color: #000000;
  margin: 0;
  margin-left: 70px;
  margin-top: 15px;
}

h2 {
  font-family: 'Fira Sans';
  font-size: 48px;
  font-weight: 500;
  text-align: left;
  color: #262626;
  margin: 0;
}

h3 {
  font-family: 'Fira Sans';
  font-size: 24px;
  font-weight: 200;
  color: #000000;
  margin: 0px;
}

h4 {
  font-family: 'Fira Sans';
  font-size: 24px;
  font-weight: 300;
  color: #ee4466;
  margin: 0px;
}

h5 {
  font-family: 'Fira Sans';
  font-size: 25px;
  font-weight: 500;
  color: #262626;
  margin: 0px;
  text-align: left;
}

.navbody {
  width: 100%;
  height: 70px;
  margin-left: 30px;
  -webkit-app-region: drag;
}

.perfil {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #d8d8d8;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.5);
  overflow:hidden;

}

.perfilNav {
  margin-right: 100px;
  margin-top: -50px;
  float: right;
}

.pokedexNav {
  padding-top: 30px;
}


li {
  float: left;
  position: relative;
  padding: 8px;
  overflow: hidden;
}

li::after {
  background-color: #ee4466;
  content: "";
  width: 0;
  height: 3px;
  left: 0;
  bottom: 0;
  transition: width 0.35s ease 0s;
  position: absolute;
}

li.bi {
  background-color: #ee4466;
  content: "";
  width: 0;
  height: 3px;
  left: 0;
  bottom: 0;
  position: absolute;
}

li:hover::after {
  width: 100%;
}

.fixed-nav-bar {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
}
</style>
