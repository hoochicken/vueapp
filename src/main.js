// import axios from './plugins/axios';
import { createApp } from 'vue';
import App from './App.vue';
import router from "./router";
import 'mdb-vue-ui-kit/css/mdb.min.css';
// import 'mdb-vue-ui-kit/css/mdb.dark.min.css';
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
// import Qlletter from '@/components/general/Qlletter.vue' // <= THIS WORKED

// todo: das hier muesste aus via dotenv aus den .env geholt werden
// let url = `http://${process.env.API_HOST}`;

let url = `http://php69.localhost/`;
axios.defaults.baseURL = url;

app.axios = axios;
app.use(VueAxios, axios)
app.use(router)

/* FONT AWESOME I */
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import specific icons */
import { faUserSecret, faCake, faList, faChessPawn, faClose } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faUserSecret, faCake, faList, faChessPawn, faClose)


import Vue3ChartJs from "@j-t-mcc/vue3-chartjs"
app.component('vue3-chart-js', Vue3ChartJs)

/* FONT AWESOME II */
/* import font awesome icon component */
/* add font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
app.component('font-awesome-icon', FontAwesomeIcon)

import CircleSpin from 'vue-loading-spinner/src/components/Circle.vue'
app.component('loading-spinner', CircleSpin)

app.config.productionTip = false

app.exports = {
    chainWebpack: config => {
        config.module
            .rule('raw')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    }
}

app.mount('#app')
