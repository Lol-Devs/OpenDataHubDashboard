<template>
  <div v-if="accommodations">
    <south-tyrol-header></south-tyrol-header>

    <!-- Divider -->
    <div>
      <h1 class="font-sp text-xl text-center text-secondary-500">....</h1>
    </div>

    <!-- Filter -->
    <div>

      <h2 class="text-secondary-400 xl:hidden text-center sm:text-left  font-bold text-2xl sm:ml-12 mt-3">
        Suche dein ideales Hotel
      </h2>
     
      <div
        class="flex flex-col lg:flex-row lg:items-end lg:justify-evenly mb-16 mt-4 mx-7"
      >
      <h2 class="text-secondary-400 hidden xl:inline-block font-bold text-lg md:text-2xl mt-3">
        Suche dein ideales Hotel
      </h2>
        <div class="flex-row justify-start items-center flex lg:pb-0 pb-5">
          <p class="mr-5 text-sm font-medium text-secondary-500  ">suche nach deinem Hotel:</p>
          <input type="text" class="bg-white p-1 text-sgray placeholder-gray-300 outline-none border-b-2 focus:border-secondary-400"
            placeholder="Hotel mit Meerblick" v-model="searchterm" @keyup="searchTerm()">
        </div>
        <div>
          <div>
            <div class="flex flex-row  items-center">
              <p class="mr-5 text-sm font-medium text-secondary-500">Min. Sterne:</p>
              <div v-for="index in stars" :key="index">
                <svg
                  @click="selectStars(index)"
                  class="h-6 text-secondary-300 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>
              
              <div v-for="index in (5-stars)" :key="index">
                <svg
                  @click="selectStars(index + stars)"
                  class="h-6 text-gray-300 cursor-pointer"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                  />
                </svg>
              </div>

            </div>
          </div>
        </div>
        <div class="pt-5 lg:pt-0">
          <label for="hotel" class="mr-5 text-sm font-medium text-secondary-500">enthaltene Ausstattung: </label>
          

<select v-model="feature" @change="selectFeature()" class="bg-white p-2 text-sgray outline-none" name="hotel" id="hotel">
  <option value="none">Keines gewählt</option>
  <option value="pick_up">Abholservice</option>
  <option value="allergy_menus">Allergikerküche</option>
  <option value="barrier_free">Barrierefrei</option>
  <option value="garage">Garage</option>
  <option value="group_friendly">Gruppenfreundlich</option>
  <option value="pets">Kleine Haustiere</option> 
  <option value="sauna">Sauna</option>
  <option value="swimming_pool">Schwimmbad</option>
  <option value="wlan">Wlan</option>
</select>
        </div>
      </div>
    </div>

    <!-- Hotelblock -->
    <div>
      <div>
        <div class="flex flex-col items-center mb-16 mt-4 mx-7">
          <p class="font-sp text-4xl lg:text-6xl text-secondary-200">{{totalResults.toLocaleString()}}</p>
          <h2 class="text-secondary-100 font-bold text-2xl text-center mt-3">
            <span v-if="feature === 'group_friendly'" class="text-secondary-200">Gruppenfreundliche</span>
            <span v-if="feature === 'barrier_free'" class="text-secondary-200">Barrierefreie</span>
            <span v-if="feature === 'pets'" class="text-secondary-200">Tierfreundliche</span>
            Hotels
            <span v-if="feature === 'pick_up'" class="text-secondary-200">mit Abholservice</span>
            <span v-if="feature === 'allergy_menus'" class="text-secondary-200">mit Allergikerküche</span>
            <span v-if="feature === 'garage'" class="text-secondary-200">mit Garage</span>
            <span v-if="feature === 'sauna'" class="text-secondary-200">mit Sauna</span>
            <span v-if="feature === 'swimming_pool'" class="text-secondary-200">mit Schwimmbad</span>
            <span v-if="feature === 'wlan'" class="text-secondary-200">mit WLan</span>
            für dich in Südtirol
          </h2>
        </div>
      </div>

      <!-- List -->
      <div>
        <div class="flex flex-col items-center mb-16 mt-4 mx-7">
          <h2 v-if="accommodations.length === 0" class="text-secondary-400 font-bold text-1xl mt-3">
            Keine passenden Ergebnisse gefunden.
          </h2>
        </div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 m-5"
        >
          <!-- Hotel Card -->
          <div v-for="a in accommodations" :key="a.id"
            class="bg-gray-200 bg-opacity-25 w-full p-4 shadow-lg rounded-2xl flex flex-col items-center overflow-hidden"
          >
            <div>
              <div class="flex flex-row items-center">
                <div v-for="index in a.stars.number" :key="index">
                  <svg
                    class="h-6 text-secondary-300"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                    />
                  </svg>
                </div>
              <div v-if="a.stars.s">
                  <p class="text-secondary-300 font-bold text-lg ml-1">S</p>
                </div>
              </div>
            </div>
            <h3 class="text-secondary-400 font-sp text-xl text-center">
              {{ a.name }}
            </h3>

            <div class="flex">
              <p class="text-sgray font-medium">{{ a.location.city }}</p>
              <p class="text-sgray font-bold mx-2">·</p>
              <p class="text-sgray font-medium">{{ a.beds }} Betten</p>
            </div>

            <p v-if="a.bookable" class="text-secondary-200 font-light">Buchung möglich</p>
            <p v-else class="text-secondary-500 font-light">Buchung nicht möglich</p>

            <div class="my-2 w-full border-t-2 border-b-2 py-2">
              <div class="mx-12 flex flex-row justify-between">
                <p class="font-medium text-secondary-500">Schwimmbad</p>
                <p class="font-light text-sgray">{{ a.features.includes('Schwimmbad') ? 'Ja' : 'Nein' }}</p>
              </div>
              <div class="border-b-2 mx-8 my-2"></div>
              <div class="mx-12 flex flex-row justify-between">
                <p class="font-medium text-secondary-500">Gruppenfreundlich</p>
                <p class="font-light text-sgray">{{ a.features.includes('Gruppenfreundlich') ? 'Ja' : 'Nein' }}</p>
              </div>
              <div class="border-b-2 mx-8 my-2"></div>
              <div class="mx-12 flex flex-row justify-between">
                <p class="font-medium text-secondary-500">Wlan</p>
                <p class="font-light text-sgray">{{ a.features.includes('Wlan') ? 'Ja' : 'Nein' }}</p>
              </div>
            </div>

            <div
              class="flex flex-row items-center mt-2 hover:border-secondary-300 border-b-2 transition duration-300 ease-linear"
            >
              <router-link :to="'/hotel/' + a.id" class="font-medium text-secondary-400 mr-4">
                Zur Hotelübersicht
              </router-link>
              <svg
                class="h-5 text-secondary-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
          </div>
          <!-- END Hotel Card -->

        
        </div>

      </div>

      <div>
        <div  class="flex flex-row mt-12 justify-center">
          <button v-if="page!=1" @click="pageback()" ><svg class="text-primary h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd" />
</svg></button> 

<p class="text-primary font-sp text-xl mx-4">{{page}}</p>

<button @click="pagefor()"> <svg class="text-primary h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg></button>

        </div>
      </div>

      <div class="flex items-center flex-col w-full">
        <p
          class="text-secondary-500 text-center font-sp text-6xl mx-5 mb-6 mt-24"
        >
          Urlaub im Herzen Europas
        </p>

        <img src="../assets/st-berge-large.png" alt="" />
      </div>
    </div>

    <!-- Link -->
    <div></div>
  </div>
</template>

<script>
import SouthTyrolHeader from "../components/SouthTyrolHeader.vue";
import Service from '../service/index.js';
import{ BITMASK_STARS, BITMASK_FEATURES } from '../service/Accommodation.js';

export default {
  name: "Dashboard",
  components: {
    SouthTyrolHeader,
  },
  mounted() {
    this.getAccommodations();
  },
  data() {
    return {
      accommodations: null,
      searchterm: '',
      totalResults: 0,
      page: 1,
      stars: 1,
      feature: 'none',
    }
  },
  props: {},
  methods: {

    pagefor(){

      this.page++;
      this.getAccommodations();

    },

    pageback(){

      this.page--;
      this.getAccommodations();

},

    searchTerm() {
      this.getAccommodations();
    },

    selectFeature() {
      this.getAccommodations();
    },

    selectStars(stars) {
      this.stars = stars;
      this.getAccommodations();
    },

    getAccommodations() {

      let bitmask_stars = BITMASK_STARS[this.stars];
      let bitmask_features = BITMASK_FEATURES[this.feature];

      Service.getAccommodations(this.page, bitmask_stars, bitmask_features, this.searchterm)
        .then(ret =>  {
          this.totalResults = ret.results;
          this.accommodations = ret.accommodations;
        })
        .catch(error => console.log(error));
    }

  },
};
</script>
