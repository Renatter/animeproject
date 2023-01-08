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
    const getCharactersAPI  = async(id)=>{
        animelist.value = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
        .then(data => data.json())
        .then(res => res.data)
      console.log(animelist.value)
    }
    return{
       getAnime, animes,getAiringAPI,getManga,pageAll,allAnime,animeStore,getAnimeById,getCharactersAPI,
    }
})