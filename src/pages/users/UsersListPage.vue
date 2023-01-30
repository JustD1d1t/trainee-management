<template>
  <div>
    <UsersList :users="paginatedUsers" @input="search($event)" />
    <Pagination v-if="paginatedUsers.length" :pages="paginatedPages" />
  </div>
</template>

<script>
import UsersList from "../../components/Users/UsersList.vue";
import Pagination from "../../components/Pagination/Pagination.vue";
import { mapGetters, mapActions } from "vuex";
export default {
  components: { UsersList, Pagination },
  data() {
    return {
      loadedUsers: [],
    };
  },
  computed: {
    ...mapGetters("usersModule", ["users", "totalPages"]),
    pageNumber() {
      return this.$route.query.page;
    },
    paginatedUsers() {
      const users = this.loadedUsers.length ? this.loadedUsers : this.users;
      return this.pageNumber === undefined || this.pageNumber == 1
        ? users.slice(0, 6)
        : users.slice(
            6 + 6 * (Number(this.pageNumber) - 2),
            6 + 6 * (Number(this.pageNumber) - 1)
          );
    },
    paginatedPages() {
      const users = this.loadedUsers.length ? this.loadedUsers : this.users;
      return Math.ceil(users.length / 6);
    }
  },
  watch: {
    users() {
      this.loadedUsers = this.users;
    },
  },
  methods: {
    ...mapActions("usersModule", {
      loadUsers: "loadUsers",
    }),
    search(e) {
      if (e) {
        const filteredUsers = this.users.filter(
          (user) =>
            user.last_name.toLowerCase().includes(e.toLowerCase()) ||
            user.first_name.toLowerCase().includes(e.toLowerCase())
        );
        this.loadedUsers = filteredUsers;
      } else {
        this.loadedUsers = this.users;
      }
    },
  },
  updated() {
    if (
      Number(this.pageNumber) > Math.ceil(this.users.length / 6) &&
      this.users
    ) {
      this.$router.push({ path: "/", query: { page: 1 } });
    }
  },
  mounted() {
    if (
      Number(this.pageNumber) * 6 > Math.ceil(this.users.length) &&
      this.users.length > 0
    ) {
      this.$router.push({ path: "/", query: { page: 1 } });
    }
  },
};
</script>

<style scoped></style>
