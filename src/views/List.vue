<template>
  <div>
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
          <input type="text" class="bg-white p-1 text-sgray placeholder-gray-300 outline-none border-b-2 focus:border-secondary-400" placeholder="Hotel mit Meerblick">
        </div>
        <div>
          <div>
            <div class="flex flex-row  items-center">
              <p class="mr-5 text-sm font-medium text-secondary-500">minimum Sterne:</p>
              <div>
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
              <div>
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
              <div>
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
              <div>
                <svg
                  class="h-6 text-gray-300"
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
                  class="h-6 text-gray-300"
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
          

<select class="bg-white p-2 text-sgray outline-none" name="hotel" id="hotel">
  <option value="none">Keines gewählt</option>
  <option value="sauna">Sauna</option>
  <option value="essen">Essen</option>
</select>
        </div>
      </div>
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

      <!-- List -->
      <div>
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:gap-4 m-5"
        >
          <div
            class="bg-gray-200 bg-opacity-25 w-full p-4 shadow-lg rounded-2xl flex flex-col items-center overflow-hidden"
          >
            <div>
              <div class="flex flex-row items-center">
                <div>
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
                <div>
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
                <div>
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

                <div>
                  <p class="text-secondary-300 font-bold text-lg ml-1">S</p>
                </div>
              </div>
            </div>
            <h3 class="text-secondary-400 font-sp text-xl text-center">
              Hotel mit Meerblick
            </h3>

            <div class="flex">
              <p class="text-sgray font-medium">ORT</p>
              <p class="text-sgray font-bold mx-2">·</p>
              <p class="text-sgray font-medium">Halbpension</p>
            </div>

            <p class="text-sgray font-light">Ausgebucht</p>

            <div class="my-2 w-full border-t-2 border-b-2 py-2">
              <div class="mx-12 flex flex-row justify-between">
                <p class="font-medium text-secondary-500">Fenster</p>
                <p class="font-light text-sgray">Nein</p>
              </div>
              <div class="border-b-2 mx-8 my-2"></div>
              <div class="mx-12 flex flex-row justify-between">
                <p class="font-medium text-secondary-500">Fenster</p>
                <p class="font-light text-sgray">Nein</p>
              </div>
            </div>

            <div
              class="flex flex-row items-center mt-2 hover:border-secondary-300 border-b-2 transition duration-300 ease-linear"
            >
              <p class="font-medium text-secondary-400 mr-4">
                Zur Hotelübersicht
              </p>
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
