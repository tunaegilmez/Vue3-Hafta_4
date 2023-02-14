import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {
      name: "Tuna",
      lname: "Eğilmez",
      age: 21,
      adsress: {},
      password: 123123123,
      tc: 11111111,
    },
    fullname: "Tuna Eğilmez",
    theme: "dark",
    permissions: [1, 2, 3, 4, 5, 6],
    userList: ["Tuna", "Zeyno", "Batu", "Memo", "Emine", "Soner", "Suna"],
    itemList: [
      { id: 1, title: "Masa", type: "Mobilya" },
      { id: 2, title: "Sandalye", type: "Mobilya" },
      { id: 3, title: "TV", type: "Elektronik" },
      { id: 4, title: "Monitör", type: "Elektronik" },
      { id: 5, title: "Monopoly", type: "Hobi" },
    ],
  },
  mutations: {
    newItem(state, item) {
      state.itemList.push(item);
    },
  },
  actions: {
    newItem({ commit }, item) {
      console.log("item", item);
      setTimeout(() => {
        // context.commit("newItem", item);
        commit("newItem", item);
      }, 2000);
    },
  },
  getters: {
    woodItems: state => state.itemList.filter(i => i.type === "Mobilya"),
    activeUser(state) {
      const user = {
        ...state.user,
      };
      delete user.password;
      return user;
    },
  },
});

export default store;
