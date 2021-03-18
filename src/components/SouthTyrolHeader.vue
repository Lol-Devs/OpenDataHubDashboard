<template>
    <div>
      <div class="flex flex-col items-center">
        
        <div
          class="bg-st-img flex-col h-40 lg:h-80 w-full bg-cover flex justify-center items-center"
        ><router-link to="/">
          <img src="/src/assets/st-logo-white.png" class="w-60" alt="" /></router-link>
        </div>

        <router-link to="/list">
          <h1 class="text-3xl mx-6 font-sp text-center mt-6 text-primary">
          Hotel Übersicht mit dem Open Data Hub
        </h1>
        </router-link>
        
      </div>
    </div>
</template>