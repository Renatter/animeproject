<template>
  <Header/>
  <div class="flex pt-[60px] ">
    <div class="min-w-[900px]">
      <router-view></router-view>
    </div>
   
  </div>
  
 </template>

<script setup>


import Header from './components/Header.vue';
import News from './views/News.vue';


</script>


<style scoped>
</style>
