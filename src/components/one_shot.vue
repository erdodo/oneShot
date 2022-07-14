<template>
  <div>
    <div class="p-5">
      <haberlerVue></haberlerVue>
    </div>
    <div class="container">
      <h1>One shot</h1>
      <h5>
        Türkiye ' nin seçkin ve elit antrenör ve scoutları ile futbol temel eğitimi almış,
        gelişime açık, hedefleri ve hayalleri olan nice alt yaş gruplarındaki
        çocuklarımızın keşfi için hazırlanmış ulusal ve uluslararası sportif turnuva, lig
        ve organizasyon hizmeti veren ONE SHOT, tamamen özgün ve sosyal sorumluluk bilinci
        ile faaliyetlerini yürütmektedir
      </h5>
    </div>
  </div>
</template>

<script>
import haberlerVue from "./haberler.vue";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
    };
  },
  components: { haberlerVue },
};
</script>

<style></style>
