<template>
  <div class="tg-sliderbox" style="height: 100vh">
    <div class="tg-imglayer">
      <img :src="baseUrl + '_assets/images/bg-pattran.png'" alt="image desctription" />
    </div>
    <div class="slider p-5">
      <vueper-slides ref="myVueperSlides" class="no-shadow">
        <vueper-slide :content="video"> </vueper-slide>
        <vueper-slide
          v-for="(slide, i) in slider"
          :key="i"
          :image="getImage(slide.images)"
          :title="parallaxFixedContent ? slide.title : ''"
          :content="parallaxFixedContent ? slide.description : ''"
        />
      </vueper-slides>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      slider: [],
      parallax: 1,
      parallaxFixedContent: false,
      video: `<div style="    height: 65vh;"><video autoplay controls style="height:100%"><source src="/_assets/oneTanitim.mp4" type="video/mp4"></video></div>`,
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
          "" +
          JSON.parse(img)[0].file_name
        );
      }
    },
  },
  components: { VueperSlides, VueperSlide },
};
</script>

<style>
.slider {
  position: absolute;
  top: 240px;
  width: 100%;
  height: 100%;
}
.vueperslides__parallax-wrapper {
  height: 65vh;

  padding-bottom: 0 !important;
}
</style>
