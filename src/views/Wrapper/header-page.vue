<template>
  <div>
    <header id="tg-header" class="tg-header d-none d-md-block tg-haslayout">
      <div class="container">
        <div class="">
          <div class="row">
            <!--div class="tg-colhalf pull-right">
              <nav class="tg-addnav">
                <ul>
                  <li>
                    <a href="javascript()" data-toggle="modal" data-target="#tg-login"
                      >Giriş</a
                    >
                  </li>
                  <li>
                    <a href="javascript()" data-toggle="modal" data-target="#tg-register"
                      >Üye Ol</a
                    >
                  </li>
                </ul>
              </nav>
            </!--div-->
            <div class="tg-colhalf">
              <ul class="tg-socialicons">
                <li>
                  <a :href="ilt.facebook">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a :href="ilt.twitter">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a :href="ilt.instagram">
                    <i class="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a :href="'mailto:' + ilt.email_basic">
                    <i class="fa fa-envelope-o"></i>
                  </a>
                </li>
                <li>
                  <a :href="'tel:' + ilt.phone">
                    <i class="fa fa-phone"></i>
                  </a>
                </li>
              </ul>
            </div>

            <nav id="tg-nav" class="tg-nav brand-center">
              <div class="navbar-header">
                <button
                  type="button"
                  class="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#tg-navigationm-mobile"
                >
                  <i class="fa fa-bars"></i>
                </button>
                <strong class="tg-logo">
                  <a href="/"
                    ><img src="@/assets/one-shot.png" alt="image description"
                  /></a>
                </strong>
              </div>
              <div id="tg-navigation" class="tg-navigation">
                <div class="tg-colhalf">
                  <ul>
                    <li class="">
                      <router-link to="/">Ana Sayfa</router-link>
                    </li>

                    <li>
                      <router-link to="/one-shot">Hakkında</router-link>
                    </li>
                    <li>
                      <router-link to="/turnuvalar/1">Yurt İçi Turnuvalar</router-link>
                    </li>
                    <li>
                      <router-link to="/turnuvalar/3">Yurt Dışı Organizasyon</router-link>
                    </li>
                    <li>
                      <router-link to="/turnuvalar/2">Halı Saha Ligleri</router-link>
                    </li>
                  </ul>
                </div>
                <div class="tg-colhalf">
                  <ul>
                    <!--li>
                                            <a href="#">team</a>
                                            <ul class="tg-dropdown-menu">
                                                <li><a href="playergrid-v1.html">playergrid-v1</a></li>
                                                <li><a href="playergrid-v2.html">playergrid-v2</a></li>
                                                <li><a href="playerdetail.html">playergrid detail</a></li>
                                            </ul>
                                        </!--li-->
                    <li>
                      <router-link to="/sponsorlar">Sponsorlar</router-link>
                    </li>
                    <li>
                      <router-link to="/iletisim">İletişim</router-link>
                    </li>
                    <li>
                      <router-link to="/blog">Blog</router-link>
                    </li>
                    <li>
                      <router-link to="/galeri">Galeri</router-link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <div class="mobile-header-collapse d-flex justify-content-between w-100 d-md-none">
      <button
        type="button"
        class="tg-btn px-4 rounded m-4"
        style="height: min-content"
        @click="mobileMenu = !mobileMenu"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div class="mobile-logo">
        <img src="@/assets/one-shot.png" alt="image description" />
      </div>
      <div class="mobile-menu" v-if="mobileMenu == true">
        <div class="w-100 d-flex justify-content-end px-5 cursor-pointer">
          <h3 class="text-danger" @click="mobileMenu = false">X</h3>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/">Ana Sayfa</router-link>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/one-shot">Hakkında</router-link>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/turnuvalar/1">Yurt İçi Turnuvalar</router-link>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/turnuvalar/3">Yurt Dışı Organizasyon</router-link>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/turnuvalar/2">Halı Saha Ligleri</router-link>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/sponsorlar">Sponsorlar</router-link>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/iletisim">İletişim</router-link>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/blog">Blog</router-link>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/galeri">Galeri</router-link>
        </div>
        <!--div class="mobile-link" @click="mobileMenu = false">
          <a href="javascript()" data-toggle="modal" data-target="#tg-login">Giriş</a>
        </!--div>
        <div-- class="mobile-link" @click="mobileMenu = false">
          <a href="javascript()" data-toggle="modal" data-target="#tg-register">Üye Ol</a>
        </div-->
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      turnuva_kategorileri: [],
      mobileMenu: false,
      ilt: {},
    };
  },
  created() {
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
  },
};
</script>

<style>
.mobile-header-collapse {
  position: absolute;
  z-index: 20;
}
.mobile-header-collapse .collapse {
  position: absolute;
  z-index: 3;
}
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding-top: 30px;
  background: rgba(0, 0, 0, 0.7);
}
.mobile-link {
  background: rgb(115, 12, 43, 0.8);
  padding: 10px;
  border-radius: 7px;
  margin: 15px;
  height: min-content;
  font-size: 18px;
  cursor: pointer;
}
.mobile-link a {
  color: white;
}
.mobile-link:hover a {
  color: rgb(223, 31, 36);
}
.tg-header a {
  font-weight: 500;
}
.mobile-logo {
  width: 90px;
}
</style>
