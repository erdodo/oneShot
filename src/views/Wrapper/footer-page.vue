<template>
  <footer id="tg-footer" class="tg-footer tg-haslayout">
    <div class="tg-footerbar">
      <div class="container">
        <span class="tg-copyright pb-2">&copy; {{ date }} | Tüm hakları saklıdır.</span>
        <nav class="tg-footernav pb-2">
          <ul>
            <li><router-link to="/">Ana Sayfa</router-link></li>
            <li><router-link to="/sahalar">Sahalar</router-link></li>
            <li><router-link to="/iletisim">İletişim</router-link></li>
            <li><router-link to="/blog">Blog</router-link></li>
            <li><router-link to="/galeri">Galeri</router-link></li>
          </ul>
        </nav>
      </div>
    </div>
    <div class="tg-footerbar">
      <div class="container">
        <nav class="tg-footernav pb-2">
          <ul>
            <li><router-link class="text-warning" to="/">Hakkımızda</router-link></li>
            <li>
              <router-link class="text-warning" to="/">Katılım şartları</router-link>
            </li>
            <li><router-link class="text-warning" to="/">Hedeflerimiz</router-link></li>
            <li><router-link class="text-warning" to="/">KVKK</router-link></li>
            <li>
              <router-link class="text-warning" to="/"
                >Uzak Mesafeli Sözleşme</router-link
              >
            </li>
            <li>
              <router-link class="text-warning" to="/">Kamuoyu Bilgilendirme</router-link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      baseUrl: process.env.BASE_URL,
      date: new Date().getFullYear(),
    };
  },
};
</script>

<style></style>
