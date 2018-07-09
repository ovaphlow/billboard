import navbar from './navbar.html'

document.getElementById('navbar').innerHTML = navbar

let auth = JSON.parse(sessionStorage.getItem('auth'))

let app = new Vue({
  el: '#app',

  data: {
    resume: {},
    message: ''
  },

  methods: {
    submit: function () {
      this.message='';

      axios({
        method: 'post',
        url: './api/resume/' + sessionStorage.getItem('resume') + '/education',
        data: {
          school: this.resume.school || '',
          major: this.resume.major || '',
          degree: this.resume.degree || '',
          begin: this.resume.begin || '',
          end: this.resume.end || ''
        },
        responseType: 'json'
      }).then(response => {
        if(response.data.message){
          this.message = response.data.message
        }else{
          location.href = 'user.resume.html'
        }
      })
    }
  },
})