export default {
  setUsers(state, payload) {
    state.users = [...state.users, ...payload];
  },
  setTotalPages(state, payload) {
    state.totalPages = payload;
  },
  editUser(state, payload) {
    const index = state.users.findIndex(
      (user) => user.id === Number(payload.id)
    );
    const user = state.users[index];
    const updatedUser = {
      avatar: user.avatar,
      email: user.email,
      id: user.id,
      first_name: user.first_name,
      last_name: user.last_name,
    };
    if (payload.firstName) {
      updatedUser.first_name = payload.firstName;
    }
    if (payload.lastName) {
      updatedUser.last_name = payload.lastName;
    }
    state.users[index] = updatedUser;
  },
  addUser(state, payload) {
    state.users.push(payload);
  },
  reloadPages(state) {
    const usersCount = state.users.length;
    let pages;
    if (usersCount / 6 > parseInt(usersCount / 6)) {
      pages = parseInt(usersCount / 6 + 1);
    } else {
      pages = usersCount / 6;
    }
    state.totalPages = pages;
  },
  removeUser(state, payload) {
    const userIndex = state.users.findIndex((user) => user.id === payload);
    state.users.splice(userIndex, 1);
  },
};
