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
              <h1>MAÇ DETAYLARI</h1>
            </div>
            <ol class="tg-breadcrumb">
              <li><a href="/">ANA SAYFA</a></li>
              <li class="active">MAÇ DETAYLARI</li>
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
              <div class="col-12 pull-left">
                <div class="tg-resultdetail">
                  <div class="tg-matchresult">
                    <div class="tg-box">
                      <div class="tg-score">
                        <h3>{{ detay?.mac_sonucu }}</h3>
                      </div>
                      <div class="tg-teamscore">
                        <strong class="tg-team-logo">
                          <a href="#">
                            <img
                              :src="baseUrl + '_assets/images/team-logo/logo-01.png'"
                              alt="image description"
                            />
                          </a>
                        </strong>
                        <div class="tg-team-nameplusstatus">
                          <h4>
                            <a href="#">
                              {{ detay?.takimlar_ev_sahibi?.[0]?.display }}
                            </a>
                          </h4>
                        </div>
                      </div>
                      <div class="tg-teamscore">
                        <strong class="tg-team-logo">
                          <a href="#">
                            <img
                              :src="baseUrl + '_assets/images/team-logo/logo-02.png'"
                              alt="image description"
                            />
                          </a>
                        </strong>
                        <div class="tg-team-nameplusstatus">
                          <h4>
                            <a href="#">
                              {{ detay.takimlar_deplasman?.[0]?.display }}
                            </a>
                          </h4>
                        </div>
                      </div>
                      <!----->
                      <div
                        class="w-100 d-flex flex-column justify-content-center align-items-center"
                      >
                        <div
                          v-for="dk of Object.keys(dakikaVeriSirali).sort()"
                          :key="dk"
                          class="text-white d-flex w-100"
                        >
                          <div class="w-50 py-2">
                            <div
                              class="text-right"
                              v-if="
                                dakikaVeriSirali[dk].takimlar_id ==
                                detay?.takimlar_ev_sahibi?.[0]?.display
                              "
                            >
                              <span
                                v-if="dakikaVeriSirali[dk].veri == 'kartlar'"
                                class="text-white"
                              >
                                {{ dakikaVeriSirali[dk].kart_goren_futbolcu }} /{{
                                  dakikaVeriSirali[dk].kart_gorme_dakikasiint
                                }}
                                <img
                                  v-if="
                                    dakikaVeriSirali[dk].kart_turu_id == 'Kırmızı Kart'
                                  "
                                  src="@/assets/red-card.png"
                                  alt="Kırmızı Kart"
                                  style="width: 33px"
                                />
                                <img
                                  v-else-if="
                                    dakikaVeriSirali[dk].kart_turu_id == 'Sarı Kart'
                                  "
                                  src="@/assets/yellow-card.png"
                                  alt="Sarı Kart"
                                  style="width: 33px"
                                />
                              </span>
                              <span v-else-if="dakikaVeriSirali[dk].veri == 'goller'">
                                {{ dakikaVeriSirali[dk].gol_futbolcular_id }}/
                                {{ dakikaVeriSirali[dk].gol_dakikasi }}
                                <img
                                  src="@/assets/goal.png"
                                  alt="Gol"
                                  style="width: 33px"
                                />
                              </span>
                            </div>
                          </div>
                          <div class="w-50 py-2">
                            <div
                              v-if="
                                dakikaVeriSirali[dk].takimlar_id ==
                                detay?.takimlar_deplasman?.[0]?.display
                              "
                            >
                              <span
                                v-if="dakikaVeriSirali[dk].veri == 'kartlar'"
                                class="text-white"
                              >
                                <img
                                  v-if="
                                    dakikaVeriSirali[dk].kart_turu_id == 'Kırmızı Kart'
                                  "
                                  src="@/assets/red-card.png"
                                  alt="Kırmızı Kart"
                                  style="width: 33px"
                                />
                                <img
                                  v-else-if="
                                    dakikaVeriSirali[dk].kart_turu_id == 'Sarı Kart'
                                  "
                                  src="@/assets/yellow-card.png"
                                  alt="Sarı Kart"
                                  style="width: 33px"
                                />
                                {{ dakikaVeriSirali[dk].kart_gorme_dakikasiint }}/
                                {{ dakikaVeriSirali[dk].kart_goren_futbolcu }}
                              </span>
                              <span v-else-if="dakikaVeriSirali[dk].veri == 'goller'">
                                <img
                                  src="@/assets/goal.png"
                                  alt="Gol"
                                  style="width: 33px"
                                />
                                {{ dakikaVeriSirali[dk].gol_dakikasi }}/{{
                                  dakikaVeriSirali[dk].gol_futbolcular_id
                                }}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!----->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12">
              <h3>Canlı Yayın</h3>
              <iframe
                v-if="getLink(detay.canli_yayin) != 'empty'"
                width="560"
                height="515"
                :src="getLink(detay.canli_yayin)"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
          <div class="row mt-5">
            <div class="col-12">
              <h3>Video</h3>
              <iframe
                v-if="getLink(detay.video_url) != 'empty'"
                width="560"
                height="515"
                :src="getLink(detay.video_url)"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
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
//eslint-disable
import axios from "axios";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      detay: {},
      dakikaVeri: {},
      dakikaVeriSirali: {},
      veriGeldi: 0,
    };
  },
  mounted() {
    this.getMacDetay();
    this.getGoller();
    this.getKartlar();
    this.getDegisiklikler();
  },
  methods: {
    getMacDetay() {
      axios
        .post("public/tables/maclar/" + this.$route.params.id + "/edit", {
          params: JSON.stringify({
            column_set_id: "0",
          }),
        })
        .then((res) => {
          this.detay = res.data.data.record;
        });
    },
    getGoller() {
      axios
        .post("public/tables/goller", {
          params: JSON.stringify({
            page: 1,
            limit: "100",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: {
              maclar_name: {
                type: 1,
                guiType: "multiselect",
                filter: [this.$route.params.id],
              },
            },
          }),
        })
        .then((res) => {
          for (const data of Object.values(res.data.data.records)) {
            data["veri"] = "goller";
            this.dakikaVeri[data.gol_dakikasi] = data;
          }
          this.veriGeldi++;
        });
    },
    getKartlar() {
      axios
        .post("public/tables/kartlar", {
          params: JSON.stringify({
            page: 1,
            limit: "100",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: {
              maclar_name: {
                type: 1,
                guiType: "multiselect",
                filter: [this.$route.params.id],
              },
            },
          }),
        })
        .then((res) => {
          for (const data of Object.values(res.data.data.records)) {
            data["veri"] = "kartlar";
            this.dakikaVeri[data.kart_gorme_dakikasiint] = data;
          }
          this.veriGeldi++;
        });
    },
    getDegisiklikler() {
      axios
        .post("public/tables/degisiklikler", {
          params: JSON.stringify({
            page: 1,
            limit: "100",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: {
              maclar_name: {
                type: 1,
                guiType: "multiselect",
                filter: [this.$route.params.id],
              },
            },
          }),
        })
        .then((res) => {
          for (const data of Object.values(res.data.data.records)) {
            data["veri"] = "degisiklikler";
            this.dakikaVeri[data.degisklik_dakikasi] = data;
          }
          this.veriGeldi++;
        });
    },
    getLink(data) {
      if (data != null) {
        return data.replace("watch?v=", "embed/");
      } else {
        return "empty";
      }
    },
  },
  watch: {
    veriGeldi() {
      if (this.veriGeldi == 3) {
        console.log(this.dakikaVeri);

        const sortable = Object.fromEntries(
          Object.entries(this.dakikaVeri).sort(([, a], [, b]) => a - b)
        );
        this.dakikaVeri = sortable;
        console.log(sortable);
        this.dakikaVeriSirali = sortable;
        console.log(this.dakikaVeriSirali);
      }
    },
  },
};
</script>

<style></style>
