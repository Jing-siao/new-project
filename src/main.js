import { createApp } from 'vue';
import {
  Field, Form, ErrorMessage, defineRule, configure,
} from 'vee-validate';

import { required, email, min } from '@vee-validate/rules';
import { localize, setLocale } from '@vee-validate/i18n';
import zhTW from '@vee-validate/i18n/dist/locale/zh_TW.json';
import App from './App.vue';
import router from './router';

defineRule('email', email);
defineRule('required', required);
defineRule('min', min);

configure({
  generateMessage: localize({ zh_TW: zhTW }),
  validateOnInput: true, // 調整為輸入字元立即進行驗證
});
setLocale('zh_TW');
const app = createApp(App).use(router);
app.component('Form', Form);
app.component('Field', Field);
app.component('ErrorMessage', ErrorMessage);
app.mount('#app');
