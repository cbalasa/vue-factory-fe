<template>
  <div
    :class="['justify-' + align, 'mt-' + marginTop, 'mb-' + marginBottom]"
    class="flex z-50"
  >
    <button
      :class="[typeFn(), roundedFn(), sizeFn(), colorFn()]"
      class="flex items-center justify-center px-8"
      style="min-width: 88px"
      @click="onClick"
    >
      <font-awesome-icon
        icon="user-secret"
        size="xs"
        :class="[this.type == 'iconOnly' ? null : 'mr-2']"
        class="relative h-3"
        v-if="icon !== undefined"
      />
      <span v-if="type !== 'iconOnly'" class="text-sm">{{ label }}</span>
    </button>
  </div>
</template>
<script>
export default {
  name: "Buttons",
  props: {
    onClick: {
      type: Function,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
      default: "primary",
    },
    icon: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    rounded: {
      type: Boolean,
      required: false,
    },
    align: {
      type: String,
      require: false,
    },
    marginTop: {
      type: Number,
    },
    marginBottom: {
      type: Number,
    },
  },
  methods: {
    typeFn() {
      return this.type == undefined ||
        this.type == "filled" ||
        this.type == "simple" ||
        this.type == "iconOnly"
        ? ""
        : this.type == "outline"
        ? "border "
        : "";
    },
    roundedFn() {
      return this.rounded == undefined
        ? "rounded-md"
        : this.rounded
        ? "rounded-md"
        : null;
    },
    sizeFn() {
      return this.size == undefined
        ? this.type == "iconOnly" || this.label == undefined
          ? "py-4"
          : "py-2"
        : this.size == "small"
        ? this.type == "iconOnly" || this.label == undefined
          ? "py-3"
          : "py-2"
        : this.size == "medium"
        ? this.type == "iconOnly" || this.label == undefined
          ? "py-5"
          : "py-4"
        : this.size == "large"
        ? this.type == "iconOnly" || this.label == undefined
          ? "py-7"
          : "py-6"
        : null;
    },
    colorFn() {
      return this.type == "filled" ||
        this.type == undefined ||
        this.type == "iconOnly"
        ? this.color + "BackgroundColor text-white"
        : this.type == "outline"
        ? this.color + "BorderColor " + this.color + "TextColor"
        : this.type == "simple"
        ? this.color + "TextColor"
        : null;
    },
  },
};
</script>
