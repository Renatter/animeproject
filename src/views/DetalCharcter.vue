<template>
    <div>
      <NameChar :name="character"/>
      <AnimeChar :anime="character"/>
      
      <MangaChar :manga="character" /> 
    </div>
  </template>
  
  <script>
    import axios from "axios";
    import NameChar from '../components/СharDetail/NameChar.vue'
    import AnimeChar from "../components/СharDetail/AnimeChar.vue";
    import MangaChar from "../components/СharDetail/MangaChar.vue";
;
    
    export default {
      name: "DetalAnime",
      components: {
        NameChar,
        AnimeChar,
        MangaChar
      },
      data() {
        return {
          character: [],
        };
      },
  
      created() {
        setTimeout(() => {
          axios
            .get(
              `https://api.jikan.moe/v4/characters/${this.$route.params.Cid}/full`
            )
            .then((response) => {
              this.character = response.data.data;
              console.log(this.character);
            });
        }, 1000);
      },
    };
  </script>
  
  <style lang="scss" scoped></style>
  