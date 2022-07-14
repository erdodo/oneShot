<template>
  <div>
    <!--************************************
				Banner Start
		*************************************-->
    <div class="tg-banner tg-haslayout">
      <div class="tg-imglayer">
        <img src="images/bg-pattran.png" alt="image desctription" />
      </div>
      <div class="container">
        <div class="row">
          <div class="tg-banner-content tg-haslayout">
            <div class="tg-pagetitle">
              <h1>BLOG / HABER</h1>
            </div>
            <ol class="tg-breadcrumb">
              <li><a href="#">Home</a></li>
              <li class="active">BLOG / HABER</li>
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
      <div class="tg-main-section tg-haslayout">
        <div class="container">
          <div class="row">
            <div id="tg-twocolumns" class="tg-twocolumns tg-haslayout">
              <div class="col-sm-12 col-xs-12">
                <figure
                  class="tg-postimg tg-postimgdetail"
                  style="display: flex; justify-content: center"
                >
                  <img v-if="getImage() == null" src="@/assets/blog.jpeg" />
                  <img v-else :src="getImage()" alt="image description" />
                </figure>
              </div>
              <div>
                <h1>{{ data.title }}</h1>
                <p>{{ data.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!--************************************
				Main End
		*************************************-->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {},
    };
  },
  mounted() {
    this.getBlog();
  },
  methods: {
    getBlog() {
      axios
        .post("/public/tables/blog/" + this.$route.params.id, {
          params: JSON.stringify({ column_set_id: "0" }),
        })
        .then((res) => {
          this.data = res.data.data.record;
          console.log(this.getImage());
        });
    },
    getImage() {
      if (this.data.images == undefined || this.data.images == "[]") {
        return null;
      } else {
        return (
          this.imgUrl +
          JSON.parse(this.data.images)[0].destination_path +
          "/m_" +
          JSON.parse(this.data.images)[0].file_name
        );
      }
    },
  },
};
</script>

<style></style>
