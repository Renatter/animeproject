<template>
   <AnimeCard  :anime="AnimeApi.getAnime(search)"/>   
</template>

<script setup>
import { ref } from 'vue';
import AnimeCard from '../components/AnimeCard.vue';
import {useAnimeApi} from '../store/AnimeApi.js'

   
const AnimeApi = useAnimeApi();
const search = ref('')


</script>

<style lang="scss" scoped>

</style>