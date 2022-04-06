<template>
  <div class="flex items-center align-middle w-full">
    <div class="flex mr-2 items-center">
      <V-Icon :icon="icon" size="xs" class="mr-1" v-if="icon" />
      <span class="text-sm" v-if="text">{{ text }}</span>
    </div>
    <label class="switch">
      <input
        type="checkbox"
        @change="$emit('change', $event.target.checked)"
        :value="value"
        :name="name"
      />
      <span class="slider round slider-border"></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "ToggleSwitch",

  props: {
    value: {
      type: Boolean,
    },
    text: {
      type: String,
    },
    icon: {
      type: String,
    },
    name: {
      type: String,
      require: true,
    },
  },
};
</script>