<template>
  <button class="red" @click="updateName">Add Item</button>
</template>
<script>
export default {
  methods: {
    updateName() {
      const userData = {
        id: new Date().getTime(),
        title: "Dolap",
        type: "Mobilya",
      };
      //   this.$store.commit("newItem", userData);
      this.$store.dispatch("newItem", userData);
      //   this.$store.state.itemList.push(userData);
      //   this.$store.state.fullname = new Date().getTime();
    },
  },
};
</script>
