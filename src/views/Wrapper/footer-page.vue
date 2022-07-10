<template>
  <footer id="tg-footer" class="tg-footer tg-haslayout">
    <div class="tg-footerbar">
      <div class="container">
        <span class="tg-copyright">&copy; {{ date }} | Tüm hakları saklıdır.</span>
        <nav class="tg-footernav">
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
