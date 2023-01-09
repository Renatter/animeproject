<template>
    <div>
        <div class="picture ">
            <img class="rounded-[25px]" :src="pictur.jpg.image_url" alt="">
        </div>
    </div>
</template>

<script>
    export default {
      name: "Picture",
      props: ["pictur"],
      data() {
        return {};
      },
    };
  </script>
  
  <style lang="scss" scoped></style>
  