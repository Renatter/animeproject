<template>
  <div>
<AnimeCard :anime="AnimeApi.getManga()" />    
  </div>
</template>

<script setup>
  import AnimeCard from '../components/AnimeCard.vue';
  import {useAnimeApi} from '../store/AnimeApi.js'
  const AnimeApi = useAnimeApi();
</script>

<style lang="scss" scoped>

</style>