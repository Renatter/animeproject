<template>
    <div>
      <NameChar :namex="character"/>
      <AnimeChar :anime="character"/>
      
      <MangaChar :manga="character" /> 
    </div>
  </template>
  
  <script>
    import axios from "axios";
    import NameChar from '../components/СharDetail/NameChar.vue'
    import AnimeChar from "../components/СharDetail/AnimeChar.vue";
    import MangaChar from "../components/СharDetail/MangaChar.vue";
    
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
          news:[],
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
             
            });
            axios
            .get(
              `https://api.jikan.moe/v4/anime/1/news`
            )
            .then((response) => {
              this.news = response.data.data;
              console.log(this.news);
            });
        }, 1000);
      },
    };
  </script>
  
  <style lang="scss" scoped></style>
  