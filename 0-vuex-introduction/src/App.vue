<template>
  <div class="container text-center">
    <!-- {{ $store.state.user }} -->

    <!-- <ul>
      <li v-for="permission in $store.state.permissions" :key="permission">
        Permission: {{ permission }}
      </li>
    </ul> -->

    <!-- <ul>
      <li v-for="user in $store.state.userList" :key="user">
        User: {{ user }}
      </li>
    </ul> -->
    <!-- <ul>
      <li v-for="(item, index) in $store.getters.woodItems" :key="index">
        {{ item.title }}
      </li>
    </ul> -->

    <!-- {{ $store.state.fullname }} -->
    <UserList />
    <NewUser />
  </div>
</template>

<script>
import UserList from "./components/UserList.vue";
import NewUser from "./components/NewUser.vue";
export default {
  components: {
    UserList,
    NewUser,
  },
  data() {
    return {};
  },
  created() {
    // console.log(this.$store.state.user);
    // // console.log(this.$store.state.itemList.filter(i => i.type === "Mobilya"));
    // console.log(this.$store.getters.woodItems);
    // // console.log(this.$store.getters.activeUser);
    // console.log("this.activeUser", this.activeUser);
  },
};
</script>
