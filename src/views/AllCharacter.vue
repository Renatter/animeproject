<template>
    <div>
      <h1>Main</h1>
      <div class="flex flex-wrap">
        <div
          v-for="chara in mainRole()"
          class="w-[370px] m-[10px] p-[20px] border rounded-[10px]"
        >
          <Character :chara="chara" />
        </div>
        
      </div>
      <h1>Supporting</h1>
      <div class="flex flex-wrap">
        <div
          v-for="chara in supportRole()"
          class="w-[370px] m-[10px] p-[20px] border rounded-[10px]"
        >
          <Character :chara="chara" />
        </div>
    </div>
    </div>
  </template>
  
  <script>
    import axios from "axios";
    import Character from "../components/Character.vue";
    import reviews from "../components/reviews.vue";
  
    export default {
      name: "DetalAnime",
      components: {
        Character,
        reviews,
      },
      data() {
        return {
          charachters: [],
        };
      },
      methods: {
        mainRole() {
          return this.charachters.filter((x) => x.role === "Main");
        },
        supportRole() {
          return this.charachters.filter((x) => x.role === "Supporting");
        },
      },
      created() {
        setTimeout(() => {
          axios
            .get(
              `https://api.jikan.moe/v4/anime/${this.$route.params.Allid}/characters`
            )
            .then((response) => {
              this.charachters = response.data.data;
              console.log(this.charachters);
            });
        }, 1000);
      },
    };
  </script>
  
  <style lang="scss" scoped></style>
  