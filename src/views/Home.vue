<template>
  <v-row no-gutters justify="center">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ThreadList :threads="threads" />
  </v-row>
</template>

<script>
// @ is an alias to /src
import ThreadList from "@/components/ThreadList.vue";

export default {
  name: "Home",
  components: {
    ThreadList,
  },
  data: () => ({
    threads: [
      {
        Id: "1",
        title:
          "Fiz essa parada doida aqui. Aenean dictum lorem quam, ut condimentum sem posuere vel. Morbi nec sollicitudin lectus. Vivamus elementum mauris sem, nec tincidu",
        upvotedByUser: true,
        downvotedByUser: false,
      },
      {
        Id: "2",
        upvotedByUser: true,
        downvotedByUser: false,
        title:
          "cursus turpis. Nam enim ipsum, porta ac sem tincidunt, imperdiet convallis neque. Quisque semper neque vita",
      },
      {
        Id: "3",
        upvotedByUser: false,
        downvotedByUser: false,
        title:
          "dignissim vehicula turpis. Cras pharetra molestie varius. Nulla erat dui, interdum sed hendrerit at, convallis in tellus. Vivamus tincidunt est nec consectetur interdum. Integer ",
      },
    ],
  }),
};
</script>
