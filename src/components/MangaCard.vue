<template>
  <div class="flex  flex-wrap ">
  
    <div class="w-[171px]  overflow-hidden shadow-lg  rounded-[20px] ml-[30px] mt-[19px]  hover:text-[#22d3ee] "  v-for="anime of AnimeApi.animes">
      <div>
        <router-link :to="{ path: '/detalManga/' + anime.mal_id }">
        <img class="w-[171px] h-[205px] " :src="anime.images.jpg.image_url" alt="Sunset in the mountains" />
    <div class="px-6 py-4">
      <div class="font-bold text-[15px] leading-[17px] mb-2 flex flex-wrap ">{{anime.title}}</div>
    </div>
  </router-link>
      </div>
    
  </div>
  </div>
  
  </template>
  
  <script setup>
  import {useAnimeApi} from '../store/AnimeApi.js'
  
  const AnimeApi = useAnimeApi();
  
  const props = defineProps({
      anime:{
          type:Object,
          required: true,
          default:()=>{}
      }
  })
  
  
  </script>
  
  <style lang="scss" scoped>
  
  </style>