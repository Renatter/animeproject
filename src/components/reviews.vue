<template>
    <div>
      <div class="pl-[25px] pt-[20px] review flex">
        <img
          class="w-[50px] h-[50px] border rounded-[8px]"
          :src="review.user.images.jpg.image_url"
          alt=""
        />
        <div class="review-user px-[25px]">
          <div class=" flex">
            <div class="user-name text-[#2563eb]">{{ review.user.username }}</div>
            <div v-if="review.tags[0] === 'Mixed Feelings'" class="pl-[15px] text-[#9ca3af]">
                Mixed Feelings
            </div>
            <div v-else-if="review.tags[0] === 'Not Recommended'" class="pl-[15px] text-[#e11d48]">
                Not Recommended
            </div>
            <div v-else-if="review.tags[0] === 'Recommended'" class="pl-[15px] text-[#16a34a]">
                Recommended
            </div>
          </div>
          <div class="date text-[14px] text-[#5e6369]">
            {{ review.date }}
          </div>
          <div class="user-text">
           {{ review.review.substring(0, 500) }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
    export default {
      name: "Reviews",
      props: ["review"],
      data() {
        return {};
      },
    };
  </script>
  
  <style lang="scss" scoped></style>
  