import navbar from './navbar.html'

document.getElementById('navbar').innerHTML = navbar

let user = JSON.parse(sessionStorage.getItem('auth'))

let app1 = new Vue({
  el: '#app1',
  data: {
    resume:{},
    message:''
  },
  methods: {
    submit: function(){
      this.message = ''
      axios({
        method: 'POST',
        url: './api/resume/addWord',
        data: {
          userId: user.uuid,
          company_name: this.resume.company_name,
          station: this.resume.station,
          hiredate: this.resume.hiredate,
          leavedate: this.resume.leavedate,
          income: this.resume.income
        },
        responseType: 'json'
      }).then(res => {
        if(res.data.status === 200){
            location.href = 'user.resume.html'
        }else{
          alert(res.data.message)
        }
      })
    }
  }
})