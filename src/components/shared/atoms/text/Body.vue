<template>
  <span
    class="flex"
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
  name: "Body",
  props: {
    text: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      default: "darkgrey",
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
    },
    marginBottom: {
      type: Number,
    },
    textSize: {
      type: String,
      default: "sm",
    },
    fontWeight: {
      type: String,
      default: "regular",
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
