<script setup>
import { RouterLink, RouterView } from 'vue-router';
import { useI18n } from 'vue-i18n';
import FooterContent from "./footer-content.vue";
import LanguageSwitcher from "./language-switcher.vue";


const { t } = useI18n();
</script>

<template>
  <div class="site-container">
    <header class="header">
      <div class="header-content">
        <div class="logo">
          <router-link to="/">
            <img src="/assets/logos/smilinglogo.png" class="logoimg" alt="Logo">
          </router-link>
        </div>

        <div class="nav-container">
          <nav class="buttons">
            <ul>
              <li><router-link to="/about">{{ t('nav.about') }}</router-link></li>
              <li><router-link to="/goals">{{ t('nav.goals') }}</router-link></li>
              <li><router-link to="/contact">{{ t('nav.contact') }}</router-link></li>
            </ul>
          </nav>

          <LanguageSwitcher />
        </div>
      </div>
    </header>

    <main class="main-content">
      <router-view />
    </main>

    <FooterContent />
  </div>
</template>

<style scoped>
.site-container {
  display: flex;
  flex-direction: column;
}

.main-content {
  flex-grow: 1;
  padding-top: 100px;
}

.header {
  background-color: #CDAC77;
  color: white;
  padding: 1rem 0;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  border-bottom: 8px solid #b68f50;
  z-index: 999;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.header a {
  font-family: "Dancing Script", cursive;
  font-size: 28px;
  color: white;
  text-decoration: none;
}

.logoimg {
  width: 70px;
  height: auto;
  transition: all 0.15s linear;
}

.logoimg:hover {
  transform: scale(1.1);
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.buttons ul {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 1rem;
  align-items: center;
}

.buttons ul li {
  display: inline-block;
}

.buttons ul li a {
  display: block;
  padding: 0.2rem 1rem;
  transition: all 0.1s linear;
  border-radius: 8px;
  color: rgb(0, 0, 0);
}

.buttons ul li a:hover {
  background: #b68f50;
  transform: scale(1.1);
  color: #ffffff;
}
</style>
