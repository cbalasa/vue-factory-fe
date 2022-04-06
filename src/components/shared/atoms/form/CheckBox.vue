<template>
  <div class="flex w-full">
    <label class="labelCheckbox text-sm flex items-center" :class="color">
      <span class="flex self-center mt-1">{{
        text !== undefined
          ? text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()
          : null
      }}</span>
      <input
        type="checkbox"
        :checked="check"
        :name="name"
        :value="value !== undefined ? value : text"
        @change="$emit('input', $event.target.checked)"
      />
      <span
        class="checkmark border"
        :class="[rounded ? ' rounded-md ' : null, color + 'BorderColor']"
      ></span>
    </label>
  </div>
</template>

<script>
export default {
  name: "CheckBox",
  data() {
    return {
      check: false,
    };
  },
  props: {
    color: {
      type: String,
      required: false,
      default: "primary",
    },
    text: {
      type: String,
      required: false,
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    name: {
      type: String,
      required: false,
    },
    value: {
      type: String,
    },
  },
};
</script>
