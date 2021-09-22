<template>
  <div class="flex flex-col">
    <Banner
      image="banner.jpg"
      :parentName="$options.name"
      height="full"
      :parallax="false"
      :bannerCombinations="bannerCombinations"
    />
    <Columns :text="textCol" :wrapper="true" />
    <Combinations :components="firstCombinations" :wrapper="true" />
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      inputVal: "",
      firstCombinations: [
        {
          type: "Title",
          props: {
            text: "Features",
          },
        },
        {
          type: "Body",
          props: {
            text: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
          },
        },
      ],
      bannerCombinations: {
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
            },
          },
        ],
      },
      textCol: [
        {
          type: "Combinations",
          props: {
            components: [
              {
                type: "SubTitle",
                props: {
                  text: "Voluptatem dignissimos provident quasi",
                  color: "white",
                },
              },
              {
                type: "Body",
                props: {
                  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit",
                  color: "white",
                },
              },
              {
                type: "Buttons",
                props: {
                  label: "About us",
                  color: "secondary",
                  marginTop: 5,
                },
              },
            ],
          },
        },
        {
          type: "Combinations",
          props: {
            components: [
              {
                type: "SubTitle",
                props: {
                  text: "Corporis voluptates sit",
                  color: "white",
                },
              },
              {
                type: "Body",
                props: {
                  text: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
                  color: "white",
                },
              },
              {
                type: "SubTitle",
                props: {
                  text: "Labore consequatur",
                  color: "white",
                },
              },
              {
                type: "Body",
                props: {
                  text: "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
                  color: "white",
                },
              },
            ],
          },
        },
        {
          type: "Combinations",
          props: {
            components: [
              {
                type: "SubTitle",
                props: {
                  text: "Ullamco laboris nisi",
                  color: "white",
                },
              },
              {
                type: "Body",
                props: {
                  text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
                  color: "white",
                },
              },
              {
                type: "SubTitle",
                props: {
                  text: "Beatae veritatis",
                  color: "white",
                },
              },
              {
                type: "Body",
                props: {
                  text: "Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta",
                  color: "white",
                },
              },
            ],
          },
        },
      ],
    };
  },
  methods: {
    testClick() {
      alert("clicked");
    },
  },
};
</script>
