import logo from "../../../assets/logo.png"
export default {
  async loadUsers(context) {
    const response = await fetch("https://reqres.in/api/users");
    const data = await response.json();
    const pages = data.total_pages;
    context.commit('setTotalPages', pages)
    context.commit("setUsers", data.data);
    if (pages > 1) {
      for (let i = 2; i <= pages; i++) {
        let url = `https://reqres.in/api/users?page=${i}`;
        const response = await fetch(url);
        const data = await response.json();
        context.commit("setUsers", data.data);
      }
    }
  },
  async editUser(context, payload) {
    let url = `https://reqres.in/api/users/${payload.id}`;
    const response = await fetch(url, {
      method: payload.method,
      body: JSON.stringify({
        firstName: payload.firstName,
        lastName: payload.lastName,
      }),
    });
    const data = await response.json();
    if (data.updatedAt) {
      context.commit("editUser", {
        firstName: payload.firstName,
        lastName: payload.lastName,
        id: payload.id,
      });
      return true;
    }
    return false;
  },
  async addUser(context, payload) {
    let url = `https://reqres.in/api/users`;
    const response = await fetch(url, {
      method: payload.method,
      body: JSON.stringify({
        firstName: payload.firstName,
        lastName: payload.lastName,
      }),
    });
    const data = await response.json();
    if (data.id) {
      context.commit("addUser", {
        first_name: payload.firstName,
        last_name: payload.lastName,
        id: Number(data.id),
        avatar: payload.avatar ? payload.avatar : logo,
      });
      context.commit("reloadPages")
      return true;
    }
    return false;
  },
  async removeUser(context, payload) {    
    const response = await fetch(`https://reqres.in/api/users/${payload}`, {
      method: "DELETE",
    });
    if (response.ok) {
      context.commit('removeUser', payload)
      context.commit("reloadPages")
    }
  }
};
