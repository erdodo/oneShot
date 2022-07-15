<template>
  <div></div>
</template>
<script>
import useScript from "@/hooks/useScript";

export default {
  created() {
    setTimeout(() => {
      useScript("https://code.jquery.com/jquery-3.6.0.slim.min.js");
      useScript(process.env.BASE_URL + "_assets/js/vendor/jquery-library.js");
      useScript(process.env.BASE_URL + "_assets/js/vendor/bootstrap.min.js");
      useScript(process.env.BASE_URL + "_assets/js/customScrollbar.min.js");
      useScript(process.env.BASE_URL + "_assets/js/owl.carousel.js");
      useScript(process.env.BASE_URL + "_assets/js/isotope.pkgd.js");
      useScript(process.env.BASE_URL + "_assets/js/prettyPhoto.js");
      useScript(process.env.BASE_URL + "_assets/js/swiper.min.js");
      useScript(process.env.BASE_URL + "_assets/js/jquery-ui.js");
      useScript(process.env.BASE_URL + "_assets/js/countTo.js");
      useScript(process.env.BASE_URL + "_assets/js/appear.js");
      setTimeout(() => {
        useScript(process.env.BASE_URL + "_assets/js/main.js");
      }, 100);
    }, 1000);
  },
};
</script>
<style></style>
