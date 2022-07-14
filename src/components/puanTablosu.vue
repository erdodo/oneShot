<template>
  <section class="tg-haslayout tg-bgstyletwo">
    <div class="tg-bgboxone"></div>
    <div class="tg-bgboxtwo"></div>
    <div class="tg-bgpattrant">
      <div class="container">
        <div class="row">
          <div class="tg-pointstablewrapper">
            <div class="col-sm-8 col-xs-12">
              <div class="tg-pointstable py-4">
                <div class="tg-section-heading">
                  <h2>PUAN TABLOSU</h2>
                </div>
                <div v-if="puanDurumuLoading == true" class="col-12">
                  <div class="load w-100" style="height: 600px">
                    <span class="loader-9"> </span>
                  </div>
                </div>
                <div v-else class="my-4">
                  <div class="tg-pointtable">
                    <div class="tg-box">TAKIM</div>
                    <div class="tg-box">O</div>
                    <div class="tg-box">G</div>
                    <div class="tg-box">B</div>
                    <div class="tg-box">M</div>
                    <div class="tg-box">A</div>
                    <div class="tg-box">P</div>
                  </div>
                  <div v-for="pd in puan_durumu" :key="pd" class="tg-pointtable">
                    <div class="tg-box">{{ pd.takimlar_id }}</div>
                    <div class="tg-box">{{ pd.oynanan_mac }}</div>
                    <div class="tg-box">{{ pd.galibiyet_sayisi }}</div>
                    <div class="tg-box">{{ pd.beraberlik_sayisi }}</div>
                    <div class="tg-box">{{ pd.maglubiyet_sayisi }}</div>
                    <div class="tg-box">{{ pd.averaj }}</div>
                    <div class="tg-box">{{ pd.puan_durumu_puan }}</div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-4 col-xs-12 hidden-xs">
              <figure>
                <img src="/_assets/images/img-03.png" alt="image description" />
              </figure>
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
      puan_durumu: [],
      puanDurumuLoading: true,
      slides: [
        {
          title: "Slide #1",
          content: "Slide 1 content.",
        },
        {
          title: "Slide #2",
          content: "Slide 2 content.",
        },
      ],
    };
  },
  mounted() {
    this.getPuanDurumu();
  },
  methods: {
    getPuanDurumu() {
      this.puanDurumuLoading = true;
      axios
        .post("public/tables/puan_durumu", {
          params: JSON.stringify({
            page: 1,
            limit: "100",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: {},
          }),
        })
        .then((res) => {
          this.puanDurumuLoading = false;
          this.puan_durumu = res.data.data.records;
        });
    },
  },
  watch: {
    $route() {
      this.getPuanDurumu();
    },
    $router() {
      this.getPuanDurumu();
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
</style>
