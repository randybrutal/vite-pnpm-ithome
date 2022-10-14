import { createApp } from 'vue'
import './styles/index.scss';
import App from './App.vue'
import router from './router'
import Vuesax from 'vuesax3';
import 'vuesax3/dist/vuesax.css';

const app = createApp(App);
app.use(router);
app.use(Vuesax, {

});
// App.use(router);

app.mount('#app');
