<template>
  <div class="flex ml-8">
    <a
      class="flex items-center px-2"
      v-for="(menu, i) in menuDesktop"
      :key="i"
      href="#"
    >
      <V-Icon :icon="menu.icon" color="white" class="pr-2" size="sm" />
      <Body :text="menu.text" color="white" />
    </a>
  </div>
</template>
<script>
export default {
  name: "NavigationDesktop",
  data() {
    return {
      menuDesktop: [
        {
          icon: "tag",
          text: "Discover",
        },
        {
          icon: "tag",
          text: "Discover",
        },
        {
          icon: "tag",
          text: "Discover",
        },
      ],
    };
  },
};
</script>