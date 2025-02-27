import { createApp } from 'vue'
import App from './App.vue'
import Loader from './components/Utlis/loader.vue'

import Header from './components/header/Header.vue';

const app =  createApp(App);

app.component('app-header',Header);
app.component('app-loader',Loader);
app.mount('#app')