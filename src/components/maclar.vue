<template>
  <section class="tg-main-section tg-haslayout">
    <div class="container">
      <div class="tg-section-name">
        <h2>MAÇLAR</h2>
      </div>
      <div class="col-sm-11 col-xs-11 pull-right">
        <div class="row">
          <div class="tg-latestresult">
            <div class="row">
              <div v-if="maclarLoading == true" class="col-12">
                <div class="load w-100"><span class="loader-73"> </span></div>
              </div>
              <div v-else class="col-sm-12 col-xs-12">
                <div
                  v-for="m in maclar"
                  :key="m"
                  class="tg-upcomingmatch-slider my-2 tg-upcomingmatch"
                >
                  <div class="card">
                    <div class="card-body">
                      <div
                        class="d-flex flex-column flex-md-row justify-content-between align-items-center"
                      >
                        <div
                          class="mac d-flex justify-content-between align-items-center"
                        >
                          <div class="image">
                            <img
                              :src="baseUrl + '_assets/images/team-logo/logo-l-02.png'"
                              alt=""
                            />
                          </div>
                          <h3 class="">{{ m.takimlar_ev_sahibi }}</h3>
                        </div>
                        <div class="mac d-flex justify-content-center mx-4">
                          <h1>{{ m.mac_sonucu.split("-")[0] }}</h1>
                          <div class="d-flex flex-column text-center mx-5">
                            <p class="text-nowrap">{{ m.turnuva_grubu_id }}</p>
                            <h5>vs</h5>
                          </div>
                          <h1>{{ m.mac_sonucu.split("-")[1] }}</h1>
                        </div>
                        <div
                          class="mac d-flex justify-content-between align-items-center"
                        >
                          <h3 class="">{{ m.takimlar_deplasman }}</h3>
                          <div class="image">
                            <img
                              :src="baseUrl + '_assets/images/team-logo/logo-l-02.png'"
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      maclar: [],
      maclarLoading: true,
    };
  },
  mounted() {
    console.log("wtf");
    this.getMaclar();
  },
  methods: {
    getMaclar() {
      this.maclarLoading = true;
      axios
        .post("public/tables/maclar", {
          params: JSON.stringify({
            page: 1,
            limit: "5",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: {},
          }),
        })
        .then((res) => {
          this.maclarLoading = false;
          this.maclar = res.data.data.records;
        });
    },
  },
  watch: {
    $route() {
      this.getMaclar();
    },
    $router() {
      this.getMaclar();
    },
  },
};
</script>

<style>
table,
thead,
tbody,
tr,
td,
th {
  border: none !important;
  border-bottom: 1px solid rgb(238, 238, 238) !important;
}

.tg-upcomingmatch {
  height: auto !important;
}

.tg-latestresult {
  min-height: 300px;
}
@media screen and (max-width: 768px) {
  .image {
    width: 50px;
  }
  .mac {
    width: 100%;
  }
}
@media screen and (max-width: 968px) {
  .image {
    width: 100px;
  }
  .mac {
    width: 33%;
  }
}
@media screen and (min-width: 968px) {
  .image {
    width: 180px;
  }
  .mac {
    width: 33%;
  }
}
</style>
