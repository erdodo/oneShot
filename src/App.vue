<template>
  <div>
    <wrapper></wrapper>
    <searchbox></searchbox>
    <login></login>
    <register></register>
    <script-page></script-page>
  </div>
</template>
<script>
import wrapper from "@/views/Layout/wrapper.vue";
import searchbox from "@/views/Layout/searchbox.vue";
import login from "@/views/Modals/login.vue";
import register from "@/views/Modals/register.vue";
import scriptPage from "@/views/Script.vue";

export default {
  components: {
    wrapper,
    searchbox,
    login,
    register,
    scriptPage,
  },
};
</script>
<style>
* {
  font-family: 'Oswald',
    Arial,
    Helvetica,
    sans-serif;
}

.ellipsis-4 {
  display: -webkit-box;
  max-width: 200px;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
