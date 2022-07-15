<template>
  <div
    class="tg-modalbox modal fade"
    :class="getLogin ? 'show in' : ''"
    id="tg-login"
    tabindex="-1"
    role="dialog"
  >
    <div
      class="m-0 p-0 d-flex justify-content-center align-items-center w-100 h-100"
      style="left: 0"
      role="document"
    >
      <div class="tg-modal-content" style="width: 350px; height: 60vh"></div>
    </div>
  </div>
</template>

<script>
import useScript from "@/hooks/useScript";
import { mapGetters } from "vuex";
export default {
  mounted() {
    useScript(process.env.BASE_URL + "_assets/js/vendor/bootstrap.min.js");
  },

  computed: {
    ...mapGetters(["getLogin"]),
  },
};
</script>

<style></style>
