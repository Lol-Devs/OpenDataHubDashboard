<template>
  <div v-if="accommodation">
    <south-tyrol-header></south-tyrol-header>

    <!-- Divider -->
    <div>
      <h1 class="font-sp text-xl text-center text-secondary-500">....</h1>
    </div>

    <!-- Hotelblock -->
    <div>
      <div>
        <div class="flex flex-col items-center mb-16 mt-4 mx-7">
          <div class="flex flex-row items-center">
            <div v-for="index in accommodation.stars.number" :key="index">
              <svg
                class="h-7 text-secondary-300"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                />
              </svg>
            </div>
          
            <div v-if="accommodation.stars.s">
              <p class="text-secondary-300 font-bold text-xl ml-1">S</p>
            </div>
          </div>

          <p
            class="font-sp text-4xl mx-5 md:text-6xl lg:text-9xl text-center text-secondary-200"
          >
            {{ accommodation.name }}
          </p>
          <h2 class="text-secondary-100 font-bold text-2xl text-center mt-3">
            dein Hotel in {{ accommodation.location.city }}<br>({{accommodation.location.region}})
          </h2>
          <div
            class="flex flex-row items-center mt-2 hover:border-secondary-100 border-b-2 transition duration-300 ease-linear"
          >
            <a class="font-medium text-secondary-200 mr-4" target="_blank" :href="accommodation.contact.website">Hotelwebseite</a>
            <svg
              class="h-5 text-secondary-200"
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
      </div>

      <div></div>

      <div class="bg-secondary-600 bg-opacity-50 mx-5 px-8 py-4">
        <h3 class="font-sp text-xl text-primary pb-3">Zum Hotel</h3>
        <p class="text-sgray" v-html="accommodation.shortdesc"></p>
      </div>

      <div
        class="flex flex-col items-center justify-center lg:flex-row flex-wrap mt-12"
      >
        <div>
          <div class="flex flex-col items-center mb-8 mx-7">
            <p class="font-sp text-6xl text-secondary-600">{{ accommodation.beds }}</p>
            <p class="text-sgray font-medium">Betten</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center mb-8 mx-7">
            <p class="font-sp text-6xl text-secondary-600">{{ accommodation.altitude }} m</p>
            <p class="text-sgray font-medium">ü.d.M.</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center mb-8 mx-7">
            <p class="font-sp text-6xl text-secondary-600">56xd3</p>
            <p class="text-sgray font-medium">ein toller fact</p>
          </div>
        </div>
      </div>
    </div>

    <div class="mt-12 mx-5 flex flex-col xl:flex-row">
      <div class="h-80 bg-red-300 w-full">
        <img :src="accommodation.image ? accommodation.image : '/src/assets/no-photo.png'">
      </div>

      <div class="xl:pl-5 pt-5 xl-pt-0">
        <h3 class="font-sp text-xl text-primary pb-3">Beschreibung</h3>
        <p class="text-sgray" v-html="accommodation.longdesc">
        </p>
      </div>
    </div>

    <div>
      <div class="h-96 bg-red-300">
      <l-map v-model="zoom" v-model:zoom="zoom"
        :center="[accommodation.location.latitude, accommodation.location.longitude]"
      >
        <l-tile-layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        <l-control-layers />
        <l-marker :lat-lng="[accommodation.location.latitude, accommodation.location.longitude]">
          <l-icon :icon-url="iconUrl" :icon-size="iconSize" />
        </l-marker>

      </l-map>
      </div>
    </div>

    <div class="bg-secondary-200 mt-12 px-8 py-4 flex flex-col md:flex-row items-center justify-evenly">
      
      <div class="flex flex-row items-center">
        <p class="font-sp text-lg text-white">E-Mail:</p>
        <a class="text-white pl-2" :href="'mailto:' + accommodation.contact.email">{{ accommodation.contact.email }}</a>
      </div>

      <div class="flex flex-row items-center">
        <p class="font-sp text-lg text-white">Telefon:</p>
        <a class="text-white pl-2" :href="'tel:' + accommodation.contact.phone ">{{ accommodation.contact.phone }}</a>
      </div>

      <div class="flex flex-row items-center">
        <p class="font-sp text-lg text-white">Web:</p>
        <a class="text-white pl-2" target="_blank" :href="accommodation.contact.website">
          {{ 
            accommodation.contact.website.startsWith('https://') ?
              accommodation.contact.website.slice(8) : accommodation.contact.website.slice(7)
          }}
        </a>
      </div>

    </div>

    <div class="flex items-center flex-col w-full">
      <p
        class="text-secondary-500 text-center font-sp text-6xl mx-5 mb-6 mt-12"
      >
        Urlaub im Herzen Europas
      </p>

      <img src="../assets/st-berge.png" alt="" />
    </div>

    <!-- Link -->
    <div></div>
  </div>
</template>

<script>
import SouthTyrolHeader from "../components/SouthTyrolHeader.vue";
import Service from '../service/index.js';
import { LMap, LIcon, LTileLayer, LMarker, LControlLayers, LTooltip } from "@vue-leaflet/vue-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  name: "Hotel",
  components: {
    SouthTyrolHeader,
    LMap,
    LIcon,
    LTileLayer,
    LMarker,
    LControlLayers,
    LTooltip,
  },
  data() {
    return {
      accommodation: null,
      zoom: 12,
    };
  },
  created() {},
  mounted() {
    Service.getAccommodation(this.$route.params.id)
      .then(accommodation => {
        this.accommodation = accommodation;
      })
      .catch();
  },

  props: {},
  methods: {},
};
</script>
