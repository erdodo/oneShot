<template>
  <vueper-slides
    :autoplay="true"
    class="no-shadow"
    :visible-slides="3"
    slide-multiple
    :gap="3"
    :slide-ratio="1 / 4"
    :dragging-distance="500"
    :breakpoints="{ 800: { visibleSlides: 2, slideMultiple: 2 } }"
  >
    <vueper-slide
      v-for="i in blog"
      :key="i"
      :title="i.title"
      :image="getImage(i.images)"
      @click="tiklandi(i)"
    >
    </vueper-slide>
  </vueper-slides>
</template>

<script>
// In your Vue.js component.
import { VueperSlides, VueperSlide } from "vueperslides";
import "vueperslides/dist/vueperslides.css";
import axios from "axios";
import router from "../router";
export default {
  data() {
    return {
      blog: {},
    };
  },
  mounted() {
    this.getBlog();
  },
  components: { VueperSlides, VueperSlide },
  methods: {
    getBlog() {
      axios
        .post("public/tables/blog", {
          params: JSON.stringify({
            page: 1,
            limit: "10",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: {},
          }),
        })
        .then((res) => {
          this.blog = res.data.data.records;
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
    tiklandi(i) {
      router.push("/blog/" + i.id);
    },
  },
};
</script>

<style>
.vueperslide__title {
  padding: 10px;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 10px;
  color: black;
  font-size: larger;
  font-weight: 800;
}
</style>
