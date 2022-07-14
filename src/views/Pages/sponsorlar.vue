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
              <h1>Sponsorlar</h1>
            </div>
            <ol class="tg-breadcrumb">
              <li><a href="#">Ana Sayfa</a></li>
              <li class="active">Sponsorlar</li>
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
    <main class="tg-main tg-haslayout">
      <div class="tg-main-section tg-haslayout">
        <div class="container">
          <div class="row">
            <div
              v-for="(g, key) in galeri.records"
              :key="g"
              class="col-12 col-md-6 col-lg-4"
              @click="tamEkran(key)"
            >
              <img :src="getImage(g.image, 'm_')" class="w-100 h-auto" alt="" />
            </div>
          </div>
        </div>
      </div>
    </main>
    <!--************************************
				Main End
		*************************************-->
    <div v-if="tamEkranState" class="tam-ekran">
      <a @click="tamEkranState = false" class="close text-danger">X</a>
      <a class="btn left" @click="tamEkran(tamEkranKey + 1)">ÖNCEKİ</a>
      <img :src="getImage(galeri.records?.[tamEkranKey].images, 'b_')" alt="" />
      <a style="right: 30px" class="btn right" @click="tamEkran(tamEkranKey + 1)"
        >Sonraki</a
      >
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      params: {
        page: 1,
        limit: "24",
        column_array_id: "0",
        column_array_id_query: "0",
        sorts: {},
        filters: {},
      },
      galeri: [],
      tamEkranKey: 0,
      tamEkranState: false,
    };
  },
  mounted() {
    this.getGaleri();
  },
  methods: {
    getGaleri() {
      axios
        .post("public/tables/sponsor", {
          params: JSON.stringify({
            page: 1,
            limit: "1000",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: {},
          }),
        })
        .then((res) => {
          this.galeri = res.data.data;
        });
    },
    getImage(img, boyut) {
      if (img == undefined || img == "[]") {
        return null;
      } else {
        return (
          this.imgUrl +
          JSON.parse(img)[0].destination_path +
          "/" +
          boyut +
          JSON.parse(img)[0].file_name
        );
      }
    },
    yonlendir(id) {
      this.$router.push("/galeri/" + id);
    },
    tamEkran(key) {
      if (key < this.galeri.all_records_count && key >= 0) {
        this.tamEkranKey = key;
        this.tamEkranState = true;
      } else {
        this.tamEkranState = false;
      }
    },
  },
};
</script>

<style>
.erdo-image {
  height: 350px;
  width: 300px;
  background-position: center !important;
  background-size: cover !important;
  padding: 0;
  display: flex;
  justify-content: end;
  flex-direction: column;
  cursor: pointer;
}
.erdo-image .h2 {
  background: rgba(0, 0, 0, 0.5);
  margin: 0;
  padding: 20px;
  color: white;
}
.tam-ekran {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.3);
  z-index: 9999;
  display: flex;
  align-items: center;
  padding: 30px;
  justify-content: space-between;
}
.tam-ekran .btn {
  color: white;
  font-size: 30px !important;
  position: absolute;
}
.tam-ekran .btn:hover {
  background: rgba(0, 0, 0, 0.3);
  color: white;
}
.tam-ekran image {
  width: 100%;
  height: auto;
}
.tam-ekran .close {
  position: fixed;
  top: 40px;
  right: 50px;
  z-index: 9999999999;
  font-size: 40px;
  opacity: 1;
}
</style>
