<script setup>
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="page-container">
    <h1 class="title">{{ t('goals.title') }}</h1>
    <p class="description">{{ t('goals.description') }}</p>
    <div class="goals">
      <div class="goal-item">
        <img src="/assets/goals/goal1.jpg" alt="Goal 1">
        <span class="goal-text">{{ t('goals.item1') }}</span>
      </div>
      <div class="goal-item">
        <img src="/assets/goals/goal2.jpg" alt="Goal 2">
        <span class="goal-text">{{ t('goals.item2') }}</span>
      </div>
      <div class="goal-item">
        <img src="/assets/goals/goal3.jpg" alt="Goal 3">
        <span class="goal-text">{{ t('goals.item3') }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Tus estilos no cambian */
.page-container {
  color: rgb(0, 0, 0);
  font-family: "Amatic SC", cursive;
  text-align: center;
  background-color: #FFF1D1;
  padding-bottom: 100px;
}
.title {
  margin-top: 28px;
  font-size: 60px;
  font-weight: bold;
  font-family: 'Trebuchet MS', sans-serif;
}
.description {
  display: block;
  margin: 20px auto 60px auto;
  max-width: 600px;
  line-height: 1.6;
  margin-bottom: 90px;
  font-size: 28px;
}
.goals {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 70px;
  margin-bottom: 100px;
}
.goal-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
}
.goal-item img {
  width: 210px;
  height: 210px;
  border-radius: 50%;
  border: 2px solid #ddd;
  transition: transform 0.3s ease;
}
.goal-item img:hover {
  transform: scale(1.05);
}
.goal-text {
  margin-top: 15px;
  font-size: 28px;
  line-height: 1.4;
  font-weight: 400;
}
</style>
