<template>
  <div class="" :class="getLogin ? 'show in fade tg-modalbox modal' : 'd-none'" id="tg-login" tabindex="-1"
    role="dialog" @click="modalClick()">
    <span class="text-danger cursor-pointer h2" style="position: absolute; right: 10vw; top: 5vh">X</span>
    <div class="d-flex justify-content-center align-items-center h-100" style="padding: 50px">
      <div @click="icerikClickState = true" class="card p-5" style="width:300px">
        <div class="card-body">
          <div class="px-5">
            <img src="@/assets/one-shot.png" alt="">
          </div>
          <div class="my-3">
            <label for="">Eposta</label>
            <input type="text" class="form-control" v-model="email">
          </div>
          <div class="öy-3">
            <label for="">Şifre</label>
            <input type="text" class="form-control" v-model="password">
          </div>
          <div class="d-flex justify-content-end my-3">
            <button class="btn tg-btn" @click="giris()">Giriş</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      data: {},
      popupState: false,
      icerikClickState: false,
      email: '',
      password: '',
    };
  },
  computed: {
    ...mapGetters(['getLogin'])
  },
  methods: {
    getImage(img) {
      if (img == undefined || img == "[]") {
        return null;
      } else {
        return (
          this.imgUrl +
          JSON.parse(img)[0].destination_path +
          "/b_" +
          JSON.parse(img)[0].file_name
        );
      }
    },
    modalClick() {
      if (this.icerikClickState == false) {
        this.$store.commit('setLogin', false)
      }
      this.imgClick = false;
    },
    giris() {
      axios.post('/login', {
        email: this.email,
        password: this.password
      }).then(res => {
        localStorage.setItem('token', JSON.stringify({
          data: res.data.data.token,
          startTime: new Date(),
          timeOut: 432000000
        }))
        window.location.href('/admin/')
      })
    }
  },
};
</script>

<style>
</style>
