<template lang="html">
  <div>
      <section class="content">
          <div class="title">
              <h1>Fichas técnicas</h1>
          </div>
          <div class="wrap">
              <input type="radio" name="view-filter" id="list-view" class="list-view-radio view-radio">
              <label id="list" for="list-view">
                  <i  class="fa fa-list-ul"></i>
              </label>

              <input type="radio" name="view-filter" id="grid-view" class="grid-view-radio view-radio" checked>
              <label id="grid" for="grid-view"><i class="fa fa-th"></i>
              </label>
              <div class="">
                  <searchbar id="pokedex"></searchbar>
              </div>

              <div class="content-container">

                  <article class="block-item">
                      <router-link :to="{ name: '1', params: {} }">
                          <img src="../assets/assets/img/1.png">
                          <div class="entry-content">
                              <h3>#001</h3>
                              <h3 class="entry-title">Bulbasaur</h3>
                              <h3>Pokémon semilla</h3>
                              <p>
                                  <planta></planta>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '2', params: {} }">
                          <img src="../assets/assets/img/2.png">
                          <div class="entry-content">
                              <h3>#002</h3>
                              <h3 class="entry-title">Ivysaur</h3>
                              <h3>Pokémon semilla</h3>
                              <p>
                                  <planta></planta>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '3', params: {} }">
                          <img src="../assets/assets/img/3.png">
                          <div class="entry-content">
                              <h3>#003</h3>
                              <h3 class="entry-title">Venusaur</h3>
                              <h3>Pokémon semilla</h3>
                              <p>
                                  <planta></planta>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '3M', params: {} }">
                          <img src="../assets/assets/img/3M.png">
                          <div class="entry-content">
                              <h3>#003</h3>
                              <h3 class="entry-title">Mega Venusaur</h3>
                              <h3>Pokémon semilla</h3>
                              <p>
                                  <planta></planta>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '4', params: {} }">
                          <img src="../assets/assets/img/4.png">
                          <div class="entry-content">
                              <h3>#004</h3>
                              <h3 class="entry-title">Charmander</h3>
                              <h3>Pokémon lagartija</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '5', params: {} }">
                          <img src="../assets/assets/img/5.png">
                          <div class="entry-content">
                              <h3>#005</h3>
                              <h3 class="entry-title">Charmeleon</h3>
                              <h3>Pokémon llama</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '6', params: {} }">
                          <img src="../assets/assets/img/6.png">
                          <div class="entry-content">
                              <h3>#006</h3>
                              <h3 class="entry-title">Charizard</h3>
                              <h3>Pokémon llama</h3>
                              <p>
                                  <fuego></fuego>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '6MX', params: {} }">
                          <img src="../assets/assets/img/6MX.png">
                          <div class="entry-content">
                              <h3>#006</h3>
                              <h3 class="entry-title">Mega Charizard X</h3>
                              <h3>Pokémon llama</h3>
                              <p>
                                  <fuego></fuego>
                                  <dragon></dragon>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '6MY', params: {} }">
                          <img src="../assets/assets/img/6MY.png">
                          <div class="entry-content">
                              <h3>#006</h3>
                              <h3 class="entry-title">Mega Charizard Y</h3>
                              <h3>Pokémon llama</h3>
                              <p>
                                  <fuego></fuego>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '7', params: {} }">
                          <img src="../assets/assets/img/7.png">
                          <div class="entry-content">
                              <h3>#007</h3>
                              <h3 class="entry-title">Squirtle</h3>
                              <h3>Pokémon tortuguita</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '8', params: {} }">
                          <img src="../assets/assets/img/8.png">
                          <div class="entry-content">
                              <h3>#008</h3>
                              <h3 class="entry-title">Wartortle</h3>
                              <h3>Pokémon tortuga</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '9', params: {} }">
                          <img src="../assets/assets/img/9.png">
                          <div class="entry-content">
                              <h3>#009</h3>
                              <h3 class="entry-title">Blastoise</h3>
                              <h3>Pokémon marisco</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '9M', params: {} }">
                          <img src="../assets/assets/img/9M.png">
                          <div class="entry-content">
                              <h3>#009</h3>
                              <h3 class="entry-title">Mega Blastoise</h3>
                              <h3>Pokémon marisco</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '10', params: {} }">
                          <img src="../assets/assets/img/10.png">
                          <div class="entry-content">
                              <h3>#010</h3>
                              <h3 class="entry-title">Caterpie</h3>
                              <h3>Pokémon gusano</h3>
                              <p>
                                  <bicho></bicho>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '11', params: {} }">
                          <img src="../assets/assets/img/11.png">
                          <div class="entry-content">
                              <h3>#011</h3>
                              <h3 class="entry-title">Metapod</h3>
                              <h3>Pokémon capullo</h3>
                              <p>
                                  <bicho></bicho>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '12', params: {} }">
                          <img src="../assets/assets/img/12.png">
                          <div class="entry-content">
                              <h3>#012</h3>
                              <h3 class="entry-title">Butterfree</h3>
                              <h3>Pokémon mariposa</h3>
                              <p>
                                  <bicho></bicho>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '13', params: {} }">
                          <img src="../assets/assets/img/13.png">
                          <div class="entry-content">
                              <h3>#013</h3>
                              <h3 class="entry-title">Weedle</h3>
                              <h3>Pokémon oruga</h3>
                              <p>
                                  <bicho></bicho>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '14', params: {} }">
                          <img src="../assets/assets/img/14.png">
                          <div class="entry-content">
                              <h3>#014</h3>
                              <h3 class="entry-title">Kakuna</h3>
                              <h3>Pokémon capullo</h3>
                              <p>
                                  <bicho></bicho>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '15', params: {} }">
                          <img src="../assets/assets/img/15.png">
                          <div class="entry-content">
                              <h3>#015</h3>
                              <h3 class="entry-title">Beedrill</h3>
                              <h3>Pokémon abeja venenosa</h3>
                              <p>
                                  <bicho></bicho>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '15M', params: {} }">
                          <img src="../assets/assets/img/15M.png">
                          <div class="entry-content">
                              <h3>#015</h3>
                              <h3 class="entry-title">Mega Beedrill</h3>
                              <h3>Pokémon abeja venenosa</h3>
                              <p>
                                  <bicho></bicho>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '16', params: {} }">
                          <img src="../assets/assets/img/16.png">
                          <div class="entry-content">
                              <h3>#016</h3>
                              <h3 class="entry-title">Pidgey</h3>
                              <h3>Pokémon pajarito</h3>
                              <p>
                                  <normal></normal>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '17', params: {} }">
                          <img src="../assets/assets/img/17.png">
                          <div class="entry-content">
                              <h3>#017</h3>
                              <h3 class="entry-title">Pidgeotto</h3>
                              <h3>Pokémon pájaro</h3>
                              <p>
                                  <normal></normal>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '18', params: {} }">
                          <img src="../assets/assets/img/18.png">
                          <div class="entry-content">
                              <h3>#018</h3>
                              <h3 class="entry-title">Pidgeot</h3>
                              <h3>Pokémon pájaro</h3>
                              <p>
                                  <normal></normal>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '18M', params: {} }">
                          <img src="../assets/assets/img/18M.png">
                          <div class="entry-content">
                              <h3>#018</h3>
                              <h3 class="entry-title">Mega Pidgeot</h3>
                              <h3>Pokémon pájaro</h3>
                              <p>
                                  <normal></normal>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '19', params: {} }">
                          <img src="../assets/assets/img/19.png">
                          <div class="entry-content">
                              <h3>#019</h3>
                              <h3 class="entry-title">Ratatta</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '19A', params: {} }">
                          <img src="../assets/assets/img/19A.png">
                          <div class="entry-content">
                              <h3>#019</h3>
                              <h3 class="entry-title">Ratatta Alola</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <siniestro></siniestro>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '20', params: {} }">
                          <img src="../assets/assets/img/20.png">
                          <div class="entry-content">
                              <h3>#020</h3>
                              <h3 class="entry-title">Raticate</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '20A', params: {} }">
                          <img src="../assets/assets/img/20A.png">
                          <div class="entry-content">
                              <h3>#020</h3>
                              <h3 class="entry-title">Raticate Alola</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <siniestro></siniestro>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '21', params: {} }">
                          <img src="../assets/assets/img/21.png">
                          <div class="entry-content">
                              <h3>#021</h3>
                              <h3 class="entry-title">Spearow</h3>
                              <h3>Pokémon pajarito</h3>
                              <p>
                                  <normal></normal>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '22', params: {} }">
                          <img src="../assets/assets/img/22.png">
                          <div class="entry-content">
                              <h3>#022</h3>
                              <h3 class="entry-title">Fearow</h3>
                              <h3>Pokémon pico</h3>
                              <p>
                                  <normal></normal>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '23', params: {} }">
                          <img src="../assets/assets/img/23.png">
                          <div class="entry-content">
                              <h3>#023</h3>
                              <h3 class="entry-title">Ekans</h3>
                              <h3>Pokémon serpiente</h3>
                              <p>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '24', params: {} }">
                          <img src="../assets/assets/img/24.png">
                          <div class="entry-content">
                              <h3>#024</h3>
                              <h3 class="entry-title">Arbok</h3>
                              <h3>Pokémon cobra</h3>
                              <p>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '25', params: {} }">
                          <img src="../assets/assets/img/25.png">
                          <div class="entry-content">
                              <h3>#025</h3>
                              <h3 class="entry-title">Pikachu</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <electrico></electrico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '26', params: {} }">
                          <img src="../assets/assets/img/26.png">
                          <div class="entry-content">
                              <h3>#026</h3>
                              <h3 class="entry-title">Raichu</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <electrico></electrico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '26A', params: {} }">
                          <img src="../assets/assets/img/26A.png">
                          <div class="entry-content">
                              <h3>#026</h3>
                              <h3 class="entry-title">Raichu Alola</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <electrico></electrico>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '27', params: {} }">
                          <img src="../assets/assets/img/27.png">
                          <div class="entry-content">
                              <h3>#027</h3>
                              <h3 class="entry-title">Sandshrew</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '27A', params: {} }">
                          <img src="../assets/assets/img/27A.png">
                          <div class="entry-content">
                              <h3>#027</h3>
                              <h3 class="entry-title">Sandshrew Alola</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <tierra></tierra>
                                  <hielo></hielo>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '28', params: {} }">
                          <img src="../assets/assets/img/28.png">
                          <div class="entry-content">
                              <h3>#028</h3>
                              <h3 class="entry-title">Sandslash</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '28A', params: {} }">
                          <img src="../assets/assets/img/28A.png">
                          <div class="entry-content">
                              <h3>#028</h3>
                              <h3 class="entry-title">Sandslash Alola</h3>
                              <h3>Pokémon ratón</h3>
                              <p>
                                  <tierra></tierra>
                                  <hielo></hielo>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '29', params: {} }">
                          <img src="../assets/assets/img/29.png">
                          <div class="entry-content">
                              <h3>#029</h3>
                              <h3 class="entry-title">Nidoran ♀</h3>
                              <h3>Pokémon pin veneno</h3>
                              <p>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '30', params: {} }">
                          <img src="../assets/assets/img/30.png">
                          <div class="entry-content">
                              <h3>#030</h3>
                              <h3 class="entry-title">Nidorina</h3>
                              <h3>Pokémon pin veneno</h3>
                              <p>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '31', params: {} }">
                          <img src="../assets/assets/img/31.png">
                          <div class="entry-content">
                              <h3>#031</h3>
                              <h3 class="entry-title">Nidoqueen</h3>
                              <h3>Pokémon taladro</h3>
                              <p>
                                  <veneno></veneno>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '32', params: {} }">
                          <img src="../assets/assets/img/32.png">
                          <div class="entry-content">
                              <h3>#032</h3>
                              <h3 class="entry-title">Nidoran ♂</h3>
                              <h3>Pokémon pin veneno</h3>
                              <p>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '33', params: {} }">
                          <img src="../assets/assets/img/33.png">
                          <div class="entry-content">
                              <h3>#033</h3>
                              <h3 class="entry-title">Nidorino</h3>
                              <h3>Pokémon pin veneno</h3>
                              <p>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '34', params: {} }">
                          <img src="../assets/assets/img/34.png">
                          <div class="entry-content">
                              <h3>#034</h3>
                              <h3 class="entry-title">Nidoking</h3>
                              <h3>Pokémon taladro</h3>
                              <p>
                                  <veneno></veneno>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '35', params: {} }">
                          <img src="../assets/assets/img/35.png">
                          <div class="entry-content">
                              <h3>#035</h3>
                              <h3 class="entry-title">Clefairy</h3>
                              <h3>Pokémon hada</h3>
                              <p>
                                  <hada></hada>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '36', params: {} }">
                          <img src="../assets/assets/img/36.png">
                          <div class="entry-content">
                              <h3>#036</h3>
                              <h3 class="entry-title">Clefable</h3>
                              <h3>Pokémon hada</h3>
                              <p>
                                  <hada></hada>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '37', params: {} }">
                          <img src="../assets/assets/img/37.png">
                          <div class="entry-content">
                              <h3>#037</h3>
                              <h3 class="entry-title">Vulpix</h3>
                              <h3>Pokémon zorro</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '37A', params: {} }">
                          <img src="../assets/assets/img/37A.png">
                          <div class="entry-content">
                              <h3>#037</h3>
                              <h3 class="entry-title">Vulpix Alola</h3>
                              <h3>Pokémon zorro</h3>
                              <p>
                                  <hielo></hielo>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '38', params: {} }">
                          <img src="../assets/assets/img/38.png">
                          <div class="entry-content">
                              <h3>#038</h3>
                              <h3 class="entry-title">Ninetales</h3>
                              <h3>Pokémon zorro</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '38A', params: {} }">
                          <img src="../assets/assets/img/38A.png">
                          <div class="entry-content">
                              <h3>#038</h3>
                              <h3 class="entry-title">Ninetales Alola</h3>
                              <h3>Pokémon zorro</h3>
                              <p>
                                  <hielo></hielo>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '39', params: {} }">
                          <img src="../assets/assets/img/39.png">
                          <div class="entry-content">
                              <h3>#039</h3>
                              <h3 class="entry-title">Jigglypuff</h3>
                              <h3>Pokémon globo</h3>
                              <p>
                                  <normal></normal>
                                  <hada></hada>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '40', params: {} }">
                          <img src="../assets/assets/img/40.png">
                          <div class="entry-content">
                              <h3>#040</h3>
                              <h3 class="entry-title">Wigglytuff</h3>
                              <h3>Pokémon globo</h3>
                              <p>
                                  <normal></normal>
                                  <hada></hada>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '41', params: {} }">
                          <img src="../assets/assets/img/41.png">
                          <div class="entry-content">
                              <h3>#041</h3>
                              <h3 class="entry-title">Zubat</h3>
                              <h3>Pokémon murciélago</h3>
                              <p>
                                  <veneno></veneno>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '42', params: {} }">
                          <img src="../assets/assets/img/42.png">
                          <div class="entry-content">
                              <h3>#042</h3>
                              <h3 class="entry-title">Golbat</h3>
                              <h3>Pokémon murciélago</h3>
                              <p>
                                  <veneno></veneno>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '43', params: {} }">
                          <img src="../assets/assets/img/43.png">
                          <div class="entry-content">
                              <h3>#043</h3>
                              <h3 class="entry-title">Oddish</h3>
                              <h3>Pokémon hierbajo</h3>
                              <p>
                                  <planta></planta>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '44', params: {} }">
                          <img src="../assets/assets/img/44.png">
                          <div class="entry-content">
                              <h3>#044</h3>
                              <h3 class="entry-title">Gloom</h3>
                              <h3>Pokémon hierbajo</h3>
                              <p>
                                  <planta></planta>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '45', params: {} }">
                          <img src="../assets/assets/img/45.png">
                          <div class="entry-content">
                              <h3>#045</h3>
                              <h3 class="entry-title">Vileplume</h3>
                              <h3>Pokémon flor</h3>
                              <p>
                                  <planta></planta>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '46', params: {} }">
                          <img src="../assets/assets/img/46.png">
                          <div class="entry-content">
                              <h3>#046</h3>
                              <h3 class="entry-title">Paras</h3>
                              <h3>Pokémon hongo</h3>
                              <p>
                                  <bicho></bicho>
                                  <planta></planta>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '47', params: {} }">
                          <img src="../assets/assets/img/47.png">
                          <div class="entry-content">
                              <h3>#047</h3>
                              <h3 class="entry-title">Parasect</h3>
                              <h3>Pokémon hongo</h3>
                              <p>
                                  <bicho></bicho>
                                  <planta></planta>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '48', params: {} }">
                          <img src="../assets/assets/img/48.png">
                          <div class="entry-content">
                              <h3>#048</h3>
                              <h3 class="entry-title">Venonat</h3>
                              <h3>Pokémon insecto</h3>
                              <p>
                                  <bicho></bicho>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '49', params: {} }">
                          <img src="../assets/assets/img/49.png">
                          <div class="entry-content">
                              <h3>#049</h3>
                              <h3 class="entry-title">Venomoth</h3>
                              <h3>Pokémon polilla venenosa</h3>
                              <p>
                                  <bicho></bicho>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '50', params: {} }">
                          <img src="../assets/assets/img/50.png">
                          <div class="entry-content">
                              <h3>#050</h3>
                              <h3 class="entry-title">Diglett</h3>
                              <h3>Pokémon topo</h3>
                              <p>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '50A', params: {} }">
                          <img src="../assets/assets/img/50A.png">
                          <div class="entry-content">
                              <h3>#050</h3>
                              <h3 class="entry-title">Diglett Alola</h3>
                              <h3>Pokémon topo</h3>
                              <p>
                                  <tierra></tierra>
                                  <acero></acero>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '51', params: {} }">
                          <img src="../assets/assets/img/51.png">
                          <div class="entry-content">
                              <h3>#051</h3>
                              <h3 class="entry-title">Dugtrio</h3>
                              <h3>Pokémon topo</h3>
                              <p>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '51A', params: {} }">
                          <img src="../assets/assets/img/51A.png">
                          <div class="entry-content">
                              <h3>#051</h3>
                              <h3 class="entry-title">Dugtrio Alola</h3>
                              <h3>Pokémon topo</h3>
                              <p>
                                  <tierra></tierra>
                                  <acero></acero>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '52', params: {} }">
                          <img src="../assets/assets/img/52.png">
                          <div class="entry-content">
                              <h3>#052</h3>
                              <h3 class="entry-title">Meowth</h3>
                              <h3>Pokémon gato araña</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '52A', params: {} }">
                          <img src="../assets/assets/img/52A.png">
                          <div class="entry-content">
                              <h3>#052</h3>
                              <h3 class="entry-title">Meowth Alola</h3>
                              <h3>Pokémon gato araña</h3>
                              <p>
                                  <siniestro></siniestro>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '53', params: {} }">
                          <img src="../assets/assets/img/53.png">
                          <div class="entry-content">
                              <h3>#053</h3>
                              <h3 class="entry-title">Persian</h3>
                              <h3>Pokémon gato fino</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '53A', params: {} }">
                          <img src="../assets/assets/img/53A.png">
                          <div class="entry-content">
                              <h3>#053</h3>
                              <h3 class="entry-title">Persian Alola</h3>
                              <h3>Pokémon gato fino</h3>
                              <p>
                                  <siniestro></siniestro>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '54', params: {} }">
                          <img src="../assets/assets/img/54.png">
                          <div class="entry-content">
                              <h3>#054</h3>
                              <h3 class="entry-title">Psyduck</h3>
                              <h3>Pokémon pato</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '55', params: {} }">
                          <img src="../assets/assets/img/55.png">
                          <div class="entry-content">
                              <h3>#055</h3>
                              <h3 class="entry-title">Golduck</h3>
                              <h3>Pokémon pato</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '56', params: {} }">
                          <img src="../assets/assets/img/56.png">
                          <div class="entry-content">
                              <h3>#056</h3>
                              <h3 class="entry-title">Mankey</h3>
                              <h3>Pokémon mono cerdo</h3>
                              <p>
                                  <lucha></lucha>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '57', params: {} }">
                          <img src="../assets/assets/img/57.png">
                          <div class="entry-content">
                              <h3>#057</h3>
                              <h3 class="entry-title">Primeape</h3>
                              <h3>Pokémon mono cerdo</h3>
                              <p>
                                  <lucha></lucha>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '58', params: {} }">
                          <img src="../assets/assets/img/58.png">
                          <div class="entry-content">
                              <h3>#058</h3>
                              <h3 class="entry-title">Growlithe</h3>
                              <h3>Pokémon perrito</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '59', params: {} }">
                          <img src="../assets/assets/img/59.png">
                          <div class="entry-content">
                              <h3>#059</h3>
                              <h3 class="entry-title">Arcanine</h3>
                              <h3>Pokémon legendario</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '60', params: {} }">
                          <img src="../assets/assets/img/60.png">
                          <div class="entry-content">
                              <h3>#060</h3>
                              <h3 class="entry-title">Poliwag</h3>
                              <h3>Pokémon renacuajo</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '61', params: {} }">
                          <img src="../assets/assets/img/61.png">
                          <div class="entry-content">
                              <h3>#061</h3>
                              <h3 class="entry-title">Poliwhirl</h3>
                              <h3>Pokémon renacuajo</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '62', params: {} }">
                          <img src="../assets/assets/img/62.png">
                          <div class="entry-content">
                              <h3>#062</h3>
                              <h3 class="entry-title">Poliwrath</h3>
                              <h3>Pokémon renacuajo</h3>
                              <p>
                                  <agua></agua>
                                  <lucha></lucha>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '63', params: {} }">
                          <img src="../assets/assets/img/63.png">
                          <div class="entry-content">
                              <h3>#063</h3>
                              <h3 class="entry-title">Abra</h3>
                              <h3>Pokémon psi</h3>
                              <p>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '64', params: {} }">
                          <img src="../assets/assets/img/64.png">
                          <div class="entry-content">
                              <h3>#064</h3>
                              <h3 class="entry-title">Kadabra</h3>
                              <h3>Pokémon psi</h3>
                              <p>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '65', params: {} }">
                          <img src="../assets/assets/img/65.png">
                          <div class="entry-content">
                              <h3>#065</h3>
                              <h3 class="entry-title">Alakazam</h3>
                              <h3>Pokémon psi</h3>
                              <p>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '65M', params: {} }">
                          <img src="../assets/assets/img/65M.png">
                          <div class="entry-content">
                              <h3>#065</h3>
                              <h3 class="entry-title">Alakazam Mega</h3>
                              <h3>Pokémon psi</h3>
                              <p>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '66', params: {} }">
                          <img src="../assets/assets/img/66.png">
                          <div class="entry-content">
                              <h3>#066</h3>
                              <h3 class="entry-title">Machomp</h3>
                              <h3>Pokémon superpoder</h3>
                              <p>
                                  <lucha></lucha>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '67', params: {} }">
                          <img src="../assets/assets/img/67.png">
                          <div class="entry-content">
                              <h3>#067</h3>
                              <h3 class="entry-title">Machoke</h3>
                              <h3>Pokémon superpoder</h3>
                              <p>
                                  <lucha></lucha>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '68', params: {} }">
                          <img src="../assets/assets/img/68.png">
                          <div class="entry-content">
                              <h3>#068</h3>
                              <h3 class="entry-title">Machamp</h3>
                              <h3>Pokémon superpoder</h3>
                              <p>
                                  <lucha></lucha>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '69', params: {} }">
                          <img src="../assets/assets/img/69.png">
                          <div class="entry-content">
                              <h3>#069</h3>
                              <h3 class="entry-title">Bellsprout</h3>
                              <h3>Pokémon flor</h3>
                              <p>
                                  <planta></planta>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '70', params: {} }">
                          <img src="../assets/assets/img/70.png">
                          <div class="entry-content">
                              <h3>#070</h3>
                              <h3 class="entry-title">Weepinbell</h3>
                              <h3>Pokémon matamoscas</h3>
                              <p>
                                  <planta></planta>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '71', params: {} }">
                          <img src="../assets/assets/img/71.png">
                          <div class="entry-content">
                              <h3>#071</h3>
                              <h3 class="entry-title">Victreebel</h3>
                              <h3>Pokémon matamoscas</h3>
                              <p>
                                  <planta></planta>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '72', params: {} }">
                          <img src="../assets/assets/img/72.png">
                          <div class="entry-content">
                              <h3>#072</h3>
                              <h3 class="entry-title">Tentacool</h3>
                              <h3>Pokémon medusa</h3>
                              <p>
                                  <agua></agua>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '73', params: {} }">
                          <img src="../assets/assets/img/73.png">
                          <div class="entry-content">
                              <h3>#073</h3>
                              <h3 class="entry-title">Tentacruel</h3>
                              <h3>Pokémon medusa</h3>
                              <p>
                                  <agua></agua>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '74', params: {} }">
                          <img src="../assets/assets/img/74.png">
                          <div class="entry-content">
                              <h3>#074</h3>
                              <h3 class="entry-title">Geodude</h3>
                              <h3>Pokémon roca</h3>
                              <p>
                                  <roca></roca>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '74A', params: {} }">
                          <img src="../assets/assets/img/74A.png">
                          <div class="entry-content">
                              <h3>#074</h3>
                              <h3 class="entry-title">Geodude Alola</h3>
                              <h3>Pokémon roca</h3>
                              <p>
                                  <roca></roca>
                                  <electrico></electrico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '75', params: {} }">
                          <img src="../assets/assets/img/75.png">
                          <div class="entry-content">
                              <h3>#075</h3>
                              <h3 class="entry-title">Graveler</h3>
                              <h3>Pokémon roca</h3>
                              <p>
                                  <roca></roca>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '75A', params: {} }">
                          <img src="../assets/assets/img/75A.png">
                          <div class="entry-content">
                              <h3>#075</h3>
                              <h3 class="entry-title">Graveler Alola</h3>
                              <h3>Pokémon roca</h3>
                              <p>
                                  <roca></roca>
                                  <electrico></electrico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '76', params: {} }">
                          <img src="../assets/assets/img/76.png">
                          <div class="entry-content">
                              <h3>#076</h3>
                              <h3 class="entry-title">Golem</h3>
                              <h3>Pokémon megatón</h3>
                              <p>
                                  <roca></roca>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '76A', params: {} }">
                          <img src="../assets/assets/img/76A.png">
                          <div class="entry-content">
                              <h3>#076</h3>
                              <h3 class="entry-title">Golem Alola</h3>
                              <h3>Pokémon megatón</h3>
                              <p>
                                  <roca></roca>
                                  <electrico></electrico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '77', params: {} }">
                          <img src="../assets/assets/img/77.png">
                          <div class="entry-content">
                              <h3>#077</h3>
                              <h3 class="entry-title">Ponyta</h3>
                              <h3>Pokémon caballo fuego</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '78', params: {} }">
                          <img src="../assets/assets/img/78.png">
                          <div class="entry-content">
                              <h3>#078</h3>
                              <h3 class="entry-title">Rapidash</h3>
                              <h3>Pokémon caballo fuego</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '79', params: {} }">
                          <img src="../assets/assets/img/79.png">
                          <div class="entry-content">
                              <h3>#079</h3>
                              <h3 class="entry-title">Slowpoke</h3>
                              <h3>Pokémon atontado</h3>
                              <p>
                                  <agua></agua>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '80', params: {} }">
                          <img src="../assets/assets/img/80.png">
                          <div class="entry-content">
                              <h3>#080</h3>
                              <h3 class="entry-title">Slowpoke</h3>
                              <h3>Pokémon ermitaño</h3>
                              <p>
                                  <agua></agua>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '80M', params: {} }">
                          <img src="../assets/assets/img/80M.png">
                          <div class="entry-content">
                              <h3>#080</h3>
                              <h3 class="entry-title">Mega Slowpoke</h3>
                              <h3>Pokémon ermitaño</h3>
                              <p>
                                  <agua></agua>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '81', params: {} }">
                          <img src="../assets/assets/img/81.png">
                          <div class="entry-content">
                              <h3>#081</h3>
                              <h3 class="entry-title">Magnemite</h3>
                              <h3>Pokémon imán</h3>
                              <p>
                                  <electrico></electrico>
                                  <acero></acero>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '82', params: {} }">
                          <img src="../assets/assets/img/82.png">
                          <div class="entry-content">
                              <h3>#082</h3>
                              <h3 class="entry-title">Magneton</h3>
                              <h3>Pokémon imán</h3>
                              <p>
                                  <electrico></electrico>
                                  <acero></acero>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '83', params: {} }">
                          <img src="../assets/assets/img/83.png">
                          <div class="entry-content">
                              <h3>#083</h3>
                              <h3 class="entry-title">Farfetch'd</h3>
                              <h3>Pokémon pato salvaje</h3>
                              <p>
                                  <electrico></electrico>
                                  <acero></acero>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '84', params: {} }">
                          <img src="../assets/assets/img/84.png">
                          <div class="entry-content">
                              <h3>#084</h3>
                              <h3 class="entry-title">Doduo</h3>
                              <h3>Pokémon ave gemela</h3>
                              <p>
                                  <normal></normal>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '85', params: {} }">
                          <img src="../assets/assets/img/85.png">
                          <div class="entry-content">
                              <h3>#085</h3>
                              <h3 class="entry-title">Dodrio</h3>
                              <h3>Pokémon ave triple</h3>
                              <p>
                                  <normal></normal>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '86', params: {} }">
                          <img src="../assets/assets/img/86.png">
                          <div class="entry-content">
                              <h3>#086</h3>
                              <h3 class="entry-title">Seel</h3>
                              <h3>Pokémon león marino</h3>
                              <p>
                                  <agua></agua>
                                  <hielo></hielo>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '87', params: {} }">
                          <img src="../assets/assets/img/87.png">
                          <div class="entry-content">
                              <h3>#087</h3>
                              <h3 class="entry-title">Dewgong</h3>
                              <h3>Pokémon león marino</h3>
                              <p>
                                  <agua></agua>
                                  <hielo></hielo>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '88', params: {} }">
                          <img src="../assets/assets/img/88.png">
                          <div class="entry-content">
                              <h3>#088</h3>
                              <h3 class="entry-title">Grimer</h3>
                              <h3>Pokémon lodo</h3>
                              <p>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '88A', params: {} }">
                          <img src="../assets/assets/img/88A.png">
                          <div class="entry-content">
                              <h3>#088</h3>
                              <h3 class="entry-title">Grimer Alola</h3>
                              <h3>Pokémon lodo</h3>
                              <p>
                                  <veneno></veneno>
                                  <siniestro></siniestro>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '89', params: {} }">
                          <img src="../assets/assets/img/89.png">
                          <div class="entry-content">
                              <h3>#089</h3>
                              <h3 class="entry-title">Muk</h3>
                              <h3>Pokémon lodo</h3>
                              <p>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '89A', params: {} }">
                          <img src="../assets/assets/img/89A.png">
                          <div class="entry-content">
                              <h3>#089</h3>
                              <h3 class="entry-title">Muk Alola</h3>
                              <h3>Pokémon lodo</h3>
                              <p>
                                  <veneno></veneno>
                                  <siniestro></siniestro>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '90', params: {} }">
                          <img src="../assets/assets/img/90.png">
                          <div class="entry-content">
                              <h3>#090</h3>
                              <h3 class="entry-title">Shellder</h3>
                              <h3>Pokémon bivalvo</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '91', params: {} }">
                          <img src="../assets/assets/img/91.png">
                          <div class="entry-content">
                              <h3>#091</h3>
                              <h3 class="entry-title">Cloyster</h3>
                              <h3>Pokémon bivalvo</h3>
                              <p>
                                  <agua></agua>
                                  <hielo></hielo>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '92', params: {} }">
                          <img src="../assets/assets/img/92.png">
                          <div class="entry-content">
                              <h3>#092</h3>
                              <h3 class="entry-title">Gastly</h3>
                              <h3>Pokémon gas</h3>
                              <p>
                                  <fantasma></fantasma>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '93', params: {} }">
                          <img src="../assets/assets/img/93.png">
                          <div class="entry-content">
                              <h3>#093</h3>
                              <h3 class="entry-title">Haunter</h3>
                              <h3>Pokémon gas</h3>
                              <p>
                                  <fantasma></fantasma>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '94', params: {} }">
                          <img src="../assets/assets/img/94.png">
                          <div class="entry-content">
                              <h3>#094</h3>
                              <h3 class="entry-title">Gengar</h3>
                              <h3>Pokémon sombra</h3>
                              <p>
                                  <fantasma></fantasma>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '94M', params: {} }">
                          <img src="../assets/assets/img/94M.png">
                          <div class="entry-content">
                              <h3>#094</h3>
                              <h3 class="entry-title">Mega Gengar</h3>
                              <h3>Pokémon sombra</h3>
                              <p>
                                  <fantasma></fantasma>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '95', params: {} }">
                          <img src="../assets/assets/img/95.png">
                          <div class="entry-content">
                              <h3>#095</h3>
                              <h3 class="entry-title">Onix</h3>
                              <h3>Pokémon serpiente roca</h3>
                              <p>
                                  <roca></roca>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '96', params: {} }">
                          <img src="../assets/assets/img/96.png">
                          <div class="entry-content">
                              <h3>#096</h3>
                              <h3 class="entry-title">Drowzee</h3>
                              <h3>Pokémon hipnosis</h3>
                              <p>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '97', params: {} }">
                          <img src="../assets/assets/img/97.png">
                          <div class="entry-content">
                              <h3>#097</h3>
                              <h3 class="entry-title">Hypno</h3>
                              <h3>Pokémon hipnosis</h3>
                              <p>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '98', params: {} }">
                          <img src="../assets/assets/img/98.png">
                          <div class="entry-content">
                              <h3>#098</h3>
                              <h3 class="entry-title">Krabby</h3>
                              <h3>Pokémon cangrejo</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '99', params: {} }">
                          <img src="../assets/assets/img/99.png">
                          <div class="entry-content">
                              <h3>#099</h3>
                              <h3 class="entry-title">Kingler</h3>
                              <h3>Pokémon tenaza</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '100', params: {} }">
                          <img src="../assets/assets/img/100.png">
                          <div class="entry-content">
                              <h3>#100</h3>
                              <h3 class="entry-title">Voltorb</h3>
                              <h3>Pokémon bola</h3>
                              <p>
                                  <electrico></electrico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '101', params: {} }">
                          <img src="../assets/assets/img/101.png">
                          <div class="entry-content">
                              <h3>#101</h3>
                              <h3 class="entry-title">Electrode</h3>
                              <h3>Pokémon bola</h3>
                              <p>
                                  <electrico></electrico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '102', params: {} }">
                          <img src="../assets/assets/img/102.png">
                          <div class="entry-content">
                              <h3>#102</h3>
                              <h3 class="entry-title">Exeggcute</h3>
                              <h3>Pokémon huevo</h3>
                              <p>
                                  <planta></planta>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '103', params: {} }">
                          <img src="../assets/assets/img/103.png">
                          <div class="entry-content">
                              <h3>#103</h3>
                              <h3 class="entry-title">Exeggutor</h3>
                              <h3>Pokémon coco</h3>
                              <p>
                                  <planta></planta>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '103A', params: {} }">
                          <img src="../assets/assets/img/103A.png">
                          <div class="entry-content">
                              <h3>#103</h3>
                              <h3 class="entry-title">Exeggutor Alola</h3>
                              <h3>Pokémon coco</h3>
                              <p>
                                  <planta></planta>
                                  <dragon></dragon>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '104', params: {} }">
                          <img src="../assets/assets/img/104.png">
                          <div class="entry-content">
                              <h3>#104</h3>
                              <h3 class="entry-title">Cubone</h3>
                              <h3>Pokémon solitario</h3>
                              <p>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '105', params: {} }">
                          <img src="../assets/assets/img/105.png">
                          <div class="entry-content">
                              <h3>#105</h3>
                              <h3 class="entry-title">Marowak</h3>
                              <h3>Pokémon apilahueso</h3>
                              <p>
                                  <tierra></tierra>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '105A', params: {} }">
                          <img src="../assets/assets/img/105A.png">
                          <div class="entry-content">
                              <h3>#105</h3>
                              <h3 class="entry-title">Marowak Alola</h3>
                              <h3>Pokémon apilahueso</h3>
                              <p>
                                  <fuego></fuego>
                                  <fantasma></fantasma>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '106', params: {} }">
                          <img src="../assets/assets/img/106.png">
                          <div class="entry-content">
                              <h3>#106</h3>
                              <h3 class="entry-title">Hitmonlee</h3>
                              <h3>Pokémon patada</h3>
                              <p>
                                  <lucha></lucha>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '107', params: {} }">
                          <img src="../assets/assets/img/107.png">
                          <div class="entry-content">
                              <h3>#107</h3>
                              <h3 class="entry-title">Hitmonchan</h3>
                              <h3>Pokémon puñetazo</h3>
                              <p>
                                  <lucha></lucha>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '108', params: {} }">
                          <img src="../assets/assets/img/108.png">
                          <div class="entry-content">
                              <h3>#108</h3>
                              <h3 class="entry-title">Lickitung</h3>
                              <h3>Pokémon Lametazo</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '109', params: {} }">
                          <img src="../assets/assets/img/109.png">
                          <div class="entry-content">
                              <h3>#109</h3>
                              <h3 class="entry-title">Koffing</h3>
                              <h3>Pokémon gas veneno</h3>
                              <p>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '110', params: {} }">
                          <img src="../assets/assets/img/110.png">
                          <div class="entry-content">
                              <h3>#110</h3>
                              <h3 class="entry-title">Weezing</h3>
                              <h3>Pokémon gas veneno</h3>
                              <p>
                                  <veneno></veneno>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '111', params: {} }">
                          <img src="../assets/assets/img/111.png">
                          <div class="entry-content">
                              <h3>#111</h3>
                              <h3 class="entry-title">Rhyhorn</h3>
                              <h3>Pokémon clavos</h3>
                              <p>
                                  <tierra></tierra>
                                  <roca></roca>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '112', params: {} }">
                          <img src="../assets/assets/img/112.png">
                          <div class="entry-content">
                              <h3>#112</h3>
                              <h3 class="entry-title">Rhydon</h3>
                              <h3>Pokémon taladro</h3>
                              <p>
                                  <tierra></tierra>
                                  <roca></roca>
                              </p>
                          </div>
                      </router-link>
                  </article>



                  <article class="block-item">
                      <router-link :to="{ name: '113', params: {} }">
                          <img src="../assets/assets/img/113.png">
                          <div class="entry-content">
                              <h3>#113</h3>
                              <h3 class="entry-title">Chansey</h3>
                              <h3>Pokémon huevo</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '114', params: {} }">
                          <img src="../assets/assets/img/114.png">
                          <div class="entry-content">
                              <h3>#114</h3>
                              <h3 class="entry-title">Tangela</h3>
                              <h3>Pokémon enredadera</h3>
                              <p>
                                  <planta></planta>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '115', params: {} }">
                          <img src="../assets/assets/img/115.png">
                          <div class="entry-content">
                              <h3>#115</h3>
                              <h3 class="entry-title">Kangaskhan</h3>
                              <h3>Pokémon padres</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '115M', params: {} }">
                          <img src="../assets/assets/img/115M.png">
                          <div class="entry-content">
                              <h3>#115</h3>
                              <h3 class="entry-title">Mega Kangaskhan</h3>
                              <h3>Pokémon padres</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '116', params: {} }">
                          <img src="../assets/assets/img/116.png">
                          <div class="entry-content">
                              <h3>#116</h3>
                              <h3 class="entry-title">Horsea</h3>
                              <h3>Pokémon dragon</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '117', params: {} }">
                          <img src="../assets/assets/img/117.png">
                          <div class="entry-content">
                              <h3>#117</h3>
                              <h3 class="entry-title">Seadra</h3>
                              <h3>Pokémon dragon</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '118', params: {} }">
                          <img src="../assets/assets/img/118.png">
                          <div class="entry-content">
                              <h3>#118</h3>
                              <h3 class="entry-title">Goldeen</h3>
                              <h3>Pokémon pez color</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '119', params: {} }">
                          <img src="../assets/assets/img/119.png">
                          <div class="entry-content">
                              <h3>#119</h3>
                              <h3 class="entry-title">Seaking</h3>
                              <h3>Pokémon pez color</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '120', params: {} }">
                          <img src="../assets/assets/img/120.png">
                          <div class="entry-content">
                              <h3>#120</h3>
                              <h3 class="entry-title">Staryu</h3>
                              <h3>Pokémon estrellada</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '121', params: {} }">
                          <img src="../assets/assets/img/121.png">
                          <div class="entry-content">
                              <h3>#121</h3>
                              <h3 class="entry-title">Starmie</h3>
                              <h3>Pokémon misterioso</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '122', params: {} }">
                          <img src="../assets/assets/img/122.png">
                          <div class="entry-content">
                              <h3>#122</h3>
                              <h3 class="entry-title">Mr. Mime</h3>
                              <h3>Pokémon barrera</h3>
                              <p>
                                  <psiquico></psiquico>
                                  <hada></hada>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '123', params: {} }">
                          <img src="../assets/assets/img/123.png">
                          <div class="entry-content">
                              <h3>#123</h3>
                              <h3 class="entry-title">Scyther</h3>
                              <h3>Pokémon mantis</h3>
                              <p>
                                  <bicho></bicho>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '124', params: {} }">
                          <img src="../assets/assets/img/124.png">
                          <div class="entry-content">
                              <h3>#124</h3>
                              <h3 class="entry-title">Jynx</h3>
                              <h3>Pokémon forma humana</h3>
                              <p>
                                  <hielo></hielo>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '125', params: {} }">
                          <img src="../assets/assets/img/125.png">
                          <div class="entry-content">
                              <h3>#125</h3>
                              <h3 class="entry-title">Electabuzz</h3>
                              <h3>Pokémon eléctrico</h3>
                              <p>
                                  <electrico></electrico>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '126', params: {} }">
                          <img src="../assets/assets/img/126.png">
                          <div class="entry-content">
                              <h3>#126</h3>
                              <h3 class="entry-title">Magmar</h3>
                              <h3>Pokémon escupefuego</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '127', params: {} }">
                          <img src="../assets/assets/img/127.png">
                          <div class="entry-content">
                              <h3>#127</h3>
                              <h3 class="entry-title">Pinsir</h3>
                              <h3>Pokémon escarabajo</h3>
                              <p>
                                  <bicho></bicho>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '127M', params: {} }">
                          <img src="../assets/assets/img/127M.png">
                          <div class="entry-content">
                              <h3>#127</h3>
                              <h3 class="entry-title">Mega Pinsir</h3>
                              <h3>Pokémon escarabajo</h3>
                              <p>
                                  <bicho></bicho>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '128', params: {} }">
                          <img src="../assets/assets/img/128.png">
                          <div class="entry-content">
                              <h3>#128</h3>
                              <h3 class="entry-title">Tauros</h3>
                              <h3>Pokémon toro bravo</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '129', params: {} }">
                          <img src="../assets/assets/img/129.png">
                          <div class="entry-content">
                              <h3>#129</h3>
                              <h3 class="entry-title">Magikarp</h3>
                              <h3>Pokémon pez</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '130', params: {} }">
                          <img src="../assets/assets/img/130.png">
                          <div class="entry-content">
                              <h3>#130</h3>
                              <h3 class="entry-title">Gyarados</h3>
                              <h3>Pokémon atrocidad</h3>
                              <p>
                                  <agua></agua>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '130M', params: {} }">
                          <img src="../assets/assets/img/130M.png">
                          <div class="entry-content">
                              <h3>#130</h3>
                              <h3 class="entry-title">Mega Gyarados</h3>
                              <h3>Pokémon atrocidad</h3>
                              <p>
                                  <agua></agua>
                                  <siniestro></siniestro>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '131', params: {} }">
                          <img src="../assets/assets/img/131.png">
                          <div class="entry-content">
                              <h3>#131</h3>
                              <h3 class="entry-title">Lapras</h3>
                              <h3>Pokémon transporte</h3>
                              <p>
                                  <agua></agua>
                                  <hielo></hielo>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '132', params: {} }">
                          <img src="../assets/assets/img/132.png">
                          <div class="entry-content">
                              <h3>#132</h3>
                              <h3 class="entry-title">Ditto</h3>
                              <h3>Pokémon transformación</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '133', params: {} }">
                          <img src="../assets/assets/img/133.png">
                          <div class="entry-content">
                              <h3>#133</h3>
                              <h3 class="entry-title">Eevee</h3>
                              <h3>Pokémon evolución</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '134', params: {} }">
                          <img src="../assets/assets/img/134.png">
                          <div class="entry-content">
                              <h3>#134</h3>
                              <h3 class="entry-title">Vaporeon</h3>
                              <h3>Pokémon burbuja</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '135', params: {} }">
                          <img src="../assets/assets/img/135.png">
                          <div class="entry-content">
                              <h3>#135</h3>
                              <h3 class="entry-title">Jolteon</h3>
                              <h3>Pokémon relámpago</h3>
                              <p>
                                  <electrico></electrico>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '136', params: {} }">
                          <img src="../assets/assets/img/136.png">
                          <div class="entry-content">
                              <h3>#136</h3>
                              <h3 class="entry-title">Flareon</h3>
                              <h3>Pokémon llama</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '137', params: {} }">
                          <img src="../assets/assets/img/137.png">
                          <div class="entry-content">
                              <h3>#137</h3>
                              <h3 class="entry-title">Porygon</h3>
                              <h3>Pokémon virtual</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '138', params: {} }">
                          <img src="../assets/assets/img/138.png">
                          <div class="entry-content">
                              <h3>#138</h3>
                              <h3 class="entry-title">Omanyte</h3>
                              <h3>Pokémon espiral</h3>
                              <p>
                                  <roca></roca>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '139', params: {} }">
                          <img src="../assets/assets/img/139.png">
                          <div class="entry-content">
                              <h3>#139</h3>
                              <h3 class="entry-title">Omastar</h3>
                              <h3>Pokémon espiral</h3>
                              <p>
                                  <roca></roca>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '140', params: {} }">
                          <img src="../assets/assets/img/140.png">
                          <div class="entry-content">
                              <h3>#140</h3>
                              <h3 class="entry-title">Kabuto</h3>
                              <h3>Pokémon marisco</h3>
                              <p>
                                  <roca></roca>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '141', params: {} }">
                          <img src="../assets/assets/img/141.png">
                          <div class="entry-content">
                              <h3>#141</h3>
                              <h3 class="entry-title">Kabutops</h3>
                              <h3>Pokémon marisco</h3>
                              <p>
                                  <roca></roca>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '142', params: {} }">
                          <img src="../assets/assets/img/142.png">
                          <div class="entry-content">
                              <h3>#142</h3>
                              <h3 class="entry-title">Aerodactyl</h3>
                              <h3>Pokémon fósil</h3>
                              <p>
                                  <roca></roca>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '142M', params: {} }">
                          <img src="../assets/assets/img/142M.png">
                          <div class="entry-content">
                              <h3>#142</h3>
                              <h3 class="entry-title">Mega Aerodactyl</h3>
                              <h3>Pokémon fósil</h3>
                              <p>
                                  <roca></roca>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '143', params: {} }">
                          <img src="../assets/assets/img/143.png">
                          <div class="entry-content">
                              <h3>#143</h3>
                              <h3 class="entry-title">Snorlax</h3>
                              <h3>Pokémon dormir</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '144', params: {} }">
                          <img src="../assets/assets/img/144.png">
                          <div class="entry-content">
                              <h3>#144</h3>
                              <h3 class="entry-title">Articuno</h3>
                              <h3>Pokémon congelar</h3>
                              <p>
                                  <hielo></hielo>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '145', params: {} }">
                          <img src="../assets/assets/img/145.png">
                          <div class="entry-content">
                              <h3>#145</h3>
                              <h3 class="entry-title">Zapdos</h3>
                              <h3>Pokémon eléctrico</h3>
                              <p>
                                  <electrico></electrico>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '146', params: {} }">
                          <img src="../assets/assets/img/146.png">
                          <div class="entry-content">
                              <h3>#146</h3>
                              <h3 class="entry-title">Moltres</h3>
                              <h3>Pokémon llama</h3>
                              <p>
                                  <fuego></fuego>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '147', params: {} }">
                          <img src="../assets/assets/img/147.png">
                          <div class="entry-content">
                              <h3>#147</h3>
                              <h3 class="entry-title">Dratini</h3>
                              <h3>Pokémon dragon</h3>
                              <p>
                                  <dragon></dragon>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '148', params: {} }">
                          <img src="../assets/assets/img/148.png">
                          <div class="entry-content">
                              <h3>#148</h3>
                              <h3 class="entry-title">Dragonair</h3>
                              <h3>Pokémon dragon</h3>
                              <p>
                                  <dragon></dragon>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '149', params: {} }">
                          <img src="../assets/assets/img/149.png">
                          <div class="entry-content">
                              <h3>#149</h3>
                              <h3 class="entry-title">Dragonite</h3>
                              <h3>Pokémon dragon</h3>
                              <p>
                                  <dragon></dragon>
                                  <volador></volador>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '150', params: {} }">
                          <img src="../assets/assets/img/150.png">
                          <div class="entry-content">
                              <h3>#150</h3>
                              <h3 class="entry-title">Mewtwo</h3>
                              <h3>Pokémon genético</h3>
                              <p>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '150MX', params: {} }">
                          <img src="../assets/assets/img/150MX.png">
                          <div class="entry-content">
                              <h3>#150</h3>
                              <h3 class="entry-title">Mega Mewtwo X</h3>
                              <h3>Pokémon genético</h3>
                              <p>
                                  <psiquico></psiquico>
                                  <lucha></lucha>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '150MY', params: {} }">
                          <img src="../assets/assets/img/150MY.png">
                          <div class="entry-content">
                              <h3>#150</h3>
                              <h3 class="entry-title">Mega Mewtwo Y</h3>
                              <h3>Pokémon genético</h3>
                              <p>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '151', params: {} }">
                          <img src="../assets/assets/img/151.png">
                          <div class="entry-content">
                              <h3>#151</h3>
                              <h3 class="entry-title">Mew</h3>
                              <h3>Pokémon nueva especie</h3>
                              <p>
                                  <psiquico></psiquico>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '152', params: {} }">
                          <img src="../assets/assets/img/152.png">
                          <div class="entry-content">
                              <h3>#152</h3>
                              <h3 class="entry-title">Chikorita</h3>
                              <h3>Pokémon hoja</h3>
                              <p>
                                  <planta></planta>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '153', params: {} }">
                          <img src="../assets/assets/img/153.png">
                          <div class="entry-content">
                              <h3>#153</h3>
                              <h3 class="entry-title">Bayleef</h3>
                              <h3>Pokémon hoja</h3>
                              <p>
                                  <planta></planta>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '154', params: {} }">
                          <img src="../assets/assets/img/154.png">
                          <div class="entry-content">
                              <h3>#154</h3>
                              <h3 class="entry-title">Meganium</h3>
                              <h3>Pokémon hierba</h3>
                              <p>
                                  <planta></planta>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '155', params: {} }">
                          <img src="../assets/assets/img/155.png">
                          <div class="entry-content">
                              <h3>#155</h3>
                              <h3 class="entry-title">Cyndaquil</h3>
                              <h3>Pokémon ratónfuego</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '156', params: {} }">
                          <img src="../assets/assets/img/156.png">
                          <div class="entry-content">
                              <h3>#156</h3>
                              <h3 class="entry-title">Quilava</h3>
                              <h3>Pokémon volcán</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '157', params: {} }">
                          <img src="../assets/assets/img/157.png">
                          <div class="entry-content">
                              <h3>#157</h3>
                              <h3 class="entry-title">Typhlosion</h3>
                              <h3>Pokémon volcán</h3>
                              <p>
                                  <fuego></fuego>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '158', params: {} }">
                          <img src="../assets/assets/img/158.png">
                          <div class="entry-content">
                              <h3>#158</h3>
                              <h3 class="entry-title">Totodile</h3>
                              <h3>Pokémon gran fauce</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '159', params: {} }">
                          <img src="../assets/assets/img/159.png">
                          <div class="entry-content">
                              <h3>#159</h3>
                              <h3 class="entry-title">Croconaw</h3>
                              <h3>Pokémon gran fauce</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '160', params: {} }">
                          <img src="../assets/assets/img/160.png">
                          <div class="entry-content">
                              <h3>#160</h3>
                              <h3 class="entry-title">Feraligatr</h3>
                              <h3>Pokémon gran fauce</h3>
                              <p>
                                  <agua></agua>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '161', params: {} }">
                          <img src="../assets/assets/img/161.png">
                          <div class="entry-content">
                              <h3>#161</h3>
                              <h3 class="entry-title">Sentret</h3>
                              <h3>Pokémon explorador</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>


                  <article class="block-item">
                      <router-link :to="{ name: '162', params: {} }">
                          <img src="../assets/assets/img/162.png">
                          <div class="entry-content">
                              <h3>#162</h3>
                              <h3 class="entry-title">Furret</h3>
                              <h3>Pokémon alargado</h3>
                              <p>
                                  <normal></normal>
                              </p>
                          </div>
                      </router-link>
                  </article>


              </div>


              <!-- End Your Code -->
          </div>
          <!-- .wrap -->
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
    margin-top: -20px;
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
    margin-right: 5.35765%;
    width: 30.76157%;
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
  margin-left: 100px;
  margin-right: 100px;
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
