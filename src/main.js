import Vue from 'vue'
import Vuelidate from 'vuelidate'
import App from './App.vue'
import router from './router'
import store from './store'
import dateFilter from '@/filters/date.filter'
import messagePlugin from '@/utils/message.plugin'
import './registerServiceWorker'
import 'materialize-css/dist/js/materialize.min'

import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

Vue.config.productionTip = false

Vue.use(messagePlugin)
Vue.use(Vuelidate)
Vue.filter('date', dateFilter)


firebase.initializeApp({
  apiKey: "AIzaSyBFv5cppORXqqRAMDKNovWM5yzcvxWHlvQ",
  authDomain: "vuejs-crm-d455a.firebaseapp.com",
  projectId: "vuejs-crm-d455a",
  storageBucket: "vuejs-crm-d455a.appspot.com",
  messagingSenderId: "976936291782",
  appId: "1:976936291782:web:29ace790594a93a9ed36c7"
})

let app;

firebase.auth().onAuthStateChanged(() => {
  if (!app) {

  }
  app = new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app')
})



