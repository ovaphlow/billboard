import navbar from './navbar.html'

document.getElementById('navbar').innerHTML = navbar


let user = JSON.parse(sessionStorage.getItem('auth'))

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
        method: 'POST',
        url: './api/resume/addEducation',
        data: {
          userId: user.uuid,
          school: this.resume.school,
          qualifications: this.resume.qualifications,
          intake: this.resume.intake,
          graduation_time: this.resume.graduation_time,
          major_name: this.resume.major_name
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