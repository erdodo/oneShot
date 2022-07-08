<template>
  <footer id="tg-footer" class="tg-footer tg-haslayout">
    <div class="tg-footerbar">
      <div class="container">
        <span class="tg-copyright">&copy; {{ date }} | Tüm hakları saklıdır.</span>
        <nav class="tg-footernav">
          <ul>
            <li><a href="#">Main</a></li>
            <li><a href="#">Team</a></li>
            <li><a href="#">Buy Tickets</a></li>
            <li><a href="#">Match Results</a></li>
            <li><a href="#">Upcoming Matches</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
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
