<template>
  <div>
    <h2>User List</h2>
    <Box>
      <div class="users-list__actions">
        <div class="users-list__search">
          <UIInput
            type="input"
            placeholder="Search for users..."
            @input="$emit('input', $event)"
          />
        </div>
        <div class="users-list__new-user">
          <router-link to="/new" class="primary-button add-user-button"
            ><span class="plus-sign">+</span> Add User</router-link
          >
        </div>
      </div>
      <ul class="users-list">
        <li class="users-list__description-cols">
          <div class="users-list__avatar"></div>
          <div class="users-list__fullname">Full Name</div>
          <div class="users-list__action">Action</div>
        </li>
        <ListItem
          v-for="user in usersToDisplay"
          :key="user.id"
          :user="user"
          @removeUser="removeUser(user.id)"
        />
      </ul>
    </Box>
  </div>
</template>

<script>
import ListItem from "./ListItem.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  components: { ListItem },
  data() {
    return {
      filteredUsers: [],
    };
  },
  props: {
    users: {
      type: Array,
    },
  },
  computed: {
    ...mapGetters("usersModule", { allUsers: "users" }),
    usersToDisplay() {
      return this.filteredUsers.length ? this.filteredUsers : this.users;
    },
  },
  methods: {
    ...mapActions("usersModule", {
      removeUser: "removeUser",
    }),
  },
};
</script>

<style scoped>
.users-list__actions {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.users-list {
  list-style: none;
  padding-left: 0;
}
.users-list__avatar {
  width: 10%;
}
.users-list__fullname {
  width: 80%;
}
.users-list__action {
  width: 10%;
}
.users-list__description-cols {
  display: flex;
  padding: 1rem;
  color: red;
  font-weight: 700;
}
.plus-sign {
  margin-right: 0.75rem;
  font-size: 20px;
  vertical-align: middle;
}
.add-user-button {
  font-size: 16px;
}
</style>
