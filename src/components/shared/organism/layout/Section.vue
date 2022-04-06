<template>
  <div
    class="relative flex flex-col section"
    :style="[padding ? { 'padding-top': '64px' } : null]"
  >
    <slot />
    <div
      :class="[colorBackground + 'BackgroundColor']"
      :style="[
        { 'background-color': colorBackground },
        { height: height + '%' },
      ]"
      class="absolute w-full top-0"
      style="z-index: -2"
    ></div>
  </div>
</template>

<script>
export default {
  name: "Section",
  props: {
    colorBackground: {
      type: String,
    },
    height: {
      type: Number,
      default: 100,
    },
    padding: {
      type: Boolean,
      default: true,
    },
  },
};
</script>