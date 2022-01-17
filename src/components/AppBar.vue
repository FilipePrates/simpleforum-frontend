<template>
  <div class="appbar blue-8 d-flex">
    <v-row>
      <v-col cols="2">
        <img
          v-if="!loading"
          class="my-auto mx-4"
          src="https://aws1.discourse-cdn.com/business5/uploads/rust_lang/original/2X/e/e260a60b8dca4dae6ce7db98c45bb5008e6fdc62.png"
          alt=""
          height="60px"
          width="60px"
        />
      </v-col>
      <v-col cols="8">
        <v-btn-toggle v-if="!loading" class="fill-height" tile group borderless>
          <v-btn
            v-for="item in items"
            :key="item.text"
            :to="item.to"
            :disabled="item.disabled"
            :class="`ma-0  fill-height appbar-tab ${
              $route.params.type == item.to.split('/')[2]
                ? 'blue-2--text'
                : 'blue-5--text'
            }`"
            style="height: 100%; text-transform: none !important"
          >
            <span class="">{{ item.text }}</span>
          </v-btn>
        </v-btn-toggle>
        <v-progress-linear
          v-else
          class="my-auto mx-4"
          indeterminate
          color="primary"
        ></v-progress-linear>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  props: ["loading"],
  data() {
    return {
      items: [
        { text: "Home", to: "/", disabled: false },
        { text: "My Threads", to: "/:userId/threads", disabled: false },
        { text: "My Comments", to: "/:userId/comments", disabled: false },
        { text: "Saved by Me", to: "/:userId/saved", disabled: false },
        {
          text: "Funcionalidade muito louca",
          to: "/segredo",
          disabled: true,
        },
      ],
    };
  },
};
</script>

<style>
.appbar-tab {
  font-family: Arial, Helvetica;
  font-style: normal;
  font-weight: 500;
  font-size: 1.1em;
  line-height: 150%;
  text-align: center;
  color: #5c9ce5;
}
</style>
