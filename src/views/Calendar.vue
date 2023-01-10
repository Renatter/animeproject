<template>
    <div>
      <div class="flex items-center">
        <div class=" top-16 w-72 mr-[25px]">
        <Listbox v-model="selectedPerson">
          <div class="relative mt-1">
            <ListboxButton
              class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
            >
              <span class="block truncate">{{ selectedPerson }}</span>
              <span
                class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2"
              >
              </span>
            </ListboxButton>
  
            <transition
              leave-active-class="transition duration-100 ease-in"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
              >
                <ListboxOption
                  v-slot="{ active, selected }"
                  v-for="person in people"
                  :key="person.name"
                  :value="person.name"
                  as="template"
                >
                  <li
                    :class="[
                    active ? 'bg-amber-100 text-amber-900' : 'text-gray-900',
                    'relative cursor-default select-none py-2 pl-10 pr-4',
                  ]"
                  >
                    <span
                      :class="[
                      selected ? 'font-medium' : 'font-normal',
                      'block truncate',
                    ]"
                      >{{ person.name }}</span
                    >
                    <span
                      v-if="selected"
                      class="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600"
                    >
                    </span>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
      </div>
      <div class="flex">Текущая дата: <p class="text-[#dc2626] ml-[15px]">{{ now.toDateString() }}</p></div>
      </div>
    </div>
    <AnimeCard :anime="AnimeApi.Calendar(selectedPerson)"/>
  </template>
  
  <script setup>
import AnimeCard from "../components/AnimeCard.vue";
import {useAnimeApi} from '../store/AnimeApi.js'


    import { ref } from "vue";
    import {
      Listbox,
      
      ListboxButton,
      ListboxOptions,
      ListboxOption,
    } from "@headlessui/vue";
    const AnimeApi = useAnimeApi();
    const people = [
      { name: "monday" },
      { name: "tuesday" },
      { name: "wednesday" },
      { name: "thursday" },
      { name: "friday" },
    ];
    const selectedPerson = ref(people[0].name);
    const now = new Date();
     
console.log(now.toLocaleDateString());  
  </script>
  