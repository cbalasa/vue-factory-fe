<template>
  <a
    :href="link"
    class="cursor-pointer underline"
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
  >
    <slot />
  </a>
</template>
<script>
export default {
  name: "Hyperlink",
  props: {
    link: String,
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
