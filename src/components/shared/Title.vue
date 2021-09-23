<template>
  <span
    class="z-50 text-3xl font-bold"
    :class="[
      color + 'TextColor',
      'text-' + textAlign,
      'mt-' + marginTop,
      'mb-' + marginBottom,
    ]"
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
    textAlign: {
      type: String,
      default: "left",
    },
    marginTop: {
      type: Number,
    },
    marginBottom: {
      type: Number,
    },
  },
};
</script>
