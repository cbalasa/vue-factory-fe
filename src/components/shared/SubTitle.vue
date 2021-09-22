<template>
  <span
    class="z-50 text-lg font-bold mb-2 mt-8"
    :class="[color == !undefined] ? color + 'TextColor' : null"
    >{{ text }}</span
  >
</template>

<script>
export default {
  name: "SubTitle",

  props: {
    text: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      default: "",
    },
  },
};
</script>
