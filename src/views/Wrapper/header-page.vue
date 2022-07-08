<template>
  <div>
    <header id="tg-header" class="tg-header d-none d-md-block tg-haslayout">
      <div class="container">
        <div class="">
          <div class="row">
            <div class="tg-colhalf pull-right">
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
            </div>
            <div class="tg-colhalf">
              <ul class="tg-socialicons">
                <li>
                  <a href="#">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-google-plus"></i>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i class="fa fa-dribbble"></i>
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
                    ><img
                      :src="baseUrl + '_assets/images/logo.png'"
                      alt="image description"
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
                      <router-link to="/sahalar">Halı Sahalar</router-link>
                    </li>
                    <li>
                      <a href="#">Turnuvalar</a>
                      <ul class="tg-dropdown-menu">
                        <li v-for="t in turnuva_kategorileri" :key="t">
                          <router-link :to="'/turnuvalar/' + t.id">
                            {{ t.name_basic }}
                          </router-link>
                        </li>
                      </ul>
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
    <div class="mobile-header-collapse d-flex d-md-none">
      <button
        type="button"
        class="tg-btn px-4 m-4"
        style="height: min-content"
        @click="mobileMenu = !mobileMenu"
      >
        <i class="fa fa-bars"></i>
      </button>
      <div class="mobile-menu" v-if="mobileMenu == true">
        <div class="w-100 d-flex justify-content-end px-5 cursor-pointer">
          <h3 class="text-danger" @click="mobileMenu = false">X</h3>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/">Ana Sayfa</router-link>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/oneShot">One Shot</router-link>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <router-link to="/sahalar">Sahalar</router-link>
        </div>
        <div
          v-for="t in turnuva_kategorileri"
          :key="t"
          class="mobile-link"
          @click="mobileMenu = false"
        >
          <router-link :to="'/turnuvalar/' + t.id">
            {{ t.name_basic }}
          </router-link>
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
        <div class="mobile-link" @click="mobileMenu = false">
          <a href="javascript()" data-toggle="modal" data-target="#tg-login">Giriş</a>
        </div>
        <div class="mobile-link" @click="mobileMenu = false">
          <a href="javascript()" data-toggle="modal" data-target="#tg-register">Üye Ol</a>
        </div>
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
    };
  },
  created() {
    this.getTurnuvalar();
  },
  methods: {
    getTurnuvalar() {
      axios
        .post("public/tables/turnuva_kategorileri", {
          params: JSON.stringify({
            page: 1,
            limit: "10",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: {
              description: {
                type: 100,
                guiType: "text",
                filter: null,
              },
            },
          }),
        })
        .then((res) => {
          this.turnuva_kategorileri = res.data.data.records;
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
  background: rgba(0, 0, 0, 0.5);
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
  color: #ffcc33;
}
</style>
