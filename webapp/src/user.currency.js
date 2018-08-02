import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',

  data: {
    currency: '60', 
    message: '', 
  },

  methods: {
    
  }
})
