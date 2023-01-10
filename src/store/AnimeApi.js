import { defineStore } from "pinia";
import { ref } from "vue";


const url = 'https://api.jikan.moe/v4/anime?q='


export const useAnimeApi = defineStore("AnimeApi ", ()=>{
    
    const animes = ref([])
    const characters = ref([])
 

    const allAnime = async()=>{
        const res = await fetch(`https://api.jikan.moe/v4/anime`)
            const data = await res.json();
            console.log(data.data)
            animes.value = data.data;
    };

    const getAnime = async(search)=>{
        const res = await fetch(`${url}${search}`)
            const data = await res.json();
            console.log(data.data)
            animes.value = data.data;
    };
    const getMangaSearch = async(search)=>{
        const res = await fetch(`https://api.jikan.moe/v4/manga?q=${search}`)
            const data = await res.json();
            console.log(data.data)
            animes.value = data.data;
    }

    const getAiringAPI = async(num)=>{
            const res = await fetch(`https://api.jikan.moe/v4/top/anime?page=${num}`)
            const data = await res.json();
            console.log(data.data)
            animes.value = data.data;
    };
    const getManga = async()=>{
        const res = await fetch(`https://api.jikan.moe/v4/manga`)
            const data = await res.json();
            console.log(data.data)
            animes.value = data.data;
    };
   
    const pageAll = async(number)=>{
        const res = await fetch(`https://api.jikan.moe/v4/anime?page=${number}`)
            const data = await res.json();
            console.log(data.data)
            animes.value = data.data;
    };

    


    const animeStore = (object)=>{
        AnimeApi.anime.push({...object,})
    };
    const getAnimeById = async(id)=>{
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`)
        const data = await res.json();
        console.log(data.data)
        animes.value = data.data;
    }
 
    const Calendar  = async(day)=>{
        animes.value = await fetch(`https://api.jikan.moe/v4/schedules?filter=${day}`)
        .then(data => data.json())
        .then(res => res.data)
      console.log(animes.value)
    }
    return{
       getAnime, animes,getAiringAPI,getManga,pageAll,allAnime,animeStore,getAnimeById,getMangaSearch,Calendar
    }
})