<template>

<div>
  <dashboard></dashboard>
  <list></list>
  <hotel></hotel>
</div>
    
</template>

<script>

import Dashboard from './view/Dashboard.vue'

import Hotel from './view/Hotel.vue'
import List from './view/List.vue'

export default {
    name: 'App',
    components: {
        Dashboard,
        Hotel,
        List,
    }
}
</script>