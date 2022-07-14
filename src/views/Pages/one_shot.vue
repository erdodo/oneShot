<template>
  <div>
    <!--************************************
				Banner Start
		*************************************-->
    <div class="tg-banner tg-haslayout">
      <div class="tg-imglayer">
        <img :src="baseUrl + '_assets/images/bg-pattran.png'" alt="image desctription" />
      </div>
      <div class="container">
        <div class="row">
          <div class="tg-banner-content tg-haslayout">
            <div class="tg-pagetitle">
              <h1>Hakkımızda</h1>
            </div>
            <ol class="tg-breadcrumb">
              <li><a href="/">Ana Sayfa</a></li>
              <li class="active">Hakkımızda</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <!--************************************
				Banner End
		*************************************-->
    <!--************************************
				Main Start
		*************************************-->

    <main id="tg-main" class="tg-main tg-haslayout">
      <!--************************************
					About Us Start
			*************************************-->
      <div class="p-5">
        <haberlerVue></haberlerVue>
      </div>
      <div class="container">
        <h1>One shot</h1>
        <h5>
          Türkiye ' nin seçkin ve elit antrenör ve scoutları ile futbol temel eğitimi
          almış, gelişime açık, hedefleri ve hayalleri olan nice alt yaş gruplarındaki
          çocuklarımızın keşfi için hazırlanmış ulusal ve uluslararası sportif turnuva,
          lig ve organizasyon hizmeti veren ONE SHOT, tamamen özgün ve sosyal sorumluluk
          bilinci ile faaliyetlerini yürütmektedir
        </h5>
      </div>
    </main>
    <!--************************************
				Main End
		*************************************-->
  </div>
</template>

<script>
import haberlerVue from "../../components/haberler.vue";
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
