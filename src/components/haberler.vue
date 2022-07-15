<template>
  <!--vueper-slides-- autoplay :visible-slides="3">
    <vueper-slide v-for="(slide, i) in blog" :key="i" :image="getImage(slide.images)">
      <template #loader>
        <i class="icon icon-loader spinning"></i>
        <span>Loading...</span>
      </template>
    </vueper-slide>
  </!--vueper-slides-->
  <div class="haberler">
    <h3>Haberler</h3>
    <vueper-slides
      v-if="blogState"
      class="no-shadow"
      :visible-slides="4"
      slide-multiple
      autoplay
      :infinite="true"
      :gap="1"
      fade
      :slide-ratio="1 / 3"
      :dragging-distance="200"
      :arrows-outside="true"
      :breakpoints="{ 800: { visibleSlides: 1, slideMultiple: 1 } }"
      fixed-height="350px"
    >
      <template v-for="i in blog" :key="i">
        <vueper-slide
          style="justify-content: end"
          :title="i.title.toString()"
          @click="tiklandi(i)"
        >
          <template #content>
            <div class="haber-content h-100 w-100 card">
              <img :src="getImage(i.images)" alt="" />
              <div class="p-3">
                <span class="h4">{{ i.title }}</span>
                <p class="ellipsis-4">{{ i.description }}</p>
              </div>
            </div>
          </template>
        </vueper-slide>
      </template>
      <template #arrow-left>
        <i class="fa-solid fa-arrow-left text-primary" style="font-size: 35px"></i>
      </template>

      <template #arrow-right>
        <i class="fa-solid fa-arrow-right text-primary" style="font-size: 35px"></i>
      </template>
    </vueper-slides>
  </div>
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
      blogState: false,
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
          this.blogState = res.data.data.all_records_count > 0;
        });
    },
    getImage(img) {
      if (img == undefined || img == "[]") {
        return null;
      } else {
        return (
          this.imgUrl +
          JSON.parse(img)[0].destination_path +
          "/s_" +
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
.slider-3 {
  height: 300px;
}
.haberler .vueperslide__content-wrapper {
  justify-content: end !important;
  padding-bottom: 10px;
}
.haber-content {
}
</style>
