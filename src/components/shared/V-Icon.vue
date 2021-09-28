<template>
  <div class="flex" :class="'justify-' + align">
    <div
      class="rounded-full"
      :class="colorBackground + 'BackgroundColor px-7 py-6'"
      v-if="colorBackground !== undefined"
    >
      <font-awesome-icon
        :icon="icon"
        :color="color"
        :size="size"
        @click="$emit('clicked', true)"
      />
    </div>

    <font-awesome-icon
      :icon="icon"
      :color="color"
      :size="size"
      v-else
      @click="$emit('clicked', true)"
    />
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
    colorBackground: {
      type: String,
    },
  },
};
</script>