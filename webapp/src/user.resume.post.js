import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',

  data: { auth: {}, message: '', jobList: [] },

  methods: {},

  created: function () {
    this.auth = JSON.parse(sessionStorage.getItem('auth'))

    axios({
      method: 'get',
      url: './api/resume/user/' + this.auth.uuid + '/post',
      responseType: 'json'
    }).then(response => {
      this.jobList = response.data.content
    })
  }
})