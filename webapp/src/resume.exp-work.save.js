import navbar from './navbar.html'

document.getElementById('navbar').innerHTML = navbar

let auth = JSON.parse(sessionStorage.getItem('auth'))

let app = new Vue({
  el: '#app',

  data: {
    work: {},
    message: ''
  },

  methods: {
    submit: function () {
      axios({
        method: 'post',
        url: './api/resume/user/' + auth.uuid + '/work/',
        data: {
          company: this.work.company || '',
          title: this.work.title || '',
          salary: this.work.salary || '',
          duty: this.work.duty || '',
          begin: this.work.begin || '',
          end: this.work.end || ''
        },
        responseType: 'json'
      }).then(response => {
        if (response.data.message) this.message = response.data.message
        else location.href = './resume.exp-work.html'
      })
    }
  },

  created: function () {}
})