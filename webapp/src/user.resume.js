import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let user = JSON.parse(sessionStorage.getItem('auth'))
let app = new Vue({
  el: '#app',
  data: {
    resume: {}
  },
  methods: {},
  created: function () {
    axios({
      methos:'POST',
      url:'/api/user1/' + user.id + '/resume',
      data:{
        name: this.resume.name,
        sex: this.resume.gender,
        sex: this.resume.birthday,
        phone: this.resume.phone,
        e_mail: this.resume.email,
        adress: this.resume.adress= 'a',
      },
      responseType:'json'
    }).then(function(){
      if(response.data.message === 200){
          location.href= './user.html'
      }else{
        alert(response.data.message)
      }
    })
  }
})