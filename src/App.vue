<template>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions('usersModule', {
      loadUsers: 'loadUsers'
    }),
  },
  async mounted() {
    this.loadUsers();
  },
};
</script>

<style></style>
