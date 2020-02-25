/* eslint-disable no-new */
import Vue from 'vue'
import app from './App.vue'
import router from './router'
import store from './store'


new Vue({
    el:'#app',
    render:h=>h(app),
    router,
    store
})