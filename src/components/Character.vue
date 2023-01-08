<template>
  <div>
    <div class="characters">
      <div class="flex text-[15px]">
        <img
          class="w-[100px] rounded-[10px]"
          :src="chara.character.images.jpg.image_url"
          alt=""
        />
        <div class="pl-[15px]">
          <div class="flex">
            <p class="text-[#475569]">Name</p>
            <p class="pl-[6px]">{{ chara.character.name}}</p>
          </div>
          <div class="flex">
            <p class="text-[#475569]">Role</p>
            <p class="pl-[6px]">{{ chara.role}}</p>
          </div>
          
          <vs-button class="w-[200px] pt-" @click="active = 0">
            More
          </vs-button>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    name: 'Character',
    props:['chara']
    
  }
  
</script>

<style lang="scss" scoped>

</style>