import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons} from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import AOS from 'aos'
import "aos/dist/aos.css"
Vue.use(BootstrapVueIcons)
Vue.use(BootstrapVue)
Vue.config.productionTip = false
Vue.use(VueRouter)



import Main from '@/views/Main.vue'
import About from '@/components/About.vue'
const routes = [
  { path: '/', component: Main,children: [
    { path: '/about', component: About, name: 'About'},
  ]},
  
]
const router = new VueRouter({
  mode:'history',
  routes,
  scrollBehavior (to, savedPosition) {
    if(savedPosition) {
      return savedPosition
    }
    if(to.hash) {
      return {selector:to.hash,behavior: 'smooth',}
    }
    return {x:0,y:700}
  }
})

new Vue({
  created() {
    AOS.init()
  },
  router,
  render: h => h(App),
}).$mount('#app')
