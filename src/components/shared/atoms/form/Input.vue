<template>
  <div
    class="flex w-full items-start"
    :class="[
      'mb-' + marginBottom + ' mt-' + marginTop,
      'flex-' + flexDirection,
    ]"
  >
    <div
      class="flex items-center mb-1"
      v-if="icon !== undefined"
      :class="[flexDirection == 'row' ? 'mr-2 w-3/12' : '']"
    >
      <V-Icon
        :icon="icon"
        size="xs"
        :class="text !== undefined ? 'mr-2' : ''"
      />
      <span class="text-sm">{{ text }}</span>
    </div>
    <input
      type="text"
      :placeholder="placeholder"
      class="px-2 py-1 text-sm flex"
      :class="[
        colorFn(),
        'cursor-' + cursor,
        type == 'outline' || type == undefined
          ? 'border rounded-md'
          : 'border-b',
        icon !== undefined && flexDirection == 'row' ? 'w-9/12 ' : 'w-full ',
        colorBackground
          ? colorBackground + 'BackgroundColor'
          : 'bg - transparent',
      ]"
      :name="name"
      v-model="value"
      @focus="$emit('focused', true)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",

  props: {
    type: {
      type: String,
      required: false,
      default: "outline",
    },
    name: {
      type: String,
      require: false,
    },
    color: {
      type: String,
      require: false,
    },
    text: {
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
    colorBackground: {
      type: String,
      default: "transparent",
    },

    marginTop: {
      type: Number,
    },
    marginBottom: { type: Number },
    value: {},
    cursor: { type: String },
    flexDirection: {
      type: String,
      default: "col",
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
};
</script>
