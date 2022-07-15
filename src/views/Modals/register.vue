<template>
  <div
    class=""
    :class="popupState ? 'show in fade tg-modalbox modal' : 'd-none'"
    id="tg-login"
    tabindex="-1"
    role="dialog"
    @click="modalClick()"
  >
    <span
      class="text-danger cursor-pointer h2"
      style="position: absolute; right: 10vw; top: 5vh"
      >X</span
    >
    <div class="d-flex justify-content-center align-items-center" style="padding: 50px">
      <img
        @click="imgClick = true"
        v-if="popup?.[0] != undefined"
        :src="getImage(popup?.[0].image)"
        style="max-height: 90vh; max-width: 90vw"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      data: {},
      popupState: false,
      imgClick: false,
    };
  },
  created() {
    this.getPopup();
  },
  methods: {
    getPopup() {
      axios
        .post("public/tables/popup", {
          params: JSON.stringify({
            page: 1,
            limit: "10",
            column_array_id: "0",
            column_array_id_query: "0",
            sorts: {},
            filters: {},
          }),
        })
        .then((res) => {
          this.popup = res.data.data.records;

          this.popupState = res.data.data.all_records_count > 0;
        });
    },
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
      if (this.imgClick == false) {
        this.popupState = false;
      } else {
        window.open(this.popup?.[0].url);
      }
      this.imgClick = false;
    },
  },
};
</script>

<style></style>
