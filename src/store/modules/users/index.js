import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  namespaced: true,
  state() {
    return {
      users: [],
      totalPages: 0,
    };
  },
  mutations,
  actions,
  getters,
};
