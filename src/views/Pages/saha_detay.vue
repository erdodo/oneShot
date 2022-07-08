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
              <h1>SAHA DETAYLARI</h1>
            </div>
            <ol class="tg-breadcrumb">
              <li><a href="/">ANA SAYFA</a></li>
              <li class="active">SAHA DETAYLARI</li>
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
          
          <div class="">
            <h1>{{ data.saha_name_basic }}</h1>
            <h4>{{ data.department_id_turnuva }}</h4>
            <span> {{ data.description }} </span>
            <div class="tg-soccermedia-content tg-soccermedia-content2 tg-haslayout">
              <div class="masonry-grid laliga">
                <div class="tg-project">
                  <figure class="tg-postimg">
                    <img
                      :src="baseUrl + '_assets/images/gallery2/img-06.jpg'"
                      alt="image description"
                    />
                    <figcaption>
                      <a
                        class="tg-theme-tag"
                        data-rel="prettyPhoto[iframe]"
                        href="images/gallery2/img-06.jpg"
                        ><i class="fa fa-image"></i
                      ></a>
                      <a class="tg-theme-tag">in 2014</a>
                      <h3>ThunderWolves match</h3>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="masonry-grid bundesliga">
                <div class="tg-project">
                  <figure class="tg-postimg">
                    <img
                      :src="baseUrl + '_assets/images/gallery2/img-07.jpg'"
                      alt="image description"
                    />
                    <figcaption>
                      <a
                        class="tg-theme-tag"
                        data-rel="prettyPhoto[iframe]"
                        href="https://www.youtube.com/watch?v=iC9CpnSj-MU"
                        ><i class="fa fa-play"></i
                      ></a>
                      <a class="tg-theme-tag">in 2014</a>
                      <h3>ThunderWolves match</h3>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="masonry-grid championship">
                <div class="tg-project">
                  <figure class="tg-postimg">
                    <img
                      :src="baseUrl + '_assets/images/gallery2/img-08.jpg'"
                      alt="image description"
                    />
                    <figcaption>
                      <a
                        class="tg-theme-tag"
                        data-rel="prettyPhoto[iframe]"
                        href="images/gallery2/img-08.jpg"
                        ><i class="fa fa-image"></i
                      ></a>
                      <a class="tg-theme-tag">in 2014</a>
                      <h3>ThunderWolves match</h3>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="masonry-grid scottishpremiership">
                <div class="tg-project">
                  <figure class="tg-postimg">
                    <img
                      :src="baseUrl + '_assets/images/gallery2/img-09.jpg'"
                      alt="image description"
                    />
                    <figcaption>
                      <a
                        class="tg-theme-tag"
                        data-rel="prettyPhoto[iframe]"
                        href="https://www.youtube.com/watch?v=iC9CpnSj-MU"
                        ><i class="fa fa-play"></i
                      ></a>
                      <a class="tg-theme-tag">in 2014</a>
                      <h3>ThunderWolves match</h3>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="masonry-grid laliga">
                <div class="tg-project">
                  <figure class="tg-postimg">
                    <img
                      :src="baseUrl + '_assets/images/gallery2/img-10.jpg'"
                      alt="image description"
                    />
                    <figcaption>
                      <a
                        class="tg-theme-tag"
                        data-rel="prettyPhoto[iframe]"
                        href="images/gallery2/img-10.jpg"
                        ><i class="fa fa-image"></i
                      ></a>
                      <a class="tg-theme-tag">in 2014</a>
                      <h3>ThunderWolves match</h3>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="masonry-grid championship">
                <div class="tg-project">
                  <figure class="tg-postimg">
                    <img
                      :src="baseUrl + '_assets/images/gallery2/img-11.jpg'"
                      alt="image description"
                    />
                    <figcaption>
                      <a
                        class="tg-theme-tag"
                        data-rel="prettyPhoto[iframe]"
                        href="https://www.youtube.com/watch?v=iC9CpnSj-MU"
                        ><i class="fa fa-play"></i
                      ></a>
                      <a class="tg-theme-tag">in 2014</a>
                      <h3>ThunderWolves match</h3>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="masonry-grid laliga">
                <div class="tg-project">
                  <figure class="tg-postimg">
                    <img
                      :src="baseUrl + '_assets/images/gallery2/img-12.jpg'"
                      alt="image description"
                    />
                    <figcaption>
                      <a
                        class="tg-theme-tag"
                        data-rel="prettyPhoto[iframe]"
                        href="images/gallery2/img-12.jpg"
                        ><i class="fa fa-image"></i
                      ></a>
                      <a class="tg-theme-tag">in 2014</a>
                      <h3>ThunderWolves match</h3>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="masonry-grid championship">
                <div class="tg-project">
                  <figure class="tg-postimg">
                    <img
                      :src="baseUrl + '_assets/images/gallery2/img-13.jpg'"
                      alt="image description"
                    />
                    <figcaption>
                      <a
                        class="tg-theme-tag"
                        data-rel="prettyPhoto[iframe]"
                        href="https://www.youtube.com/watch?v=iC9CpnSj-MU"
                        ><i class="fa fa-play"></i
                      ></a>
                      <a class="tg-theme-tag">in 2014</a>
                      <h3>ThunderWolves match</h3>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="masonry-grid laliga">
                <div class="tg-project">
                  <figure class="tg-postimg">
                    <img
                      :src="baseUrl + '_assets/images/gallery2/img-14.jpg'"
                      alt="image description"
                    />
                    <figcaption>
                      <a
                        class="tg-theme-tag"
                        data-rel="prettyPhoto[iframe]"
                        href="images/gallery2/img-14.jpg"
                        ><i class="fa fa-image"></i
                      ></a>
                      <a class="tg-theme-tag">in 2014</a>
                      <h3>ThunderWolves match</h3>
                    </figcaption>
                  </figure>
                </div>
              </div>
              <div class="masonry-grid championship">
                <div class="tg-project">
                  <figure class="tg-postimg">
                    <img
                      :src="baseUrl + '_assets/images/gallery2/img-15.jpg'"
                      alt="image description"
                    />
                    <figcaption>
                      <a
                        class="tg-theme-tag"
                        data-rel="prettyPhoto[iframe]"
                        href="https://www.youtube.com/watch?v=iC9CpnSj-MU"
                        ><i class="fa fa-play"></i
                      ></a>
                      <a class="tg-theme-tag">in 2014</a>
                      <h3>ThunderWolves match</h3>
                    </figcaption>
                  </figure>
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
      sahaBolge: [],
      baseUrl: process.env.BASE_URL,
    };
  },
  mounted() {
    this.getSahaDetay();
  },
  methods: {
    getSahaDetay() {
      axios
        .post("/public/tables/sahalar/" + this.$route.params.id, {
          params: JSON.stringify({ column_set_id: "0" }),
        })
        .then((res) => {
          this.data = res.data.data.record;
        });
    },
    
  },
};
</script>

<style></style>
