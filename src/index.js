import Vue from 'vue'
import App from './app'

new Vue({
  el: '#app',
  ...App
})

if (module.hot) {
  module.hot.accept()
}
