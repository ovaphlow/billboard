import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let user = JSON.parse(sessionStorage.getItem('auth'))
let app = new Vue({
  el: '#app',

  data: {
    resume: {},
    message:''
  },

  methods: {
    submit: function () {
      this.message='';
      axios({
        method: 'POST',
        url: '/api/resume/'+ user.uuid +'/addResume',
        data:{
          name: this.resume.name,
          gender: this.resume.gender,
          birthday: this.resume.birthday,
          phone: this.resume.phone,
          email: this.resume.email,
          privince: this.resume.province,
          city: this.resume.city
        },
        responseType:'json'
      }).then(response => {
        if(response.data.status === 200){
            location.href= './user.html'
        }else{
          message = response.data.message
        }
      })
    }
  },

  created: function () {

  }
})