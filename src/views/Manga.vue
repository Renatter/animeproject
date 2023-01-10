<template>
  <div >
      <div class="flex items-center">
        <h1 class="mr-[25px]">Manga</h1>
      <input 
      v-model="search" 
      class=" 
      h-[45px] 
      w-[400px] 
      shadow 
      appearance-none 
      border 
      rounded  
      py-2 
      px-3 
      text-gray-700 
      leading-tight 
      focus:outline-none 
      focus:shadow-outline"  
      placeholder="Search Manga">
      </div> 
   
<MangaCard :anime="AnimeApi.getMangaSearch(search)" />    
  </div>
</template>

<script setup>
import { ref,watch } from 'vue';
  import MangaCard from '../components/MangaCard.vue';
  import {useAnimeApi} from '../store/AnimeApi.js'
  const AnimeApi = useAnimeApi();
  const search = ref('')

  watch(search, (newValue) => {
  AnimeApi.getMangaSearch(newValue);
    })
</script>

<style lang="scss" scoped>

</style>