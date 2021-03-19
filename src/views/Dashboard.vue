<template>
  <div v-if="numberOfAccommodations">
    <south-tyrol-header></south-tyrol-header>
    <!-- Divider -->
    <div>
      <h1 class="font-sp text-xl text-center text-secondary-500">....</h1>
    </div>

    <!-- Hotelblock -->
    <div>
      <div>
          <div class="flex flex-col items-center mb-16 mt-4 mx-7">
            <p class="font-sp text-8xl lg:text-9xl text-secondary-200">{{ numberOfAccommodations.toLocaleString() }}</p>
            <h2 class="text-secondary-100 font-bold text-2xl text-center mt-3"> Hotels für dich in Südtirol
      </h2>
      <div class="flex flex-row items-center mt-2 hover:border-secondary-100 border-b-2  transition duration-300 ease-linear ">
        <router-link class="font-medium text-secondary-200 mr-4" to="/list">Zur Übersicht</router-link>
        <svg class="h-5 text-secondary-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
  <path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd" />
</svg>
      </div>
          </div>
        </div>

        <h2 class="text-sgray font-bold text-2xl text-center mb-6 mt-24">Südtirol in Zahlen
      </h2>
     
       
      <div
        class="flex flex-col items-center justify-center lg:flex-row flex-wrap"
      >
        
        <div>
          <div class="flex flex-col items-center mb-8 mx-7">
            <p class="font-sp text-6xl text-secondary-600">300</p>
            <p class="text-sgray font-medium">Sonnentage im Jahr</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center mb-8 mx-7">
            <p class="font-sp text-6xl text-secondary-600">17.000 km</p>
            <p class="text-sgray font-medium">Wanderweg</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center mb-8 mx-7">
            <p class="font-sp text-6xl text-secondary-600">350</p>
            <p class="text-sgray font-medium">Berggipfel über 3000m</p>
          </div>
        </div>
      </div>
    </div>

    <div class="flex items-center flex-col w-full">
      <p
        class="text-secondary-500 text-center font-sp text-6xl mx-5 mb-6 mt-12"
      >
        Urlaub im Herzen Europas
      </p>

      <img src="../assets/st-berge-large.png" alt="" />
    </div>

    <!-- Link -->
    <div>
      
    </div>

  </div>
</template>

<script>
import SouthTyrolHeader from "../components/SouthTyrolHeader.vue";
import Service from '../service/index.js';

export default {
  name: "Dashboard",
  components: {
    SouthTyrolHeader
  },
  mounted() {

    Service.getNumberOfAccommodations()
      .then(ret => this.numberOfAccommodations = ret)
      .catch(error => console.log(error));
  },
  data() {
    return {
      numberOfAccommodations: null,
    };
  },
  props: {},
  methods: {},
};
</script>
