<template>
  <div>
    <slider-box></slider-box>
    <main id="tg-main" class="tg-main tg-haslayout">
      <!--************************************
					About Us Start
			*************************************-->
      <maclar></maclar>
      <!--************************************
					About Us End
			*************************************-->
      <!--************************************
					Upcoming Match Start
			*************************************-->
      <puan-tablosu></puan-tablosu>
      <!--************************************
					Upcoming Match End
			*************************************-->
      <!--************************************
					Latest Result Start
			*************************************-->
      <section class="tg-main-section tg-haslayout">
        <div class="container">
          <One_shot></One_shot>
        </div>
      </section>
      <!--************************************
					Latest Result End
			*************************************-->
      <!--************************************
					Statistics Start
			*************************************-->
      <section class="tg-main-section tg-haslayout tg-bgdark">
        <div class="container">
          <h1 class="text-white">Sponsorlar</h1>
          <sponsorlar></sponsorlar>
        </div>
      </section>
      <!--************************************
					Statistics End
			*************************************-->
    </main>
  </div>
</template>

<script>
import sliderBox from "../Wrapper/slider-box.vue";
import Maclar from "../../components/maclar.vue";
import PuanTablosu from "../../components/puanTablosu.vue";
import One_shot from "../../components/one_shot.vue";
import Sponsorlar from "../../components/sponsorlar.vue";
export default {
  components: { sliderBox, Maclar, PuanTablosu, One_shot, Sponsorlar },
  data() {
    return {
      baseUrl: process.env.BASE_URL,
    };
  },
};
</script>

<style></style>
