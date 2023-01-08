<template>
    <div>
<AnimeCard :anime="AnimeApi.allAnime()"/>
        <Pagination/>
    </div>
</template>

<script setup>
import AnimeCard from '../components/AnimeCard.vue';
import {useAnimeApi} from '../store/AnimeApi.js'
import Pagination from '../components/Pagination.vue';  
const AnimeApi = useAnimeApi();

</script>

<style lang="scss" scoped>

</style>