import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

console.log('个人简历编辑页面')

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
        name: this.resume.name
      },
      responseType:'json'
    }).then(function(){
      console.log()
    })
  }
})