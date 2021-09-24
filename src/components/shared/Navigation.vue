<template>
  <div
    class="
      flex
      justify-between
      w-full
      h-16
      primaryBackgroundColor
      shadow-xl
      fixed
    "
    style="z-index: 9999999"
  >
    <div class="w-2/12 p-2 flex items-end bg-black">
      <V-Image image="logo.png" parentName="general" class="self-end flex" />
    </div>
    <div class="w-10/12 flex items-center">
      <NavigationDesktop v-if="windowsWidth > 1024" />
      <NavigationMobile v-else />
    </div>
  </div>
</template>
<script>
export default {
  name: "Navigation",
  data() {
    return {
      windowsWidth: 0,
    };
  },
  methods: {
    setWindowsWidth() {
      this.windowsWidth = window.innerWidth;
    },
  },
  mounted() {
    this.setWindowsWidth();
    window.addEventListener("resize", this.setWindowsWidth);
  },
};
</script>