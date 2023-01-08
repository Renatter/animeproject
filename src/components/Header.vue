<template>
  <header class="flex items-center justify-between">
    <div class="left-h flex items-center">
        <div class="img pr-[90px]">
        <img src="https://www.seekpng.com/png/full/140-1401870_logo-de-anime-png.png" alt="" class="w-[205px]">
    </div>
    <ul>
        <router-link 
         :to="menu.link"
         v-for="menu of menuLink"
         :key="menu" 
         class=" pr-[15px]"       
        >
           {{menu.title}}
        </router-link>
    </ul>
    </div>

    <div class="mb-4">
     <router-link :to="menuLink[1].s">
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
      placeholder="Search Anime"> 
    </router-link>
        
  
      
     
    </div>
  
  </header>
</template>

<script setup>
import { ref,watch } from 'vue';
import {useAnimeApi} from '../store/AnimeApi'
const AnimeApi = useAnimeApi();
const search = ref('')
const menuLink = [
    {title: 'Home', id:1, link:"/", },
    {title: 'Search', id:2, link:"/search", s:'/search'},
    {title: 'Top 100', id:3, link:"/top100"},
    {title: 'Manga', id:4, link:"/manga"},
    {title: 'Random', id:5,link:"/random"},
    {title: 'Calendar', id:6,link:"/calendar" },   
]

watch(search, (newValue) => {
  AnimeApi.getAnime(newValue);
    })
</script>

<style lang="scss" scoped>

</style>