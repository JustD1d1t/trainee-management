<template>
  <div>
    <h2>Edit user</h2>
    <Form :user="user" :method="'PATCH'" />
  </div>
</template>

<script>
import Form from "../../components/Users/Form.vue";
import { mapGetters } from "vuex";

export default {
  components: { Form },
  data() {
    return {
      user: {},
    };
  },
  computed: {
    ...mapGetters("usersModule", ["users"]),
  },
  methods: {
    setUser() {
      console.log(this.users)
      const user = this.users.find(
        (user) => user.id === Number(this.$route.params.id)
      );
      this.user = user;
    },
  },
  mounted() {
    this.setUser();
  },
  watch: {
    users() {
      this.setUser();
    },
  },
};
</script>

<style scoped>
</style>
