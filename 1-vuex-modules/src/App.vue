<template>
  <p>
    {{ $store.state.mainName }}
  </p>
  <p>
    {{ $store.state.musteri.contactName }}
  </p>
  <p>
    {{ musteriADI }}
  </p>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  created() {
    console.log(this.$store.getters["musteri/_contactName"]);
  },
  computed: {
    ...mapGetters({
      musteriADI: "musteri/_contactName",
    }),
  },
};
</script>
