<template>
  <div class="iconCarousel" style="height: 50px">
    <span class="flex bg-black w-4/12 lg:w-2/12">Test 1</span>
    <span class="flex bg-red-500 w-8/12 lg:w-4/12">Test 2</span>
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


