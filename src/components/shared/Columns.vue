<template>
  <div class="flex justify-between w-full primaryBackgroundColor">
    <div class="flex" :class="wrapper ? 'wrapper' : null">
      <div
        v-for="(col, index) in text"
        :key="index"
        :class="[
          'w-' + 12 / text.length + '/12',
          index == 0 ? 'pr-4' : index == text.length - 1 ? 'pl-4' : 'px-4',
        ]"
      >
        <component
          :is="col.type"
          :type="col.props.type"
          :color="col.props.color"
          :name="col.props.name"
          :rounded="col.props.rounded"
          :text="col.props.text"
          :components="col.props.components"
          :label="col.props.label"
          :placeholder="col.props.placeholder"
          :align="col.props.align"
          :marginTop="col.props.marginTop"
        ></component>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Columns",
  props: {
    columnsNo: {
      type: Number,
      required: false,
      default: 2,
    },
    text: {
      type: Array,
      require: true,
    },
    wrapper: {
      type: Boolean,
    },
  },
};
</script>
