//import navbar from './navbar.html'

//document.getElementById('navbar').innerHTML = navbar

let auth = JSON.parse(sessionStorage.getItem('auth'))

let app = new Vue({
  el: '#app',

  data: {
    work: {},
    message: ''
  },

  methods: {
    submit: function () {
	  this.message='';

      axios({
        method: 'post',
        url: './api/resume/' + sessionStorage.getItem('resume') + '/career',
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
        else location.href = './user.resume.html'
      })
    }
  },

  created: function () {}
})