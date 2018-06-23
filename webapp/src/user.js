import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let auth = JSON.parse(sessionStorage.getItem('auth'))

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
    axios({
      method: 'GET',
      url: './api/user/' + auth.uuid,
      responseType: 'json'
    }).then(response => {
      this.user = response.data.content[0]
    })
  }
})