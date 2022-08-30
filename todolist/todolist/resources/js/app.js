require('./bootstrap');
require('popper.js');


import Vue from 'vue'
import App from './components/app.vue'


const app = new Vue({
el:'#app',
components:{App}
})

import { createApp } from 'vue'
export const eventBus = createApp(App)
createApp(App).mount('#app')

mix.js('resources/js/app.js', 'public/js')
    .vue()
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]).vue();