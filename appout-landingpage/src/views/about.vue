<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<template>

  <div class="page-container">
    <h1 class="title">{{ t('about.title') }}</h1>
    <p class="description">{{ t('about.description') }}</p>

    <div class="team">
      <div class="member">
        <img src="/src/assets/members/Giuliano.png" alt="Giuliano">
        <a>Giuliano Peláez</a>
      </div>
      <div class="member">
        <img src="/src/assets/members/Johnny.png" alt="Johnny">
        <a>Johnny Ojanama</a>
      </div>
      <div class="member">
        <img src="/src/assets/members/Aquino.png" alt="Aquino">
        <a>Daniel Aquino</a>
      </div>
      <div class="member">
        <img src="/src/assets/members/Carlos.png" alt="Carlos">
        <a>Carlos Paredes</a>
      </div>
      <div class="member">
        <img src="/src/assets/members/Juan.png" alt="Juan">
        <a>Juan Napa</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tus estilos están perfectos, no necesitan cambios */
.page-container {
  font-family: "Poppins", sans-serif;
  text-align: center;
  background-color: #FFF1D1;
  padding-bottom: 100px;
}

.title {
  margin-top: 40px;
  font-size: 60px;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  color: #000000;
}

.description {
  display: block;
  margin: 20px auto 60px auto;
  font-family: "Amatic SC", cursive;
  color: #000000;
  max-width: 600px;
  font-size: 28px;
  line-height: 1.6;
  margin-bottom: 90px;
}

.team {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 70px;
  margin-bottom: 100px;
}

.member {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000000;
}

.member img {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  border: 2px solid #ddd;
  transition: transform 0.3s ease;
}

.member img:hover {
  transform: scale(1.05);
}

.member a {
  margin-top: 12px;
  font-size: 28px;
  font-family: "Amatic SC", cursive;
}
</style>