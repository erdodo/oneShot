<template>
  <div>
    <div class="container">
      <div>
        <div class="w-100 d-flex">
          <video controls style="height: 60vh">
            <source :src="baseUrl + '_assets/oneTanitim.mp4'" type="video/mp4" />
          </video>
          <div class="px-4">
            <h1>One shot</h1>
            <h5 style="text-transform: none">
              Türkiye ' nin seçkin ve elit antrenör ve scoutları ile futbol temel eğitimi
              almış, gelişime açık, hedefleri ve hayalleri olan nice alt yaş gruplarındaki
              çocuklarımızın keşfi için hazırlanmış ulusal ve uluslararası sportif
              turnuva, lig ve organizasyon hizmeti veren ONE SHOT, tamamen özgün ve sosyal
              sorumluluk bilinci ile faaliyetlerini yürütmektedir
            </h5>
          </div>
        </div>
      </div>

      <div class="p-5">
        <haberlerVue></haberlerVue>
      </div>
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
