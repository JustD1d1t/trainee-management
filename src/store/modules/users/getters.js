export default {
    users(state) {
      return state.users;
    },
    totalPages(state) {
      return state.totalPages;
    },
    user(state, payload) {
      console.log(state)
      console.log(payload)
      return state.users[0]
    }
  };
  