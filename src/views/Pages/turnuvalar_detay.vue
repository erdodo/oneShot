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
              <h1>MAÇLAR</h1>
            </div>
            <ol class="tg-breadcrumb">
              <li><a href="/">ANA SAYFA</a></li>
              <li class="active">MAÇLAR</li>
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
					Fixtures Start
			*************************************-->
      <maclar
        :filters="{
          turnuvalar_id: {
            type: 1,
            guiType: 'multiselect',
            filter: [this.$route.params.id],
          },
        }"
      ></maclar>
      <!--************************************
					Fixtures End
			*************************************-->
      <!--************************************
					Upcoming Match Start
			*************************************-->
      <section v-if="maclar" class="tg-haslayout tg-bgstyleone">
        <div class="tg-bgboxone"></div>
        <div class="tg-bgboxtwo"></div>
        <div class="tg-bgpattrant">
          <div class="container">
            <div class="row">
              <div class="tg-upcomingmatch-counter">
                <div class="col-md-4 col-sm-4 col-xs-12 hidden-xs">
                  <figure>
                    <img
                      :src="baseUrl + '_assets/images/img-02.png'"
                      alt="image description"
                    />
                  </figure>
                </div>
                <div
                  class="col-md-8 col-sm-8 col-xs-12"
                  style="background-color: rgba(0, 0, 0, 0.2)"
                >
                  <div class="tg-contentbox">
                    <div class="tg-section-heading">
                      <h2>
                        {{ maclar[0]?.takimlar_ev_sahibi }} <span>VS</span>
                        {{ maclar[0]?.takimlar_deplasman }}
                      </h2>
                    </div>
                    <div class="tg-description">
                      <p>{{ maclar[0]?.sahalar_id }}</p>
                    </div>
                    <div class="my-4">
                      <iframe
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/6mMrWAgtWio"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                      ></iframe>
                    </div>
                    <div class="tg-btnbox mt-4">
                      <router-link :to="'/maclar/' + maclar[0]?.id" class="tg-btn"
                        ><span>Daha Fazlası</span></router-link
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="tg-main-section tg-haslayout">
        <div class="container">
          <div class="tg-section-name">
            <h2>MAÇLAR</h2>
          </div>
          <div class="col-sm-11 col-xs-11 pull-right">
            <div class="row">AÇIKLAMA</div>
          </div>
        </div>
      </section>
      <!--************************************
					Upcoming Match End
			*************************************-->
      <!--************************************
					Other Fixtures Start
			*************************************-->
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
    </main>
    <!--************************************
				Main End
		*************************************-->
  </div>
</template>

<script>
import axios from "axios";
import Maclar from "../../components/maclar.vue";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      maclar: [],
      puan_durumu: [],
      maclarLoading: true,
      puanDurumuLoading: true,
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
            filters: {
              turnuvalar_id: {
                type: 1,
                guiType: "multiselect",
                filter: [this.$route.params.id],
                description: "",
              },
            },
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
  components: { Maclar },
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
