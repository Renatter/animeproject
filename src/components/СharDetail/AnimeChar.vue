<template>
    <div>
      <h1>Аниме</h1>
      <div class="flex">
        
          <div class="pr-[20px]" v-for="ani in anime.anime.slice(0,5)">
          <div>
            <router-link  :to="{ path: '/detalAnime/' + ani.anime.mal_id }">
            <img  class="w-[150px] h-[200px] rounded-[15px] " :src="ani.anime.images.jpg.image_url" alt="" />
            <p class="text-center">{{ ani.anime.title.slice(0,15) }}</p>
          </router-link>
          </div>
        </div>
        
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "AnimeChar",
      props: ["anime"],
    };
  </script>
  
  <style lang="scss" scoped></style>
 