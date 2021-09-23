<template>
  <span
    class="z-50 text-lg font-bold mb-2 mt-4"
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
