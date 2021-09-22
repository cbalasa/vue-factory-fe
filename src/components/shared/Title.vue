<template>
  <span
    class="z-50 text-3xl font-bold"
    :class="[color == !undefined] ? color + 'TextColor' : null"
    >{{ text }}</span
  >
</template>

<script>
export default {
  name: "Title",

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
