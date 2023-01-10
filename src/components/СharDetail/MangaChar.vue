<template>
    <div>
      <h1>Манга</h1>
      <div class="flex ">
        <div class="pr-[20px]" v-for="mang in manga.manga.slice(0,5)">
          <div>
            <router-link  :to="{ path: '/detalManga/' + mang.manga.mal_id }">
            <img  class="w-[150px] h-[200px] rounded-[15px] " :src="mang.manga.images.jpg.image_url" alt="" />
            <p class="text-center">{{ mang.manga.title.slice(0,15) }}</p>
          </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "MangaChar",
      props: ["manga"],
    };
  </script>
  
  <style lang="scss" scoped></style>
  