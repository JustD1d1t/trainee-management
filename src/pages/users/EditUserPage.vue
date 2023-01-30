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
.add-user__form-wrapper {
  display: flex;
  justify-content: space-between;
}
.add-user__details {
  width: 61%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
}
.add-user__input {
  flex-grow: 1;
}
.add-user__image {
  width: 36%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.add-user__image img {
  width: 150px;
  height: 150px;
  border-radius: 100%;
  margin-bottom: 3rem;
}

.custom-file-input::before {
  content: "Change photo";
  display: inline-block;
  background: white;
  color: black;
  border: 1px solid #999;
  border-radius: 3px;
  padding: 5px 8px;
  outline: none;
  white-space: nowrap;
  cursor: pointer;
  text-shadow: 1px 1px #fff;
  font-weight: 700;
  font-size: 10pt;
}

.custom-file-upload {
  border: 1px solid #ccc;
  display: inline-block;
  cursor: pointer;
  margin-top: 1rem;
  width: 100%;
  text-align: center;
}
::v-deep input[type="file"] {
  display: none;
}
::v-deep .custom-file-upload label {
  cursor: pointer;
  margin-bottom: 0;
  padding: 6px 12px;
}
</style>
