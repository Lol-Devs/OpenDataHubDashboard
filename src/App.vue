<template>

    <south-tyrol-header></south-tyrol-header>

    <!-- Divider -->
    <div>
      <h1 class="font-sp text-2xl text-center text-secondary-500">....</h1>
    </div>

    <!-- Hotelblock -->
    <div>
      <h2 class="text-secondary-300 font-bold text-2xl text-center my-5">Hotels in Südtirol</h2>
      <div class="flex flex-col items-center justify-center lg:flex-row flex-wrap" >
      <div >
        <div class="flex flex-col items-center mb-8 mx-7" >
        <p class="font-sp text-8xl text-secondary-400">12%</p>
        <p class="text-sgray" >Hotelauslastung in Prozent</p>
      </div>
      </div>
      <div>
        <div class="flex flex-col items-center mb-8 mx-7" >
        <p class="font-sp text-8xl text-secondary-400">10.300</p>
        <p class="text-sgray" >Belegte Zimmer</p>
      </div>
      </div>
      <div>
        <div class="flex flex-col items-center mb-8 mx-7" >
        <p class="font-sp text-8xl text-secondary-400">56.083</p>
        <p class="text-sgray" > Freie Betten</p>
      </div>
      </div>
    </div>
    </div>

    <!-- Divider -->
    <div>
      <h1 class="font-sp text-2xl text-center text-secondary-500">....</h1>
    </div>

    <!-- Gastro Block -->
    
     <div>
      <h2 class="text-secondary-300 font-bold text-2xl text-center my-5">Gastronomie in Südtirol</h2>
      <div class="flex flex-col items-center justify-center lg:flex-row flex-wrap" >
      <div >
        <div class="flex flex-col items-center mb-8 mx-7" >
        <p class="font-sp text-8xl text-secondary-400">12.036</p>
        <p class="text-sgray" >Ausgegebene Speisen in den letzten 24 Stunden</p>
      </div>
      </div>
      <div>
        <div class="flex flex-col items-center mb-8 mx-7" >
        <p class="font-sp text-8xl text-secondary-400">10.300</p>
        <p class="text-sgray" >Restaurants und </p>
      </div>
      </div>
      <div>
        <div class="flex flex-col items-center mb-8 mx-7" >
        <p class="font-sp text-8xl text-secondary-400">56.083</p>
        <p class="text-sgray" > Freie Betten</p>
      </div>
      </div>
    </div>
    </div>
</template>

<script>

import SouthTyrolHeader from './components/SouthTyrolHeader.vue'

export default {
    name: 'App',
    components: {
        SouthTyrolHeader
    }
}
</script>