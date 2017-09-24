<template lang="html">
  <div>
    <section class="content">
    <div class="title"><h1>Fichas técnicas</h1></div>
    <div class="wrap">
    		<input type="radio" name="view-filter" id="list-view" class="list-view-radio view-radio" checked><label id="list" for="list-view"><i  class="fa fa-list-ul"></i></label>

    		<input type="radio" name="view-filter" id="grid-view" class="grid-view-radio view-radio"><label id="grid" for="grid-view"><i class="fa fa-th"></i></label>
    <div class="">
      <searchbar id="pokedex"></searchbar>
    </div>

		<div class="content-container">
			<article class="block-item">
				<img src="../assets/assets/img/1.png">
				<div class="entry-content">
          <h5>#001</h5>
					<h5 class="entry-title">Bulbasaur</h5>
          <h5>Pokémon semilla</h5>
					<p>
            <planta></planta> <veneno></veneno>
          </p>
				</div>
			</article>

			<article class="block-item">
				<img src="../assets/assets/img/2.png">
				<div class="entry-content">
          <h5>#002</h5>
					<h5 class="entry-title">Ivysaur</h5>
          <h5>Pokémon semilla</h5>
          <p>
            <planta></planta> <veneno></veneno>
          </p>
				</div>
			</article>

			<article class="block-item">
				<img src="../assets/assets/img/3.png">
				<div class="entry-content">
          <h5>#003</h5>
					<h5 class="entry-title">Venusaur</h5>
          <h5>Pokémon semilla</h5>
          <p>
            <planta></planta> <veneno></veneno>
          </p>
				</div>
			</article>

			<article class="block-item">
        <img src="../assets/assets/img/3M.png">
				<div class="entry-content">
          <h5>#003</h5>
					<h5 class="entry-title">Mega Venusaur</h5>
          <h5>Pokémon semilla</h5>
          <p>
            <planta></planta> <veneno></veneno>
          </p>
				</div>
			</article>

			<article class="block-item">
        <img src="../assets/assets/img/4.png">
				<div class="entry-content">
          <h5>#004</h5>
					<h5 class="entry-title">Charmander</h5>
          <h5>Pokémon lagartija</h5>
          <p>
            <fuego></fuego>
          </p>
				</div>
			</article>

			<article class="block-item">
        <img src="../assets/assets/img/5.png">
				<div class="entry-content">
          <h5>#005</h5>
					<h5 class="entry-title">Charmeleon</h5>
          <h5>Pokémon lagartija</h5>
					<p>
            <fuego></fuego>
          </p>
				</div>
			</article>

			<article class="block-item">
				<img src="../assets/assets/img/6.png">
				<div class="entry-content">
          <h5>#006</h5>
					<h5 class="entry-title">Charizard</h5>
          <h5>Pokémon lagartija</h5>
					<p><fuego></fuego> <volador></volador></p>
				</div>
			</article>

      <article class="block-item">
				<img src="../assets/assets/img/6MX.png">
				<div class="entry-content">
          <h5>#006</h5>
					<h5 class="entry-title">Mega Charizard X</h5>
          <h5>Pokémon lagartija</h5>
					<p><fuego></fuego> <dragon></dragon></p>
				</div>
			</article>

      <article class="block-item">
        <img src="../assets/assets/img/6MY.png">
        <div class="entry-content">
          <h5>#006</h5>
					<h5 class="entry-title">Mega Charizard Y</h5>
          <h5>Pokémon lagartija</h5>
          <p><fuego></fuego> <volador></volador></p>
        </div>
      </article>


      <article class="block-item">
        <img src="../assets/assets/img/7.png">
        <div class="entry-content">
          <h5>#007</h5>
					<h5 class="entry-title">Squirtle</h5>
          <h5>Pokémon tortuguita</h5>
          <p><agua></agua></p>
        </div>
      </article>

		</div>


	<!-- End Your Code -->
</div><!-- .wrap -->
</section>

  </div>
</template>

<script>
</script>

<style lang="css">
.title {
  margin-top: 105px;
}

.wrap{

}
#pokedex{
  margin-top: -58px;
}
#list{
  margin-top: -47px;
  margin-left: 420px;
  font-size: 40px;
}
#grid{
  margin-top: -47px;
  font-size: 40px;
}

img {
  height: auto;
  max-width: 100%;
}



.screen-reader-text {
  height: auto;
  width: 1px;
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute !important;
}
.screen-reader-text:hover, .screen-reader-text:active, .screen-reader-text:focus {
  height: auto;
  width: auto;
  border-radius: 2px;
  box-shadow: 0 0 2px 2px rgba(0, 0, 0, 0.6);
  clip: auto !important;
  display: block;
  font-size: 0.875rem;
  font-weight: 700;
  left: 0.3125rem;
  line-height: normal;
  padding: 0.9375rem 1.4375rem 0.875rem;
  text-decoration: none;
  top: 0.3125rem;
  z-index: 100000;
}

.block-item {
  width: 100%;
  float: none;
  margin-bottom: 2.1875rem;
  text-align: center;
}
@media screen and (min-width: 40rem) {
  .block-item {
    float: left;
    display: block;
    margin-right: 2.35765%;
    width: 48.82117%;
    -webkit-transition: all 0.5s ease-in-out;
    transition: all 0.5s ease-in-out;
  }
  .block-item:last-child {
    margin-right: 0;
  }
  .block-item:nth-child(2n) {
    margin-right: 0;
  }
  .block-item:nth-child(2n+1) {
    clear: left;
  }
}
@media screen and (min-width: 64rem) {
  .block-item {
    float: left;
    display: block;
    margin-right: 2.35765%;
    width: 31.76157%;
  }
  .block-item:last-child {
    margin-right: 0;
  }
  .block-item:nth-child(2n) {
    margin-right: 2.35765%;
  }
  .block-item:nth-child(2n+1) {
    clear: none;
  }
  .block-item:nth-child(3n) {
    margin-right: 0;
  }
  .block-item:nth-child(3n+1) {
    clear: left;
  }
}
.block-item h1 {
  margin: 0;
}
.block-item img {
}

.view-radio {
  display: none;
}
.view-radio + label {
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 600;
  margin: 0 2.1875rem 2.1875rem 0;
}
.view-radio + label:hover {
  color: #ee4466;
}

.view-radio:checked + label {
  color: #ee4466;
}
.content-container{
  margin-left: 70px;
  margin-right: 70px;
}

.list-view-radio:checked ~ .content-container .block-item {
  width: 100%;
  margin-right: 70px;
  -webkit-transition: all 1s ease-in-out;
  transition: all 1s ease-in-out;
  text-align: left;
}
@media screen and (min-width: 48rem) {
  .list-view-radio:checked ~ .content-container .block-item {
    min-height: 18.75rem;
  }
}
.list-view-radio:checked ~ .content-container .block-item img {
  height: 4rem;
  width: 4rem;
  float: left;
  margin-right: 70px;
}
@media screen and (min-width: 48rem) {
  .list-view-radio:checked ~ .content-container .block-item img {
    height: 18.75rem;
    width: 18.75rem;
  }
}
.list-view-radio:checked ~ .content-container .block-item .entry-content {
  overflow: hidden;
}
</style>
