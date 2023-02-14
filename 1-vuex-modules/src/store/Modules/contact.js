export default {
  namespaced: true,
  state: {
    contactName: "contact name",
    contactAddress: "contact address",
  },
  mutations: {
    setItem(state, name) {
      state.contactName = name;
    },
  },
  getters: {
    _contactName: state => state.contactName,
  },
};
