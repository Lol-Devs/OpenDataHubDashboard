<template>
  <div>
    <south-tyrol-header></south-tyrol-header>

    <!-- Divider -->
    <div>
      <h1 class="font-sp text-xl text-center text-secondary-500">....</h1>
    </div>

    <!-- Hotelblock -->
    <div>
      <div>
        <div class="flex flex-col items-center mb-16 mt-4 mx-7">
          <p class="font-sp text-4xl lg:text-6xl text-secondary-200">6.508</p>
          <h2 class="text-secondary-100 font-bold text-2xl text-center mt-3">
            Hotels <span class="text-secondary-200">mit Sauna</span> für dich in
            Südtirol
          </h2>
        </div>
      </div>

       <!-- Filter -->
      <div>
        <div class="flex flex-col items-center mb-16 mt-4 mx-7">
          <h2 class="text-secondary-100 font-bold text-2xl text-center mt-3">
            Filter
          </h2>
        </div>
      </div>

        <!-- List -->
        <div>
        <div class="flex flex-col items-center mb-16 mt-4 mx-7">
          <p class="font-sp text-4xl lg:text-6xl text-secondary-200">6.508</p>
          <h2 class="text-secondary-100 font-bold text-2xl text-center mt-3">
            Hotels <span class="text-secondary-200">mit Sauna</span> für dich in
            Südtirol
          </h2>
        </div>
      </div>

      

      <h2 class="text-sgray font-bold text-2xl text-center mb-6 mt-24">
        Aktuelle Auslastung
      </h2>

      <div
        class="flex flex-col items-center justify-center lg:flex-row flex-wrap"
      >
        <div>
          <div class="flex flex-col items-center mb-8 mx-7">
            <p class="font-sp text-6xl text-secondary-600">12%</p>
            <p class="text-sgray font-medium">Hotelauslastung in Prozent</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center mb-8 mx-7">
            <p class="font-sp text-6xl text-secondary-600">10.300</p>
            <p class="text-sgray font-medium">Belegte Zimmer</p>
          </div>
        </div>
        <div>
          <div class="flex flex-col items-center mb-8 mx-7">
            <p class="font-sp text-6xl text-secondary-600">56.083</p>
            <p class="text-sgray font-medium">Freie Betten</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Link -->
    <div></div>
  </div>
</template>

<script>
import SouthTyrolHeader from "../components/SouthTyrolHeader.vue";
export default {
  name: "Dashboard",
  components: {
    SouthTyrolHeader,
  },
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>
