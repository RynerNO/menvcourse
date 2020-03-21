import Vue from 'vue';

import Main from './pages/Main.vue';

import './styles/main.css';

import router from './router';

import Router from 'vue-router';

import TextInput from '@components/TextInput.vue';

import Button from '@components/Button.vue';

import Loader from '@components/Loader.vue';
import authMixin from '@mixins/auth'

import flashMixin from '@mixins/flash'

import {
  ValidationProvider,
  extend,
  ValidationObserver,
  localize
} from 'vee-validate';

import { required, email, min } from 'vee-validate/dist/rules';

import ru from 'vee-validate/dist/locale/ru.json';

import store from '@store';

Vue.use(Router);

Vue.component('text-input', TextInput);
Vue.component('validation-provider', ValidationProvider);
Vue.component('validation-observer', ValidationObserver);
Vue.component('loader', Loader);
Vue.component('btn', Button);

Vue.mixin(authMixin)
Vue.mixin(flashMixin)

extend('email', email);
extend('required', required);
extend('min', min);

localize('ru', ru);
const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(Main)
});
