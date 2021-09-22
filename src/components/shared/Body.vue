<template>
  <span
    class="text-justify flex text-sm"
    :class="[color == !undefined] ? color + 'TextColor' : null"
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
    },
  },
};
</script>
