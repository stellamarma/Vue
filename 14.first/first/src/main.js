import { createApp } from 'vue'
import App from './App.vue'
//global
import Header from './components/header_footer/Header.vue';
import Footer from './components/header_footer/Footer.vue';

const app=createApp(App);

app.component('app-header',Header)//('name',what the name that we import)
app.component('app-footer',Footer)

app.mount('#app')
