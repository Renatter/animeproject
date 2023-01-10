<template>
    <div>
      <h1>{{ name.name }}{{ name.name_kanji }}</h1>
      <div class="info flex pt-[35px]">
        <img
          class="rounded-[30px] w-[260px]"
          :src="name.images.jpg.image_url"
          alt=""
        />
        <div class=" ml-[25px] info-text">
          
            
            <div class="characters border rounded-[10px] w-[380px] p-[15px]">
              <div class="flex text-[15px] items-center">
                <img
                  class="w-[100px] rounded-[10px]"
                  :src="name.voices[0].person.images.jpg.image_url"
                  alt=""
                />
                <div class="pl-[15px]">
                  <div class="flex">
                    <p class="text-[#475569]">Voice actors</p>
                  </div>
                  <div class="flex">
                    <p class="text-[#475569]">Name</p>
                    <p class="pl-[6px]">{{ name.voices[0].person.name}}</p>
                  </div>
  
                  <vs-button class="w-[200px] pt-" @click="active = 0">
                    More
                  </vs-button>
                </div>
              </div>
            </div>
         

          <div class="text-op px-[14px] pt-[25px]">
            <p>ОПИСАНИЕ</p>
            <p>{{ name.about.slice(0,430) }}</p>
          </div>
        </div>
      </div>
      
    </div>
  </template>
  
  <script>
    export default {
      name: "NameChar",
      props: ["name"],
    };
  </script>
  
  <style lang="scss" scoped></style>
  