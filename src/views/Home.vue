<template>
  <div class="flex flex-col pb-10 justify-center m-auto">
    <!-- <div class="w-6/12 m-auto">
      <Card> <V-Form></V-Form></Card>
    </div> -->
    <Carousel :popUp="true" />
    <ToggleSwitch class="mt-16" />
    <!-- <Modal
      class="mt-4"
      type="success"
      title="Bravo, ma!"
      text="I-ai rupt pancreasul"
      :showAlert="showAlert"
      v-model="showAlert"
      :confirm="true"
    /> -->
    <!-- <Combinations :components="combinations.components" /> -->
    <!-- <Banner
      image="banner.jpg"
      :parentName="$options.name"
      height="full"
      :parallax="false"
      :combinations="bannerCombinations"
    /> -->
    <!-- <Columns :text="textCol" color="secondary" align="center" /> -->

    <!-- <Columns :text="textCol" :wrapper="true" align="center" /> -->

    <!-- <Body text="Test" /> -->
    <!-- <Buttons text="About us" color="primary" :marginTop="5" align="center" /> -->
    <!-- <CheckBox text="test" />
    <Input />
    <RadioButton text="test" name="test" />
    <RadioButton text="test2" name="test" />
    <SingleAndMultiSelect :list="simpleArray" />
    <SubTitle text="Merge si asa boss" textAlign="right" />
    <Title text="asta este un titlu" textAlign="left" />
    <V-Image image="banner.jpg" :parentName="$options.name" />
    <Card> <V-Image image="banner.jpg" :parentName="$options.name" /></Card>
    <Columns :text="textCol" :wrapper="true" align="center" /> -->
    <!-- <Combinations :components="firstCombinations" :wrapper="true" /> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      showAlert: true,
      combinations: {
        components: [
          {
            type: "Banner",
            props: {
              image: "banner.jpg",
              parentName: this.$options.name,
              height: "full",
              parallax: "false",
              combinations: [
                {
                  type: "Title",
                  props: {
                    text: "Build Better Websites With Bikin",
                    textAlign: "center",
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
                    text: "Get Started",
                    type: "filled",
                    color: "primary",
                    align: "center",
                    marginTop: 5,
                  },
                },
              ],
            },
          },
          {
            type: "Columns",
            props: {
              color: "secondary",
              align: "center",
              text: [
                {
                  type: "Combinations",
                  props: {
                    components: [
                      {
                        type: "Title",
                        props: {
                          text: "Voluptatem dignissimos provident quasi",
                        },
                      },
                      {
                        type: "Body",
                        props: {
                          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit",
                          marginBottom: 5,
                          marginTop: 5,
                        },
                      },
                      {
                        type: "Buttons",
                        props: {
                          text: "About us.",
                          type: "filled",
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
                        type: "V-Icon",
                        props: {
                          icon: "save",
                          size: "2x",
                          align: "center",
                        },
                      },
                      {
                        type: "Title",
                        props: {
                          text: "Corporis voluptates sit",
                          textAlign: "center",
                        },
                      },
                      {
                        type: "Body",
                        props: {
                          text: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
                          marginBottom: 5,
                          marginTop: 2,
                        },
                      },
                      {
                        type: "V-Icon",
                        props: {
                          icon: "save",
                          size: "2x",
                          align: "center",
                        },
                      },
                      {
                        type: "Title",
                        props: {
                          text: "Corporis voluptates sit",
                          textAlign: "center",
                        },
                      },
                      {
                        type: "Body",
                        props: {
                          text: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
                          marginBottom: 5,
                          marginTop: 2,
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
                        type: "V-Icon",
                        props: {
                          icon: "save",
                          size: "2x",
                          align: "center",
                        },
                      },
                      {
                        type: "Title",
                        props: {
                          text: "Corporis voluptates sit",
                          textAlign: "center",
                        },
                      },
                      {
                        type: "Body",
                        props: {
                          text: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
                          marginBottom: 5,
                          marginTop: 2,
                        },
                      },
                      {
                        type: "V-Icon",
                        props: {
                          icon: "save",
                          size: "2x",
                          align: "center",
                        },
                      },
                      {
                        type: "Title",
                        props: {
                          text: "Corporis voluptates sit",
                          textAlign: "center",
                        },
                      },
                      {
                        type: "Body",
                        props: {
                          text: "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
                          marginBottom: 5,
                          marginTop: 2,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: "Combinations",
            props: {
              wrapper: true,
              components: [
                {
                  type: "Title",
                  props: {
                    text: "Features",
                    textAlign: "center",
                    marginTop: 5,
                  },
                },
                {
                  type: "Body",
                  props: {
                    text: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
                    textAlign: "center",
                    marginTop: 5,
                  },
                },
              ],
            },
          },
          {
            type: "Columns",
            props: {
              align: "center",
              text: [
                {
                  type: "V-Image",
                  props: {
                    image: "features-1.png",
                    parentName: "Home",
                  },
                },
                {
                  type: "Combinations",
                  props: {
                    components: [
                      {
                        type: "Title",
                        props: {
                          text: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
                        },
                      },
                      {
                        type: "Body",
                        props: {
                          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in Ullam est qui quos consequatur eos accusamus.",
                          marginBottom: 5,
                          marginTop: 2,
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
          {
            type: "Columns",
            props: {
              align: "center",
              text: [
                {
                  type: "Combinations",
                  props: {
                    components: [
                      {
                        type: "Title",
                        props: {
                          text: "Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.",
                        },
                      },
                      {
                        type: "Body",
                        props: {
                          text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in Ullam est qui quos consequatur eos accusamus.",
                          marginBottom: 5,
                          marginTop: 2,
                        },
                      },
                    ],
                  },
                },
                {
                  type: "V-Image",
                  props: {
                    image: "features-1.png",
                    parentName: "Home",
                  },
                },
              ],
            },
          },
          {
            type: "Combinations",
            props: {
              color: "secondary",
              wrapper: true,
              components: [
                {
                  type: "Title",
                  props: {
                    text: "Sevices",
                    textAlign: "center",
                    marginTop: 5,
                  },
                },
                {
                  type: "Body",
                  props: {
                    text: "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.",
                    textAlign: "center",
                    marginTop: 5,
                  },
                },
                {
                  type: "Columns",
                  props: {
                    align: "center",
                    text: [
                      {
                        type: "Card",
                        props: {
                          components: [
                            {
                              type: "Combinations",
                              props: {
                                components: [
                                  {
                                    type: "V-Icon",
                                    props: {
                                      icon: "save",
                                      size: "2x",
                                      align: "center",
                                    },
                                  },
                                  {
                                    type: "SubTitle",
                                    props: {
                                      text: "Lorem Ipsum",
                                      textAlign: "center",
                                    },
                                  },
                                  {
                                    type: "Body",
                                    props: {
                                      text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
                                      marginBottom: 5,
                                      marginTop: 2,
                                      align: "center",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "Card",
                        props: {
                          components: [
                            {
                              type: "Combinations",
                              props: {
                                components: [
                                  {
                                    type: "V-Icon",
                                    props: {
                                      icon: "save",
                                      size: "2x",
                                      align: "center",
                                    },
                                  },
                                  {
                                    type: "SubTitle",
                                    props: {
                                      text: "Lorem Ipsum",
                                      textAlign: "center",
                                    },
                                  },
                                  {
                                    type: "Body",
                                    props: {
                                      text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
                                      marginBottom: 5,
                                      marginTop: 2,
                                      align: "center",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "Card",
                        props: {
                          components: [
                            {
                              type: "Combinations",
                              props: {
                                components: [
                                  {
                                    type: "V-Icon",
                                    props: {
                                      icon: "save",
                                      size: "2x",
                                      align: "center",
                                    },
                                  },
                                  {
                                    type: "SubTitle",
                                    props: {
                                      text: "Lorem Ipsum",
                                      textAlign: "center",
                                    },
                                  },
                                  {
                                    type: "Body",
                                    props: {
                                      text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
                                      marginBottom: 5,
                                      marginTop: 2,
                                      align: "center",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        type: "Card",
                        props: {
                          components: [
                            {
                              type: "Combinations",
                              props: {
                                components: [
                                  {
                                    type: "V-Icon",
                                    props: {
                                      icon: "save",
                                      size: "2x",
                                      align: "center",
                                    },
                                  },
                                  {
                                    type: "SubTitle",
                                    props: {
                                      text: "Lorem Ipsum",
                                      textAlign: "center",
                                    },
                                  },
                                  {
                                    type: "Body",
                                    props: {
                                      text: "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi",
                                      marginBottom: 5,
                                      marginTop: 2,
                                      align: "center",
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    };
  },
  methods: {
    testClick() {
      alert("clicked");
    },
  },
};
</script>
