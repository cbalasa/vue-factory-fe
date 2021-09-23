<template>
  <div class="flex w-full">
    <div
      v-if="type == 'full' || type == undefined"
      class="flex flex-col w-full items-start"
    >
      <div class="flex items-center mb-1">
        <font-awesome-icon
          :icon="icon"
          size="xs"
          class="mr-1"
          v-if="icon !== undefined"
        />
        <span class="text-sm">{{ label }}</span>
      </div>
      <input
        type="text"
        :placeholder="placeholder"
        class="px-2 py-1 rounded-md border w-full text-sm"
        :class="[colorFn()]"
        :name="name"
        v-model="value"
      />
    </div>
    <div v-if="type == 'bottom'" class="flex w-full mt-4 mb-1">
      <div class="flex items-center mb-1 mr-2 w-3/12">
        <font-awesome-icon icon="user-secret" size="xs" class="mr-1" />
        <span class="text-sm">{{ label }}</span>
      </div>
      <input
        type="text"
        :placeholder="placeholder"
        class="px-2 py-1 border-b text-sm w-9/12"
        :name="name"
        v-model="value"
        :class="[colorFn()]"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return { value: "" };
  },
  props: {
    type: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      require: false,
    },
    color: {
      type: String,
      require: false,
    },
    label: {
      type: String,
      require: false,
    },
    placeholder: {
      type: String,
      require: false,
    },
    icon: {
      type: String,
    },
  },
  methods: {
    colorFn() {
      return this.color != undefined && this.type != undefined
        ? this.color +
            "Input" +
            this.type.charAt(0).toUpperCase() +
            this.type.substr(1).toLowerCase() +
            "Border " +
            this.color +
            "BorderColor"
        : this.color != undefined && this.type == undefined
        ? this.color + "InputFullBorder " + this.color + "BorderColor"
        : this.color == undefined && this.type !== undefined
        ? "primaryInput" +
          this.type.charAt(0).toUpperCase() +
          this.type.substr(1).toLowerCase() +
          "Border primaryBorderColor"
        : this.color == undefined && this.type == undefined
        ? "primaryInputFullBorder primaryBorderColor"
        : null;
    },
  },
  watch: {
    value(newVal) {
      this.$emit("input", newVal);
    },
  },
};
</script>
