<template>
  <div
    class="
      flex
      shadow-lg
      w-full
      px-0
      py-0
      md:px-4
      md:py-4
      rounded-md
      justify-center
      items-center
      align-middle
      m-auto
      card
      mb-4
    "
    :class="[colorBackground + 'BackgroundColor']"
  >
    <component
      :is="components[0].type"
      :components="components[0].props.components"
      :wrapper="true"
      v-if="components"
    />
    <slot v-else></slot>
  </div>
</template>
<script>
export default {
  name: "Card",

  props: {
    components: {},
    colorBackground: {
      type: String,
      default: "white",
    },
  },
};
</script>