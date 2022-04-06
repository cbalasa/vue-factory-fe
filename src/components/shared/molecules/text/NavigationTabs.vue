<template>
  <div
    class="w-full shadow-md rounded-md mb-2 flex"
    :class="[type == 'horizontal' ? ' flex-col' : '']"
  >
    <!-- HEADER -->
    <div
      class="flex"
      :class="[
        color + 'BackgroundColor',
        type == 'horizontal'
          ? 'rounded-t-md'
          : 'flex-col rounded-tl-md justify-between rounded-bl-md',
      ]"
      ref="navigationTabsHeader"
    >
      <div
        v-for="(header, i) in list"
        :key="i"
        class="flex align-middle items-center cursor-pointer py-4 px-6"
        :class="[
          i == 0 ? ' rounded-tl-md' : null,
          selectedTab == i + header.title
            ? 'bg-white  border-t-2 border-l-2 border-b-2 ' +
              color +
              'TextColor ' +
              color +
              'BorderColor'
            : 'text-white',
          selectedTab == i + header.title && i == list.length - 1
            ? 'rounded-bl-md'
            : null,
        ]"
        :style="{ height: type == 'horizontal' ? '' : headerHeight + 'px' }"
        @click="selectedTab = i + header.title"
      >
        <V-Icon :icon="header.icon" class="mr-2" size="lg" v-if="header.icon" />
        <span>{{ header.title }}</span>
      </div>
    </div>

    <!-- BODY -->

    <div class="flex rounded-b-md" style="min-height: 200px">
      <template v-for="(header, i) in list">
        <div
          :key="i"
          class="flex py-4 px-6 text-sm text-justify"
          :class="[
            color + 'BorderColor',
            type == 'horizontal'
              ? 'border-2 border-t-0 rounded-b-md'
              : 'border-2 border-l-0 rounded-br-md rounded-tr-md',
            centerBodyText ? 'items-center' : null,
          ]"
          v-if="selectedTab == i + header.title"
        >
          <span>{{ header.text }}</span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavigationTabs",
  data() {
    return {
      selectedTab: "",
      headerHeight: 0,
    };
  },
  props: {
    color: {
      type: String,
      default: "primary",
    },
    type: {
      type: String,
      default: "vertical",
    },
    centerBodyText: {
      type: Boolean,
      default: false,
    },
    list: {
      type: Array,
    },
  },
  methods: {
    equalHeight() {
      if (this.$refs.navigationTabsHeader !== undefined) {
        return (this.headerHeight =
          this.$refs.navigationTabsHeader.clientHeight / 3);
      }
    },
  },
  mounted() {
    this.selectedTab = 0 + this.list[0].title;
  },
  updated() {
    this.equalHeight();
  },
};
</script>