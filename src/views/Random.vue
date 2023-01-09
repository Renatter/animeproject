<template>
    <div>
      <div>
        <h1>{{ anime.title }}</h1>
        <div class="flex justify-between pt-[25px]">
          <div class="left-desc flex">
            <img
              class="border rounded-[15px]"
              :src="anime.images.jpg.image_url"
              alt=""
            />
            <div class="info pl-[20px] text-[20px]">
              <h3 class="text-[#646CFF]">Информация</h3>
              <ul>
                <li class="pt-[10px] flex">
                  <p class="text-[#475569]"></p>
                  Тип {{ anime.type }}
                </li>
                <li class="pt-[10px] flex">
                  <p class="text-[#475569]">Эпизоды:</p>
                  {{ anime.episodes }}
                </li>
                <li class="pt-[10px] flex">
                  <p class="text-[#475569]">Дата:</p>
                  {{ anime.aired.string }}
                </li>
                <li class="pt-[10px] flex">
                  <p class="text-[#475569]">Длительность эпизода:</p>
                  {{ anime.duration }}
                </li>
                <li class="pt-[10px] flex">
                  <p class="text-[#475569]">Статус:</p>
                  {{ anime.status }}
                </li>
                <li class="pt-[10px] flex">
                  <p class="text-[#475569]">Премьера состоялась:</p>
                  {{ anime.season }} {{ anime.year }}
                </li>
                <li class="pt-[10px] flex">
                  <p class="text-[#475569]">Жанры:</p>
                  <a class="pl-[10px]" v-for="gener in anime.genres "
                    >{{ gener.name }}</a
                  >
                </li>
                <li class="pt-[10px] flex">
                  <p class="text-[#475569]">Рейтинг:</p>
                  {{ anime.rating }}
                </li>
                <li class="pt-[10px] flex">
                  <p class="text-[#475569]">Источник:</p>
                  {{ anime.source }}
                </li>
              </ul>
            </div>
          </div>
  
          <div class="pr-[25px] right-desc flex">
            <div class="pl-[20px] info-r">
              <div class="rait">
                <div class="w-[75px] place-content-end">
                  <div
                    v-if="anime.score>6"
                    class="p-[20px] bg-[#86efac] border-[#16a34a] text-[#14532d] border rounded-[10px]"
                  >
                    {{ anime.score }}
                  </div>
                  <div
                    v-else-if="anime.score ===null"
                    class="p-[20px] bg-[#ff052a] border rounded-[10px]"
                  >
                    null
                  </div>
                  <div
                    v-else
                    class="p-[20px] border-rose-600 bg-[#fb7185] border rounded-[10px]"
                  >
                    {{ anime.score }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ОПИСАНИЕ -->
      <div class="pr-[25px]">
        <h1>Описание</h1>
        <p>{{ anime.synopsis }}</p>
      </div>
  
      <!-- ПЕРСОНАЖИ -->
      <h1>Персонажи</h1>
      <div class="flex flex-wrap">
        <div
          v-for="chara in mainRole()"
          class="w-[420px] m-[10px] p-[20px] border rounded-[10px]"
        >
          <Character :chara="chara" />
        </div>
      </div>
  
      <!-- Picture -->
  
      <!-- Reviews -->
  
      <div>
        <h1>Reviews</h1>
        <div v-for="review in recommendations.slice(0,3)">
          <reviews :review="review" />
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
          anime: [],
          charachters: [],
          recommendations: [],
        
       
         
        };
      },
      methods: {
        mainRole() {
          return this.charachters.filter((x) => x.role === "Main");
        },
      },
      
      created() {
        axios
          .get(`https://api.jikan.moe/v4/random/anime`)
          .then((response) => {
            this.anime = response.data.data;
            console.log(this.anime)
          });
        setTimeout(() => {
        axios
          .get(
            `https://api.jikan.moe/v4/anime/${this.anime.mal_id}/characters`
          )
          .then((response) => {
            this.charachters = response.data.data;
            console.log(this.charachters)
            
          });
          axios
          .get(
            `https://api.jikan.moe/v4/characters/40/full`
          )
          .then((response) => {
           
            console.log(response.data.data)
            
          });
 
        }, 1000)
      },
    };
  </script>
  
  <style scoped>
    h1 {
      padding-top: 35px;
    }
  </style>
  