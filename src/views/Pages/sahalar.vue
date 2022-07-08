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
              <h1>SAHALAR</h1>
            </div>
            <ol class="tg-breadcrumb">
              <li><a href="/">Home</a></li>
              <li class="active">SAHALAR</li>
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
      <!--************************************
					Soccer Media Start
			*************************************-->
      <section class="tg-main-section tg-soccermedia tg-haslayout">
        <div class="container">
          <div class="col-sm-12 col-xs-12 pull-right">
            <div class="row align-items-end">
              <div class="col-12 col-sm-6 col-md-4">
                <label for="">Saha ismi:</label>
                <input type="text" class="form-control" v-model="sahai" />
              </div>
              <div class="col-12 col-sm-6 col-md-4">
                <label for="">Bölge</label>
                <select class="form-control" v-model="sahab">
                  <option value=""></option>
                  <option v-for="s in sahaBolge" :key="s" :value="s.id">
                    {{ s.text }}
                  </option>
                </select>
              </div>
              <div class="col-12 col-sm-6 col-md-4 p-3">
                <button class="btn btn-primary" @click="filtrele()">Ara</button>
              </div>
              <div
                id="filter-masonry"
                class="tg-soccermedia-content tg-soccermedia-content2 tg-haslayout"
              >
                <router-link
                  :to="'/saha-detay/' + s.id"
                  v-for="s in sahalar"
                  :key="s"
                  class="masonry-grid"
                >
                  <div class="tg-project">
                    <figure class="tg-postimg">
                      <img
                        :src="baseUrl + '_assets/images/gallery2/img-01.jpg'"
                        alt="image description"
                      />
                      <figcaption>
                        <a class="tg-theme-tag">Detaylar</a>
                        <label class="h4 text-white">
                          {{ s.department_id_turnuva }}
                        </label>
                        <h3>{{ s.saha_name_basic }}</h3>
                      </figcaption>
                    </figure>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!--************************************
					Soccer Media End
			*************************************-->
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
      baseUrl: process.env.BASE_URL,
      sahai: "",
      sahab: 0,
      filters: {},
      sahalar: [],
    };
  },
  mounted() {
    this.getSahalar();
    this.getSahaBolge();
  },
  methods: {
    getSahalar() {
      axios
        .post("public/tables/sahalar", {
          params: JSON.stringify({
            page: 1,
            limit: "10",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: this.filters,
          }),
        })
        .then((res) => {
          this.sahalar = res.data.data.records;
        });
    },
    getSahaBolge() {
      axios
        .post("/public/tables/sahalar/getSelectColumnData/department_id_turnuva", {
          search: "***",
          limit: 1000,
        })
        .then((res) => {
          this.sahaBolge = res.data.results;
        });
    },
    filtrele() {
      if (this.sahai != "" && this.sahab > 0) {
        this.filters = {
          saha_name_basic: {
            type: 1,
            guiType: "string",
            filter: this.sahai,
          },
          department_id_turnuva: {
            type: 1,
            guiType: "multiselect",
            filter: [this.sahab],
          },
        };
      } else if (this.sahai != "") {
        this.filters = {
          saha_name_basic: {
            type: 1,
            guiType: "string",
            filter: this.sahai,
          },
        };
      } else if (this.sahab > 0) {
        this.filters = {
          department_id_turnuva: {
            type: 1,
            guiType: "multiselect",
            filter: [this.sahab],
          },
        };
      } else {
        this.filters = {};
      }
      this.getSahalar();
    },
  },
};
</script>

<style></style>
