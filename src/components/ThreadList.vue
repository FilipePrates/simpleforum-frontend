<template>
  <v-container>
    <v-row justify="center" align="center" class="text-center">
      <v-col cols="6" v-for="thread in threads" :key="thread.Id" class="mx-12">
        <ThreadCard :thread="thread" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ThreadCard from "@/components/ThreadCard.vue";

export default {
  name: "HelloWorld",
  components: {
    ThreadCard,
  },
  data: () => ({
    threads: [
      {
        Id: "1",
        title:
          "Fiz essa parada doida aqui. Aenean dictum lorem quam, ut condimentum sem posuere vel. Morbi nec sollicitudin lectus. Vivamus elementum mauris sem, nec tincidu",
      },
      {
        Id: "2",
        title:
          "cursus turpis. Nam enim ipsum, porta ac sem tincidunt, imperdiet convallis neque. Quisque semper neque vita",
      },
      {
        Id: "3",
        title:
          "dignissim vehicula turpis. Cras pharetra molestie varius. Nulla erat dui, interdum sed hendrerit at, convallis in tellus. Vivamus tincidunt est nec consectetur interdum. Integer ",
      },
    ],
  }),
};
</script>
