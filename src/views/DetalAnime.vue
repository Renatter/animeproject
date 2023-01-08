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
      <form>
        <div class="">
          
          <div class="form-check form-check-inline">
            <input
              class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio1"
              value="Recommended"
              v-model="selectedOption"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="inlineRadio10"
              >Recommended</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
              class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-[#b91c1c] checked:border-[#b91c1c]  focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadioOptions"
              id="inlineRadio2"
              value="Not Recommended"
              v-model="selectedOption"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="inlineRadio20"
              >Not Recommended</label
            >
          </div>
          <div class="form-check form-check-inline">
            <input
            class="form-check-input form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:bg-gray-800 checked:border-gray-800 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="radio"
              name="inlineRadio3"
              id="inlineRadio3"
              value="Mixed Feelings"
              v-model="selectedOption"
            />
            <label
              class="form-check-label inline-block text-gray-800"
              for="inlineRadio30"
              >Mixed Feelings</label
            >
          </div>
        </div>
      </form>
      <div v-if="recommendations.length<1">
        <p class="text-[#b91c1c] text-center text-[50px] pt-[20px]">
          No Reviews
        </p>
      </div>
      <div v-else v-for="review in filteredReviews">
        <reviews :review="review" />
      </div>
    </div>
  </div>
</template>

<script>
  import axios from "axios";
  import Character from "../components/Character.vue";
  import reviews from "../components/reviews.vue";
  import Picture from "../components/Picture.vue";
  export default {
    name: "DetalAnime",
    components: {
      Character,
      reviews,
      Picture,
    },
    data() {
      return {
        anime: [],
        charachters: [],
        recommendations: [],
        selectedOption: null,
        rec:[]
       
      };
    },
    methods: {
      mainRole() {
        return this.charachters.filter((x) => x.role === "Main");
      },
    },
    computed:{
      filteredReviews(){
        return  this.recommendations.filter(x => x.tags[0] === this.selectedOption)
      }
    },
    created() {
      axios
        .get(`https://api.jikan.moe/v4/anime/${this.$route.params.Aid}`)
        .then((response) => {
          this.anime = response.data.data;
        });
        axios
        .get(`https://api.jikan.moe/v4/anime/${this.$route.params.Aid}/recommendations`)
        .then((response) => {
          this.rec = response.data.data;
          console.log(this.rec)
        });
      axios
        .get(
          `https://api.jikan.moe/v4/anime/${this.$route.params.Aid}/characters`
        )
        .then((response) => {
          this.charachters = response.data.data;
          
        });
      axios
        .get(`https://api.jikan.moe/v4/anime/${this.$route.params.Aid}/reviews`)
        .then((response) => {
          this.recommendations = response.data.data;
         
        });
    },
  };
</script>

<style scoped>
  h1 {
    padding-top: 35px;
  }
</style>
