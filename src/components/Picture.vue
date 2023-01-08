<template>
    <div>
        <div class="picture ">
            <img class="rounded-[1px] w-[190px] h-[250px] ml-[30px]" :src="pictur.jpg.image_url" alt="">
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
  