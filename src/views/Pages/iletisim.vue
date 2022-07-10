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
              <h1>İLETİŞİM</h1>
            </div>
            <ol class="tg-breadcrumb">
              <li><a href="/">Home</a></li>
              <li class="active">İLETİŞİM</li>
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
    <main class="tg-main tg-paddingbottom-zero tg-haslayout">
      <section class="tg-main-section tg-paddingbottom-zero tg-haslayout">
        <div class="container">
          <div class="tg-section-name">
            <h2>İLETİŞİM</h2>
          </div>
          <div class="col-sm-11 col-xs-11 pull-right">
            <div class="row">
              <div class="tg-contactus tg-haslayout">
                <div class="row">
                  <div class="col-md-5 col-sm-12 col-xs-12">
                    <div class="tg-contactinfobox">
                      <ul class="tg-contactinfo">
                        <li>
                          <i class="fa fa-map-marker"></i>
                          <address>{{ ilt.adres }}</address>
                        </li>
                        <li>
                          <i class="fa fa-phone"></i>
                          <span> {{ ilt.phone }} </span>
                        </li>
                        <li>
                          <i class="fa fa-envelope-o"></i>
                          <a :href="'mailto:' + ilt.email_basic">
                            {{ ilt.email_basic }}
                          </a>
                        </li>
                        <li>
                          <i class="fa fa-facebook-f"></i>
                          <a :href="ilt.facebook"> {{ ilt.facebook }} </a>
                        </li>
                        <li>
                          <i class="fa fa-twitter"></i>
                          <a :href="ilt.twitter"> {{ ilt.twitter }} </a>
                        </li>
                        <li>
                          <i class="fa fa-instagram"></i>
                          <a :href="ilt.instagram">{{ ilt.instagram }}</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="col-md-7 col-sm-12 col-xs-12">
                    <div class="border-none">
                      <div class="form-group">
                        <input
                          type="text"
                          required=""
                          placeholder="İsim*"
                          class="form-control"
                          name="contact[name]"
                          v-model="isim"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="email"
                          required=""
                          placeholder="Mail Adresi*"
                          class="form-control"
                          name="contact[email]"
                          v-model="email"
                        />
                      </div>
                      <div class="form-group">
                        <input
                          type="phone"
                          placeholder="Telefon*"
                          class="form-control"
                          name="contact[email]"
                          v-model="tel"
                        />
                      </div>

                      <div class="form-group">
                        <textarea
                          required
                          placeholder="Mesaj*"
                          v-model="mesaj"
                          name="contact[message]"
                        ></textarea>
                      </div>
                      <div class="form-group">
                        <button
                          type="button"
                          @click="setFeedbacks()"
                          class="tg-btn submit-now"
                        >
                          Gonder
                        </button>
                      </div>
                    </div>
                  </div>
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
import Swal from "sweetalert2";
import axios from "axios";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      ilt: {},
      isim: "",
      email: "",
      tel: "",
      mesaj: "",
    };
  },
  mounted() {
    this.getIletisim();
  },
  methods: {
    getIletisim() {
      axios
        .post("/public/tables/iletisim/1", {
          params: JSON.stringify({ column_set_id: 0 }),
        })
        .then((res) => {
          this.ilt = res.data.data.record;
        });
    },
    setFeedbacks() {
      axios
        .post("/public/tables/feedbacks/store", {
          name_surname: this.isim,
          email_basic: this.email,
          phone: this.tel,
          description: this.mesaj,
          column_set_id: 0,
        })
        .then((res) => {
          if (res.data.data.message == "success") {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Mesaj Başarıyla gönderildi",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            Swal.fire({
              position: "top-end",
              icon: "error",
              title: Object.values(res.data.data.errors)[0],
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
    },
  },
};
</script>

<style>
input {
  text-transform: none !important;
}
</style>
