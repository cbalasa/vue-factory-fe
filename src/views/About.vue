<template>
  <div class="flex flex-col">
    <Combinations
      :components="
        $projectJSON.pages[$options.name.toLowerCase()].content[0].components
      "
    />
    <!-- <Banner
        image="banner.jpg"
        :parentName="$options.name"
        height="full"
        :parallax="false"
        :combinations="combinations"
      /> -->
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      inputVal: "",
      components: [
        {
          type: "Banner",
          props: {
            image: "banner.jpg",
            parentName: this.$options.name,
            height: "full",
            parallax: false,
            combinations: {
              components: [
                {
                  type: "Title",
                  props: {
                    text: "Build Better Websites With Bikin",
                  },
                },
                {
                  type: "SubTitle",
                  props: {
                    text: "We are team of talented designers making websites with Bootstrap",
                  },
                },
                {
                  type: "Buttons",
                  props: {
                    label: "Get Started",
                    type: "filled",
                    color: "primary",
                    align: "center",
                    marginTop: 5,
                    onClick: () => {},
                  },
                },
              ],
            },
          },
        },
      ],
    };
  },
};
</script>
