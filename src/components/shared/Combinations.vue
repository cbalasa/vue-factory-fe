<template>
  <div :class="wrapper ? 'wrapper' : null">
    <div
      v-for="(component, index) in components"
      :key="index"
      class="flex flex-col"
    >
      <component
        :is="component.type"
        :type="component.props.type"
        :color="component.props.color"
        :name="component.props.name"
        :rounded="component.props.rounded"
        :text="component.props.text"
        :label="component.props.label"
        :placeholder="component.props.placeholder"
        :align="component.props.align"
        :marginTop="component.props.marginTop"
        :image="component.props.image"
        :parentName="component.props.parentName"
        :height="component.props.height"
        :parallax="component.props.parallax"
        :combinations="component.props.combinations"
        :onClick="component.props.onClick"
      ></component>
    </div>
  </div>
</template>
<script>
export default {
  name: "Combinations",
  props: {
    components: {
      type: Array,
      required: true,
    },
    wrapper: {
      type: Boolean,
    },
  },
};
</script>