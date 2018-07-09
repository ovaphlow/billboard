import navbar from './navbar.html'

document.getElementById('navbar').innerHTML = navbar

let auth = JSON.parse(sessionStorage.getItem('auth'))

let app = new Vue({
  el: '#app',

  data: {
    work: [],
    message: ''
  },

  methods: {
    remove: function (event) {
      this.message = ''

      axios({
        method: 'delete',
        url: './api/resume/work/' + event.target.getAttribute('data-uuid'),
        responseType: 'json'
      }).then(response => {
        if (response.data.message) {
          this.message = response.data.message
        } else {
          location.reload(true)
        }
      })
    }
  },

  created: function () {
    axios({
      method: 'get',
      url: './api/resume/user/' + auth.uuid + '/work/',
      responseType: 'json'
    }).then(response => {
      this.work = response.data.content
    })
  }
})