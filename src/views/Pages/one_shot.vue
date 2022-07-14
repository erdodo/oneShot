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
      <One_shot></One_shot>
    </main>
  </div>
</template>

<script>
import One_shot from "../../components/one_shot.vue";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
    };
  },
  components: { One_shot },
};
</script>

<style></style>
