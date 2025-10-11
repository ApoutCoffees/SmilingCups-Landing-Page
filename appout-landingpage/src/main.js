import { createApp } from 'vue';
import App from './App.vue';
import router from './router/router';
import i18n from './i18n.js';


import PrimeVue from 'primevue/config';
import SelectButton from 'primevue/selectbutton';
import Material from '@primeuix/themes/material';
import 'primeicons/primeicons.css';

const app = createApp(App);

app.use(router);
app.use(i18n);

app.use(PrimeVue, { theme: { preset: Material }, ripple: true });

app.component('pv-select-button', SelectButton);

app.mount('#app');