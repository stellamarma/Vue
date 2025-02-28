import { createApp } from 'vue'
import App from './App.vue'
import Loader from './components/Utlis/loader.vue'
import ToastPlugin from 'vue-toast-notification';
// Import one of the available themes
//import 'vue-toast-notification/dist/theme-default.css';
import 'vue-toast-notification/dist/theme-bootstrap.css';
import Header from './components/header/Header.vue';

const app =  createApp(App);

app.component('app-header',Header);
app.component('app-loader',Loader);
app.use(ToastPlugin)
app.mount('#app')