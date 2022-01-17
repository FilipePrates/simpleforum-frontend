<template>
  <v-card height="10vh" class="ml-6" max-width="60vw">
    <v-row no-gutters>
      <v-col cols="3">
        <v-img
          src="data:image/png;base64,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"
          class="my-3"
          contain
          height="10vh"
        />
      </v-col>
      <v-col cols="8">
        <span>{{
          thread.title.length > 120
            ? thread.title.substring(0, 100) + "..."
            : thread.title
        }}</span>
      </v-col>
      <v-col cols="1">
        <v-row>
          <v-col cols="12">
            <v-icon color="#007bff">mdi-arrow-up-bold-hexagon-outline </v-icon>
            <v-icon color="#a8a8a8">mdi-arrow-down-bold-hexagon-outline</v-icon>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: "ThreadCard",
  props: ["thread"],
};
</script>
