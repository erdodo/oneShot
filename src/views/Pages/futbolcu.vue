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
              <h1>Futbolcu DETAYLARI</h1>
            </div>
            <ol class="tg-breadcrumb">
              <li><a href="/">ANA SAYFA</a></li>
              <li class="active">Futbolcu DETAYLARI</li>
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
      <div class="container">
        <div class="row">
          <div id="tg-twocolumns" class="tg-twocolumns tg-main-section tg-haslayout">
            <div class="col-12 col-xs-12 pull-left">
              <div class="tg-player-detail tg-haslayout">
                <div class="tg-player-data tg-haslayout">
                  <div class="tg-player-info tg-haslayout">
                    <div class="row">
                      <div class="col-sm-4 col-xs-12">
                        <div class="tg-widget tg-imagewidget">
                          <figure>
                            <img
                              v-if="getImage() == null"
                              src="@/assets/user.png"
                              alt="image description"
                            />
                            <img v-else :src="getImage()" alt="" />
                          </figure>
                        </div>
                      </div>
                      <div class="col-sm-8 col-xs-12">
                        <div class="tg-playcontent">
                          <a href="#" class="tg-theme-tag">SWEEPER</a>
                          <h3>
                            <a href="#"> {{ data.name_basic }} {{ data.surname }} </a>
                          </h3>
                          <span class="tg-stars"><span></span></span>
                        </div>
                        <ul>
                          <li>İsim :</li>
                          <li>{{ data.name_basic }}</li>
                          <li>Soyisim :</li>
                          <li>{{ data.surname }}</li>
                          <li>Yaş :</li>
                          <li>{{ data.yas }}</li>
                          <li>Takım :</li>
                          <li>{{ data.takimlar_id ? data.takimlar_id : " -- " }}</li>

                          <li>Social Networks :</li>
                          <li>
                            <ul class="tg-socialicons">
                              <li>
                                <a href="#"><i class="fa fa-facebook-f"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fa fa-twitter"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fa fa-linkedin"></i></a>
                              </li>
                              <li>
                                <a href="#"><i class="fa fa-dribbble"></i></a>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
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
      baseUrl: process.env.BASE_URL,
    };
  },
  mounted() {
    this.getFutbolcuDetay();
  },
  methods: {
    getFutbolcuDetay() {
      axios
        .post("/public/tables/users/" + this.$route.params.id, {
          params: JSON.stringify({ column_set_id: "0" }),
        })
        .then((res) => {
          this.data = res.data.data.record;
        });
    },
    getImage() {
      if (this.data.profile_picture == undefined || this.data.profile_picture == "[]") {
        return null;
      } else {
        return this.imgUrl + JSON.parse(this.data.profile_picture)[0];
      }
    },
  },
};
</script>

<style></style>
