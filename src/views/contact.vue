<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="page-container">
    <h1 class="title">{{ t('contact.title') }}</h1>
    <p class="description">{{ t('contact.description') }}</p>
    <div class="contact">
      <div class="contact-method">
        <a href="https://www.instagram.com" target="_blank">
          <img src="/assets/logos/Insta-logo.png" alt="Instagram">
        </a>
        <a>Instagram</a>
      </div>
      <div class="contact-method">
        <a href="https://mail.google.com" target="_blank">
          <img src="/assets/logos/Gmail-logo.png" alt="Gmail">
        </a>
        <a>Gmail</a>
      </div>
      <div class="contact-method">
        <a href="https://twitter.com" target="_blank">
          <img src="/assets/logos/X-logo.png" alt="Twitter">
        </a>
        <a>X</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tus estilos no cambian */
.page-container {
  color: rgb(0, 0, 0);
  font-family: "Poppins", sans-serif;
  text-align: center;
  background-color: #FFF1D1;
  padding-bottom: 100px;
}
.title {
  margin-top: 30px;
  font-size: 60px;
  font-weight: bold;
  font-family: 'Trebuchet MS', sans-serif;
}
.description {
  display: block;
  margin: 20px auto 60px auto;
  max-width: 600px;
  font-family: "Amatic SC", cursive;
  font-size: 28px;
  line-height: 1.6;
  margin-bottom: 90px;
}
.contact {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 70px;
  margin-bottom: 100px;
}
.contact-method {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.contact-method img {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  border: 2px solid #ddd;
  transition: transform 0.3s ease;
}
.contact-method img:hover {
  transform: scale(1.05);
}
.contact-method a {
  margin-top: 12px;
  font-family: "Amatic SC", cursive;
  font-size: 28px;
  text-decoration: none;
  color: #000;
}
</style>
