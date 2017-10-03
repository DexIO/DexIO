<template lang="html">
  <div>
      <section class="content">
          <div class="title">
              <h1>Fichas técnicas</h1>
          </div>
          <div class="wrap">
              <input type="radio" name="view-filter" id="list-view" class="list-view-radio view-radio" checked>
              <label id="list" for="list-view">
                  <i  class="fa fa-list-ul"></i>
              </label>

              <input type="radio" name="view-filter" id="grid-view" class="grid-view-radio view-radio">
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
                              <h5>#001</h5>
                              <h5 class="entry-title">Bulbasaur</h5>
                              <h5>Pokémon semilla</h5>
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
                              <h5>#002</h5>
                              <h5 class="entry-title">Ivysaur</h5>
                              <h5>Pokémon semilla</h5>
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
                              <h5>#003</h5>
                              <h5 class="entry-title">Venusaur</h5>
                              <h5>Pokémon semilla</h5>
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
                              <h5>#003</h5>
                              <h5 class="entry-title">Mega Venusaur</h5>
                              <h5>Pokémon semilla</h5>
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
                              <h5>#004</h5>
                              <h5 class="entry-title">Charmander</h5>
                              <h5>Pokémon lagartija</h5>
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
                              <h5>#005</h5>
                              <h5 class="entry-title">Charmeleon</h5>
                              <h5>Pokémon llama</h5>
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
                              <h5>#006</h5>
                              <h5 class="entry-title">Charizard</h5>
                              <h5>Pokémon llama</h5>
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
                              <h5>#006</h5>
                              <h5 class="entry-title">Mega Charizard X</h5>
                              <h5>Pokémon llama</h5>
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
                              <h5>#006</h5>
                              <h5 class="entry-title">Mega Charizard Y</h5>
                              <h5>Pokémon llama</h5>
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
                              <h5>#007</h5>
                              <h5 class="entry-title">Squirtle</h5>
                              <h5>Pokémon tortuguita</h5>
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
                              <h5>#008</h5>
                              <h5 class="entry-title">Wartortle</h5>
                              <h5>Pokémon tortuga</h5>
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
                              <h5>#009</h5>
                              <h5 class="entry-title">Blastoise</h5>
                              <h5>Pokémon marisco</h5>
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
                              <h5>#009</h5>
                              <h5 class="entry-title">Mega Blastoise</h5>
                              <h5>Pokémon marisco</h5>
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
                              <h5>#010</h5>
                              <h5 class="entry-title">Caterpie</h5>
                              <h5>Pokémon gusano</h5>
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
                              <h5>#011</h5>
                              <h5 class="entry-title">Metapod</h5>
                              <h5>Pokémon capullo</h5>
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
                              <h5>#012</h5>
                              <h5 class="entry-title">Butterfree</h5>
                              <h5>Pokémon mariposa</h5>
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
                              <h5>#013</h5>
                              <h5 class="entry-title">Weedle</h5>
                              <h5>Pokémon oruga</h5>
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
                              <h5>#014</h5>
                              <h5 class="entry-title">Kakuna</h5>
                              <h5>Pokémon capullo</h5>
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
                              <h5>#015</h5>
                              <h5 class="entry-title">Beedrill</h5>
                              <h5>Pokémon abeja venenosa</h5>
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
                              <h5>#015</h5>
                              <h5 class="entry-title">Mega Beedrill</h5>
                              <h5>Pokémon abeja venenosa</h5>
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
                              <h5>#016</h5>
                              <h5 class="entry-title">Pidgey</h5>
                              <h5>Pokémon pajarito</h5>
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
                              <h5>#017</h5>
                              <h5 class="entry-title">Pidgeotto</h5>
                              <h5>Pokémon pájaro</h5>
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
                              <h5>#018</h5>
                              <h5 class="entry-title">Pidgeot</h5>
                              <h5>Pokémon pájaro</h5>
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
                              <h5>#018</h5>
                              <h5 class="entry-title">Mega Pidgeot</h5>
                              <h5>Pokémon pájaro</h5>
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
                              <h5>#019</h5>
                              <h5 class="entry-title">Ratatta</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#019</h5>
                              <h5 class="entry-title">Ratatta Alola</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#020</h5>
                              <h5 class="entry-title">Raticate</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#020</h5>
                              <h5 class="entry-title">Raticate Alola</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#021</h5>
                              <h5 class="entry-title">Spearow</h5>
                              <h5>Pokémon pajarito</h5>
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
                              <h5>#022</h5>
                              <h5 class="entry-title">Fearow</h5>
                              <h5>Pokémon pico</h5>
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
                              <h5>#023</h5>
                              <h5 class="entry-title">Ekans</h5>
                              <h5>Pokémon serpiente</h5>
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
                              <h5>#024</h5>
                              <h5 class="entry-title">Arbok</h5>
                              <h5>Pokémon cobra</h5>
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
                              <h5>#025</h5>
                              <h5 class="entry-title">Pikachu</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#026</h5>
                              <h5 class="entry-title">Raichu</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#026</h5>
                              <h5 class="entry-title">Raichu Alola</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#027</h5>
                              <h5 class="entry-title">Sandshrew</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#027</h5>
                              <h5 class="entry-title">Sandshrew Alola</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#028</h5>
                              <h5 class="entry-title">Sandslash</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#028</h5>
                              <h5 class="entry-title">Sandslash Alola</h5>
                              <h5>Pokémon ratón</h5>
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
                              <h5>#029</h5>
                              <h5 class="entry-title">Nidoran ♀</h5>
                              <h5>Pokémon pin veneno</h5>
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
                              <h5>#030</h5>
                              <h5 class="entry-title">Nidorina</h5>
                              <h5>Pokémon pin veneno</h5>
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
                              <h5>#031</h5>
                              <h5 class="entry-title">Nidoqueen</h5>
                              <h5>Pokémon taladro</h5>
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
                              <h5>#032</h5>
                              <h5 class="entry-title">Nidoran ♂</h5>
                              <h5>Pokémon pin veneno</h5>
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
                              <h5>#033</h5>
                              <h5 class="entry-title">Nidorino</h5>
                              <h5>Pokémon pin veneno</h5>
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
                              <h5>#034</h5>
                              <h5 class="entry-title">Nidoking</h5>
                              <h5>Pokémon taladro</h5>
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
                              <h5>#035</h5>
                              <h5 class="entry-title">Clefairy</h5>
                              <h5>Pokémon hada</h5>
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
                              <h5>#036</h5>
                              <h5 class="entry-title">Clefable</h5>
                              <h5>Pokémon hada</h5>
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
                              <h5>#037</h5>
                              <h5 class="entry-title">Vulpix</h5>
                              <h5>Pokémon zorro</h5>
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
                              <h5>#037</h5>
                              <h5 class="entry-title">Vulpix Alola</h5>
                              <h5>Pokémon zorro</h5>
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
                              <h5>#038</h5>
                              <h5 class="entry-title">Ninetales</h5>
                              <h5>Pokémon zorro</h5>
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
                              <h5>#038</h5>
                              <h5 class="entry-title">Ninetales Alola</h5>
                              <h5>Pokémon zorro</h5>
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
                              <h5>#039</h5>
                              <h5 class="entry-title">Jigglypuff</h5>
                              <h5>Pokémon globo</h5>
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
                              <h5>#040</h5>
                              <h5 class="entry-title">Wigglytuff</h5>
                              <h5>Pokémon globo</h5>
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
                              <h5>#041</h5>
                              <h5 class="entry-title">Zubat</h5>
                              <h5>Pokémon murciélago</h5>
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
                              <h5>#042</h5>
                              <h5 class="entry-title">Golbat</h5>
                              <h5>Pokémon murciélago</h5>
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
                              <h5>#043</h5>
                              <h5 class="entry-title">Oddish</h5>
                              <h5>Pokémon hierbajo</h5>
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
                              <h5>#044</h5>
                              <h5 class="entry-title">Gloom</h5>
                              <h5>Pokémon hierbajo</h5>
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
                              <h5>#045</h5>
                              <h5 class="entry-title">Vileplume</h5>
                              <h5>Pokémon flor</h5>
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
                              <h5>#046</h5>
                              <h5 class="entry-title">Paras</h5>
                              <h5>Pokémon hongo</h5>
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
                              <h5>#047</h5>
                              <h5 class="entry-title">Parasect</h5>
                              <h5>Pokémon hongo</h5>
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
                              <h5>#048</h5>
                              <h5 class="entry-title">Venonat</h5>
                              <h5>Pokémon insecto</h5>
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
                              <h5>#049</h5>
                              <h5 class="entry-title">Venomoth</h5>
                              <h5>Pokémon polilla venenosa</h5>
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
                              <h5>#050</h5>
                              <h5 class="entry-title">Diglett</h5>
                              <h5>Pokémon topo</h5>
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
                              <h5>#050</h5>
                              <h5 class="entry-title">Diglett Alola</h5>
                              <h5>Pokémon topo</h5>
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
                              <h5>#051</h5>
                              <h5 class="entry-title">Dugtrio</h5>
                              <h5>Pokémon topo</h5>
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
                              <h5>#051</h5>
                              <h5 class="entry-title">Dugtrio Alola</h5>
                              <h5>Pokémon topo</h5>
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
                              <h5>#052</h5>
                              <h5 class="entry-title">Meowth</h5>
                              <h5>Pokémon gato araña</h5>
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
                              <h5>#052</h5>
                              <h5 class="entry-title">Meowth Alola</h5>
                              <h5>Pokémon gato araña</h5>
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
                              <h5>#053</h5>
                              <h5 class="entry-title">Persian</h5>
                              <h5>Pokémon gato fino</h5>
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
                              <h5>#053</h5>
                              <h5 class="entry-title">Persian Alola</h5>
                              <h5>Pokémon gato fino</h5>
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
                              <h5>#054</h5>
                              <h5 class="entry-title">Psyduck</h5>
                              <h5>Pokémon pato</h5>
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
                              <h5>#055</h5>
                              <h5 class="entry-title">Golduck</h5>
                              <h5>Pokémon pato</h5>
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
                              <h5>#056</h5>
                              <h5 class="entry-title">Mankey</h5>
                              <h5>Pokémon mono cerdo</h5>
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
                              <h5>#057</h5>
                              <h5 class="entry-title">Primeape</h5>
                              <h5>Pokémon mono cerdo</h5>
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
                              <h5>#058</h5>
                              <h5 class="entry-title">Growlithe</h5>
                              <h5>Pokémon perrito</h5>
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
                              <h5>#059</h5>
                              <h5 class="entry-title">Arcanine</h5>
                              <h5>Pokémon legendario</h5>
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
                              <h5>#060</h5>
                              <h5 class="entry-title">Poliwag</h5>
                              <h5>Pokémon renacuajo</h5>
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
                              <h5>#061</h5>
                              <h5 class="entry-title">Poliwhirl</h5>
                              <h5>Pokémon renacuajo</h5>
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
                              <h5>#062</h5>
                              <h5 class="entry-title">Poliwrath</h5>
                              <h5>Pokémon renacuajo</h5>
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
                              <h5>#063</h5>
                              <h5 class="entry-title">Abra</h5>
                              <h5>Pokémon psi</h5>
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
                              <h5>#064</h5>
                              <h5 class="entry-title">Kadabra</h5>
                              <h5>Pokémon psi</h5>
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
                              <h5>#065</h5>
                              <h5 class="entry-title">Alakazam</h5>
                              <h5>Pokémon psi</h5>
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
                              <h5>#065</h5>
                              <h5 class="entry-title">Alakazam Mega</h5>
                              <h5>Pokémon psi</h5>
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
                              <h5>#066</h5>
                              <h5 class="entry-title">Machomp</h5>
                              <h5>Pokémon superpoder</h5>
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
                              <h5>#067</h5>
                              <h5 class="entry-title">Machoke</h5>
                              <h5>Pokémon superpoder</h5>
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
                              <h5>#068</h5>
                              <h5 class="entry-title">Machamp</h5>
                              <h5>Pokémon superpoder</h5>
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
                              <h5>#069</h5>
                              <h5 class="entry-title">Bellsprout</h5>
                              <h5>Pokémon flor</h5>
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
                              <h5>#070</h5>
                              <h5 class="entry-title">Weepinbell</h5>
                              <h5>Pokémon matamoscas</h5>
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
                              <h5>#071</h5>
                              <h5 class="entry-title">Victreebel</h5>
                              <h5>Pokémon matamoscas</h5>
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
                              <h5>#072</h5>
                              <h5 class="entry-title">Tentacool</h5>
                              <h5>Pokémon medusa</h5>
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
                              <h5>#073</h5>
                              <h5 class="entry-title">Tentacruel</h5>
                              <h5>Pokémon medusa</h5>
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
                              <h5>#074</h5>
                              <h5 class="entry-title">Geodude</h5>
                              <h5>Pokémon roca</h5>
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
                              <h5>#074</h5>
                              <h5 class="entry-title">Geodude Alola</h5>
                              <h5>Pokémon roca</h5>
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
                              <h5>#075</h5>
                              <h5 class="entry-title">Graveler</h5>
                              <h5>Pokémon roca</h5>
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
                              <h5>#075</h5>
                              <h5 class="entry-title">Graveler Alola</h5>
                              <h5>Pokémon roca</h5>
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
                              <h5>#076</h5>
                              <h5 class="entry-title">Golem</h5>
                              <h5>Pokémon megatón</h5>
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
                              <h5>#076</h5>
                              <h5 class="entry-title">Golem Alola</h5>
                              <h5>Pokémon megatón</h5>
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
                              <h5>#077</h5>
                              <h5 class="entry-title">Ponyta</h5>
                              <h5>Pokémon caballo fuego</h5>
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
                              <h5>#078</h5>
                              <h5 class="entry-title">Rapidash</h5>
                              <h5>Pokémon caballo fuego</h5>
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
                              <h5>#079</h5>
                              <h5 class="entry-title">Slowpoke</h5>
                              <h5>Pokémon atontado</h5>
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
                              <h5>#080</h5>
                              <h5 class="entry-title">Slowpoke</h5>
                              <h5>Pokémon ermitaño</h5>
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
                              <h5>#080</h5>
                              <h5 class="entry-title">Mega Slowpoke</h5>
                              <h5>Pokémon ermitaño</h5>
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
                              <h5>#081</h5>
                              <h5 class="entry-title">Magnemite</h5>
                              <h5>Pokémon imán</h5>
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
                              <h5>#082</h5>
                              <h5 class="entry-title">Magneton</h5>
                              <h5>Pokémon imán</h5>
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
                              <h5>#083</h5>
                              <h5 class="entry-title">Farfetch'd</h5>
                              <h5>Pokémon pato salvaje</h5>
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
                              <h5>#084</h5>
                              <h5 class="entry-title">Doduo</h5>
                              <h5>Pokémon ave gemela</h5>
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
                              <h5>#085</h5>
                              <h5 class="entry-title">Dodrio</h5>
                              <h5>Pokémon ave triple</h5>
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
                              <h5>#086</h5>
                              <h5 class="entry-title">Seel</h5>
                              <h5>Pokémon león marino</h5>
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
                              <h5>#087</h5>
                              <h5 class="entry-title">Dewgong</h5>
                              <h5>Pokémon león marino</h5>
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
                              <h5>#088</h5>
                              <h5 class="entry-title">Grimer</h5>
                              <h5>Pokémon lodo</h5>
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
                              <h5>#088</h5>
                              <h5 class="entry-title">Grimer Alola</h5>
                              <h5>Pokémon lodo</h5>
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
                              <h5>#089</h5>
                              <h5 class="entry-title">Muk</h5>
                              <h5>Pokémon lodo</h5>
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
                              <h5>#089</h5>
                              <h5 class="entry-title">Muk Alola</h5>
                              <h5>Pokémon lodo</h5>
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
                              <h5>#090</h5>
                              <h5 class="entry-title">Shellder</h5>
                              <h5>Pokémon bivalvo</h5>
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
                              <h5>#091</h5>
                              <h5 class="entry-title">Cloyster</h5>
                              <h5>Pokémon bivalvo</h5>
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
                              <h5>#092</h5>
                              <h5 class="entry-title">Gastly</h5>
                              <h5>Pokémon gas</h5>
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
                              <h5>#093</h5>
                              <h5 class="entry-title">Haunter</h5>
                              <h5>Pokémon gas</h5>
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
                              <h5>#094</h5>
                              <h5 class="entry-title">Gengar</h5>
                              <h5>Pokémon sombra</h5>
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
                              <h5>#094</h5>
                              <h5 class="entry-title">Mega Gengar</h5>
                              <h5>Pokémon sombra</h5>
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
                              <h5>#095</h5>
                              <h5 class="entry-title">Onix</h5>
                              <h5>Pokémon serpiente roca</h5>
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
                              <h5>#096</h5>
                              <h5 class="entry-title">Drowzee</h5>
                              <h5>Pokémon hipnosis</h5>
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
                              <h5>#097</h5>
                              <h5 class="entry-title">Hypno</h5>
                              <h5>Pokémon hipnosis</h5>
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
                              <h5>#098</h5>
                              <h5 class="entry-title">Krabby</h5>
                              <h5>Pokémon cangrejo</h5>
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
                              <h5>#099</h5>
                              <h5 class="entry-title">Kingler</h5>
                              <h5>Pokémon tenaza</h5>
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
                              <h5>#100</h5>
                              <h5 class="entry-title">Voltorb</h5>
                              <h5>Pokémon bola</h5>
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
                              <h5>#101</h5>
                              <h5 class="entry-title">Electrode</h5>
                              <h5>Pokémon bola</h5>
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
                              <h5>#102</h5>
                              <h5 class="entry-title">Exeggcute</h5>
                              <h5>Pokémon huevo</h5>
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
                              <h5>#103</h5>
                              <h5 class="entry-title">Exeggutor</h5>
                              <h5>Pokémon coco</h5>
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
                              <h5>#103</h5>
                              <h5 class="entry-title">Exeggutor Alola</h5>
                              <h5>Pokémon coco</h5>
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
                              <h5>#104</h5>
                              <h5 class="entry-title">Cubone</h5>
                              <h5>Pokémon solitario</h5>
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
                              <h5>#105</h5>
                              <h5 class="entry-title">Marowak</h5>
                              <h5>Pokémon apilahueso</h5>
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
                              <h5>#105</h5>
                              <h5 class="entry-title">Marowak Alola</h5>
                              <h5>Pokémon apilahueso</h5>
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
                              <h5>#106</h5>
                              <h5 class="entry-title">Hitmonlee</h5>
                              <h5>Pokémon patada</h5>
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
                              <h5>#107</h5>
                              <h5 class="entry-title">Hitmonchan</h5>
                              <h5>Pokémon puñetazo</h5>
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
                              <h5>#108</h5>
                              <h5 class="entry-title">Lickitung</h5>
                              <h5>Pokémon Lametazo</h5>
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
                              <h5>#109</h5>
                              <h5 class="entry-title">Koffing</h5>
                              <h5>Pokémon gas veneno</h5>
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
                              <h5>#110</h5>
                              <h5 class="entry-title">Weezing</h5>
                              <h5>Pokémon gas veneno</h5>
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
                              <h5>#111</h5>
                              <h5 class="entry-title">Rhyhorn</h5>
                              <h5>Pokémon clavos</h5>
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
                              <h5>#112</h5>
                              <h5 class="entry-title">Rhydon</h5>
                              <h5>Pokémon taladro</h5>
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
                              <h5>#113</h5>
                              <h5 class="entry-title">Chansey</h5>
                              <h5>Pokémon huevo</h5>
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
