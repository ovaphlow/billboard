import navbar from './navbar.html'

document.getElementById('navbar').innerHTML = navbar

let auth = JSON.parse(sessionStorage.getItem('auth'))

let app = new Vue({
  el: '#app',

  methods: {

  }


})