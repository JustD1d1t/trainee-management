<template>
  <li class="user-list-item">
    <div class="user-list-item__logo">
      <img :src="user.avatar" alt="" />
    </div>
    <div class="user-list-item__fullname">
      {{ fullname }}
    </div>
    <div class="user-list-item__actions">
      <router-link :to="'/edit/' + user.id" class="user-list-item__action"
        ><font-awesome-icon icon="pen-to-square"
      /></router-link>
      <button
        @click="$emit('removeUser', user.id)"
        class="user-list-item__action"
      >
        <font-awesome-icon icon="trash" />
      </button>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      deafult: {},
    },
  },
  computed: {
    fullname() {
      return `${this.user.first_name} ${this.user.last_name}`;
    },
  },
};
</script>

<style>
.user-list-item:nth-child(even) {
  background-color: rgb(238, 231, 231);
}
.user-list-item {
  padding: 0.5rem 1rem;
  display: flex;
  align-items: center;
}
.user-list-item:hover {
  background-color: rgba(187, 171, 171, 0.7);
}
.user-list-item__logo {
  width: 20%;
  margin-right: 0.5rem;
}
.user-list-item__fullname {
  width: 70%;
}
.user-list-item__actions {
  display: flex;
}

.user-list-item__logo img {
  border-radius: 100%;
  width: 50px;
  height: 50px;
}
.user-list-item__action {
  color: rgb(182, 161, 161);
  border: none;
  background: transparent;
  cursor: pointer;
}
.user-list-item__action:not(:last-child){
  margin-right: 0.5rem;
}

@media screen and (min-width: 767px) {
  .user-list-item__logo {
    width: 10%;
  }
  .user-list-item__fullname {
    width: 80%;
  }
  .user-list-item__actions {
    width: 10%;
  }
}
</style>
