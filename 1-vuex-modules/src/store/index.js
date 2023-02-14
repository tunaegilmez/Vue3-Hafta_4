import { createStore } from "vuex";
import contact from "./Modules/contact";
import taskmanager from "./Modules/taskmanager";

const store = createStore({
  state: {
    mainName: "Tuna",
  },
  modules: {
    musteri: contact,
    taskmanager,
  },
});

export default store;
