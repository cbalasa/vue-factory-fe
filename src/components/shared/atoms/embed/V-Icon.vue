<template>
  <div class="flex items-center" :class="'justify-' + align">
    <div
      class="rounded-full"
      :class="[
        type == 'outline'
          ? colorBackground +
            'BorderColor border-2 px-' +
            paddingHorizontal +
            ' py-' +
            paddingVertical
          : colorBackground +
            'BackgroundColor px-' +
            paddingHorizontal +
            ' py-' +
            paddingVertical,
        color + 'TextColor',
      ]"
      v-if="colorBackground !== undefined"
    >
      <font-awesome-icon
        :icon="icon"
        :color="color"
        :size="size"
        @click="$emit('clicked', true)"
      />
    </div>

    <div v-else :class="'px-' + paddingHorizontal + ' py-' + paddingVertical">
      <font-awesome-icon
        :icon="icon"
        :color="color"
        :size="size"
        :class="color + 'TextColor'"
        @click="$emit('clicked', true)"
      />
    </div>
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
    type: {
      type: String,
      default: "",
    },
    paddingHorizontal: {
      type: Number,
      default() {
        return this.type == "outline" ? 8 : 0;
      },
    },
    paddingVertical: {
      type: Number,
      default() {
        return this.type == "outline" ? 6 : 0;
      },
    },
  },
};
</script>