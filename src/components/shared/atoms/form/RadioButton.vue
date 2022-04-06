<template>
  <div class="flex w-full">
    <label class="labelCheckbox text-sm flex items-center" :class="color">
      <span class="flex self-center mt-1">{{
        text !== undefined
          ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
          : null
      }}</span>
      <input
        type="radio"
        :value="value !== undefined ? value : text"
        :name="name"
        @change="$emit('input', $event.target.checked)"
      />
      <span
        class="checkmark border rounded-full"
        :class="[color + 'BorderColor']"
      ></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "Radio",

  props: {
    color: {
      type: String,
      required: false,
      default: "primary",
    },
    text: {
      type: String,
      required: true,
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
    },
  },
};
</script>
