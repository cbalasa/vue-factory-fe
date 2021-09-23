<template>
  <div class="flex" :class="'justify-' + align">
    <font-awesome-icon :icon="icon" :color="color" :size="size" />
  </div>
</template>
<script>
export default {
  name: "V-Icon",
  props: {
    color: {
      type: String,
    },
    icon: {
      type: String,
    },
    size: {
      type: String,
      default: "xs",
    },
    align: {
      type: String,
      default: "left",
    },
  },
};
</script>