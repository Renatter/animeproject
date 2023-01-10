<template>
    <div>
      <h1>Аниме</h1>
      <div class="flex ">
        <div class="pr-[20px]" v-for="mang in manga.manga.slice(0,5)">
          <div>
            <img  class="w-[150px] h-[200px] rounded-[15px] " :src="mang.manga.images.jpg.image_url" alt="" />
            <p class="text-center">{{ mang.manga.title.slice(0,15) }}</p>
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
  