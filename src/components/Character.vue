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
          <div class="flex">
            <p class="text-[#475569]">Voice actors</p>
            <p class="pl-[6px]">{{ chara.voice_actors[0].person.name}}</p>
          </div>
          <router-link :to="{ path: '/detalCaharcter/' + chara.character.mal_id }">
            <vs-button class="w-[200px] pt-" @click="active = 0">
              More
            </vs-button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Character",
    props: ["chara"],
  };
</script>

<style lang="scss" scoped></style>
