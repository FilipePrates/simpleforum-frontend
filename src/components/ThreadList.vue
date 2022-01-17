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
  props: ["threads"],
  name: "ThreadList",
  components: {
    ThreadCard,
  },
  data: () => ({}),
};
</script>
