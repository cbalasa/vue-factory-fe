<template>
  <span
    class="z-50"
    :class="[
      color + 'TextColor',
      'justify-' + align,
      'text-' + textAlign,
      'mt-' + marginTop,
      'mb-' + marginBottom,
      'text-' + textSize,
      'font-' + fontWeight,
      uppercase ? 'uppercase' : null,
      italic ? 'italic' : '',
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
    align: {
      type: String,
      default: "right",
    },
    marginTop: {
      type: Number,
      default: 4,
    },
    marginBottom: {
      type: Number,
      default: 2,
    },
    textSize: {
      type: String,
      default: "lg",
    },
    fontWeight: {
      type: String,
      default: "bold",
    },
    uppercase: {
      type: Boolean,
      default: false,
    },
    italic: {
      type: Boolean,
      default: false,
    },
  },
};
</script>
