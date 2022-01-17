<template>
  <v-row no-gutters justify="center">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <ThreadList />
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
};
</script>
