<template>
    <div class="flex justify-center  mt-[55px]">
       
      <vs-button
        v-if="x>1"
        
        @click="dinc"
        
        class="w-[90px]"
      >
        Back
      </vs-button>
      <vs-button v-else class="w-[90px]" disabled >Back</vs-button>
      <vs-button
        
        @click="inc"
        class="w-[90px]"
      >
        Next
      </vs-button>
      
    </div>
  </template>
  <script setup>
import { ref,watch } from 'vue';
import {useAnimeApi} from '../store/AnimeApi.js'
const AnimeApi = useAnimeApi();
const x = ref(1);
function inc(){
    x.value++;
}
function dinc(){
    x.value--
}
watch(x, (newValue) => {
  AnimeApi.pageAll(newValue);
}) 

   
  </script>