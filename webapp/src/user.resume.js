import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

console.log('个人简历编辑页面')

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
        method:'POST',
        url:'/api/resume/'+ user.uuid +'/addResume',
        data:{
          name: this.resume.name,
          sex: this.resume.gender,
          birthday: this.resume.birthday,
          phone: this.resume.phone,
          e_mail: this.resume.email,
          adress: this.resume.adress= 'a',
        },
        responseType:'json'
      }).then(response => {
        if(response.data.status === 200){
          console.log('11111-------')
            location.href= './user.html'
        }else{
          alert(response.data.message)
        }
      })
    }
  }
})