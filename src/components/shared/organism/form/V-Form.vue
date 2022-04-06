<template>
  <form action="" class="w-full mt-8">
    <slot />
    <!-- <SingleAndMultiSelect
      :list="list"
      type="bottom"
      :tabIndex="0"
    ></SingleAndMultiSelect>
    <div class="flex">
      <SingleAndMultiSelect
        :list="list"
        type="bottom"
        :multiselect="true"
        icon="save"
        :tabIndex="0"
      ></SingleAndMultiSelect>
      <SingleAndMultiSelect
        :list="list"
        type="bottom"
        :tabIndex="0"
      ></SingleAndMultiSelect>
    </div> -->
  </form>
</template>
<script>
export default {
  name: "V-Form",
  data() {
    return {
      list: ["1", 2, 3, 4, 5, 6],
    };
  },
};
</script>
