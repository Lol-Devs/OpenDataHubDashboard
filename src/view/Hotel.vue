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
          <div class="flex flex-row items-center">
            <div>
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
            <div>
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
            <div>
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

            <div>
              <p class="text-secondary-300 font-bold text-xl ml-1">S</p>
            </div>
          </div>

          <p
            class="font-sp text-4xl mx-5 md:text-6xl lg:text-9xl text-center text-secondary-200"
          >
            St. Hotelname Welness und Spa mit Dusche
          </p>
          <h2 class="text-secondary-100 font-bold text-2xl text-center mt-3">
            dein Hotel in TollerOrt
          </h2>
          <div
            class="flex flex-row items-center mt-2 hover:border-secondary-100 border-b-2 transition duration-300 ease-linear"
          >
            <p class="font-medium text-secondary-200 mr-4">Hotelwebseite</p>
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

      <h2 class="text-sgray font-bold text-2xl text-center mb-6 mt-24">
        Austattung
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
  name: "Hotel",
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
