import Vue from 'vue'
import App from './App.vue'
import VueCompositionApi from '@vue/composition-api'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './index.scss'
import VueVirtualScroller from 'vue-virtual-scroller'
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css'

Vue.use(ElementUI)
Vue.use(VueCompositionApi)
Vue.use(VueVirtualScroller)

Vue.config.productionTip = false
new Vue({
  render: h => h(App)
}).$mount('#app')
