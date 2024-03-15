import './assets/all.scss';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import * as AllRules from '@vee-validate/rules';
import router from './router';
import App from './App.vue';

Object.keys(AllRules).forEach((rule) => {
  defineRule(rule, AllRules[rule]);
});
configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true,
});
setLocale('zh_TW');
const app = createApp(App);

app.use(createPinia());
app.use(router);
app.component('VField', Field);
app.component('VForm', Form);
app.component('ErrorMessage', ErrorMessage);

app.mount('#app');
