<template>
  <img
    :src="backImg"
    class="no-repeat relative object-contain"
    :class="[
      rounded ? '  rounded-full' : size !== undefined ? '' : ' h-full ',
      'h-' + size + ' w-' + size,
      shadow ? 'shadow-lg' : '',
    ]"
  />
</template>
<script>
export default {
  name: "V-Image",

  computed: {
    backImg() {
      return require("@/assets/images/pages/" +
        this.parentName.toLowerCase() +
        "/" +
        this.image);
    },
  },

  props: {
    image: {
      type: String,
      require: true,
    },
    parentName: {
      type: String,
      require: true,
    },
    rounded: {
      type: Boolean,
      default: false,
    },
    size: {
      type: Number,
    },
    shadow: {
      type: Boolean,
    },
  },
};
</script>