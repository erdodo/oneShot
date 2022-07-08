<template>
  <div class="tg-sliderbox" style="height: 100vh">
    <div class="tg-imglayer">
      <img :src="baseUrl + '_assets/images/bg-pattran.png'" alt="image desctription" />
    </div>
    <div
      id="tg-home-slider"
      style="height: 100vh"
      class="tg-home-slider p-0 tg-haslayout"
    >
      <div class="swiper-wrapper" style="height: 100vh">
        <div v-for="s in slider" :key="s" class="swiper-slide">
          <div class="container">
            <figure class="floating">
              <img :src="getImage(s.images)" alt="image description" />
            </figure>
            <div class="tg-slider-content">
              <h1>{{ s.title }}</h1>
              <div class="tg-btnbox">
                <h2>{{ s.description }}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="tg-btn-next">
        <span>Sonraki</span>
        <span class="fa fa-angle-down"></span>
      </div>
      <div class="tg-btn-prev">
        <span>Önceki</span>
        <span class="fa fa-angle-down"></span>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      slider: [],
    };
  },
  mounted() {
    this.getSlider();
  },
  methods: {
    getSlider() {
      axios
        .post("public/tables/slider", {
          params: JSON.stringify({
            page: 1,
            limit: "4",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: {},
          }),
        })
        .then((res) => {
          this.slider = res.data.data.records;
        });
    },
    getImage(img) {
      if (img == undefined || img == "[]") {
        return null;
      } else {
        return (
          this.imgUrl +
          JSON.parse(img)[0].destination_path +
          "/m_" +
          JSON.parse(img)[0].file_name
        );
      }
    },
  },
};
</script>

<style></style>
