<template>
  <div class="w-full relative mt-10">
    <div v-if="cover">
      <ParallaxContainer v-if="parallax">
        <ParallaxElement :factor="-0.25">
          <div
            :style="{
              backgroundImage: 'url(' + backImg + ')',
              height: parallaxHeight,
            }"
            class="w-full bg-cover bg-center bg-black"
          ></div>
        </ParallaxElement>
      </ParallaxContainer>
      <div
        v-else
        :style="{
          backgroundImage: 'url(' + backImg + ')',
        }"
        class="w-full bg-cover bg-center bg-black"
        :class="[height == 'full' ? 'h-screen' : 'h-96']"
        ref="bannerImage"
      ></div>
      <div
        class="
          z-50
          py-10
          centerBox
          flex
          items-center
          justify-center
          w-full
          flex-col
        "
        :style="{ height: bannerHeight + 'px' }"
      >
        <Combinations :components="combinations.components" />
      </div>
    </div>
    <div v-else>
      <div
        class="z-50 py-10 flex items-center justify-center w-full flex-col"
        :style="{ height: bannerHeight + 'px' }"
      >
        <Combinations :components="combinations.components" />
      </div>
      <ParallaxContainer
        v-if="parallax"
        style="overflow: visible !important; z-index: 0"
      >
        <ParallaxElement :factor="-0.25">
          <img
            :src="backImg"
            class="no-repeat m-auto relative w-auto"
            :style="{
              height: parallaxHeightImg,
            }"
          />
        </ParallaxElement>
      </ParallaxContainer>
      <div v-else>
        <img :src="backImg" class="no-repeat m-auto relative" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  data() {
    return { bannerHeight: "" };
  },
  updated() {
    if (this.$refs.bannerImage !== undefined) {
      this.bannerHeight = this.$refs.bannerImage.clientHeight;
    }
  },
  computed: {
    backImg() {
      return require("@/assets/images/pages/" +
        this.parentName.toLowerCase() +
        "/" +
        this.image);
    },
    parallaxHeight() {
      return window.innerHeight * 1.5 + "px";
    },
    parallaxHeightImg() {
      return window.innerHeight * 1 + "px";
    },
  },
  props: {
    image: {
      type: String,
      required: true,
    },
    parentName: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      require: false,
    },
    parallax: {
      type: Boolean,
      require: false,
    },
    combinations: {
      type: Object,
      require: false,
    },
    cover: {
      type: Boolean,
    },
  },
};
</script>
