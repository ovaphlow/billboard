import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',

  data: { auth: {}, message: '', job: {} },

  methods: {},

  created: function () {
    this.auth = JSON.parse(sessionStorage.getItem('auth'))

    axios({
      method: 'get',
      url: './api/job/' + urlParameter('uuid'),
      responseType: 'json'
    }).then(response => {
      this.job = response.data.content
    })
  }
})