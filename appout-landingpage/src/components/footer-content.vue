<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <footer class="footer">
    <div class="footer-content">
      <p class="footer-text">{{ t('foot.copyright') }}</p>
      <div class="socials">
        <a href="https://www.instagram.com" target="_blank" title="Instagram">{{ t('foot.instagram') }}</a>
        <a href="https://twitter.com" target="_blank" title="X">{{ t('foot.twitter') }}</a>
        <a href="https://mail.google.com" target="_blank" title="Gmail">{{ t('foot.gmail') }}</a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: #CDAC77;
  border-top: 8px solid #b68f50;
  color: white;
  text-align: center;
  padding: 1rem 1rem;
  font-family: "Amatic SC", cursive;
  position: relative;
  z-index: 10;
}

.footer-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.footer-text {
  font-size: 1.5rem;
  margin: 0;
}

.socials {
  display: flex;
  gap: 2rem;
}

.socials a {
  color: white;
  font-size: 1.3rem;
  text-decoration: none;
  transition: all 0.3s ease;
}

.socials a:hover {
  color: #FFF1D1;
  transform: scale(1.1);
}
</style>