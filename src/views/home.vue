<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="page-container">
    <div class="present">
      <div class="container">
        <h1 class="title">Smiling Cups</h1>
      </div>
      <p class="smilingcups">
        {{ t('home.subtitle') }}
      </p>
      <img src="/src/assets/background/smilingcup.png" class="HomeImage" alt="Smiling Cup">
    </div>
  </div>
</template>

<style scoped>
/* Tus estilos no cambian */
.page-container {
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
}
.page-container::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #FFF1D1;
  z-index: -1;
}
.title {
  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  color: #000;
  animation: bounceLoop 2.5s ease-in-out infinite;
}
.container {
  display: flex;
  justify-content: left;
  padding-top: 18rem;
  padding-left: 20rem;
}
.smilingcups {
  padding-left: 20rem;
  border-radius: 20px;
  max-width: 500px;
  font-family: "amatic sc", cursive;
  font-size: 2rem;
  color: rgb(0, 0, 0);
  animation: fadeInDowm 0.5s ease-in-out;
}
.present {
  position: relative;
  flex: 1;
}
.HomeImage {
  position: absolute;
  top: 18rem;
  right: 15rem;
  width: 300px;
  height: auto;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.HomeImage:hover {
  transform: translateY(-20px) scale(1.4) rotate(30deg);
}
@keyframes bounceLoop {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}
@keyframes fadeInDowm {
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>