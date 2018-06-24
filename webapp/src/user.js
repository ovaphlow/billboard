import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',

  data: {
    user: {}
  },

  methods: {},

  created: function () {
    if (!!!sessionStorage.getItem('auth')) {
      location.href = './login.html'
      return false
    }

    this.user = JSON.parse(sessionStorage.getItem('auth'))
  }
})