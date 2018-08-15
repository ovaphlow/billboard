//import navbar from './navbar.html'
//document.getElementById('navbar').innerHTML = navbar

let user = JSON.parse(sessionStorage.getItem('auth'))

let app = new Vue({
  el: '#app',

  data: {
    resume: {},
    message:''
  },

  methods: {},

  created: function () {
    axios({
      method: 'get',
      url: './api/resume/user/'+ user.uuid,
      responseType:'json'
    }).then(response => {
      app.resume = response.data.content || {}
    })
  }
})