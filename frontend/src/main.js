import Vue from 'vue'
import App from './presentation/App.vue'
import store from './logic/store'
import Element from 'element-ui'
import englishLang from 'element-ui/lib/locale/lang/en'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Element, { locale: englishLang })

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
