import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',

  data: { resume: {},auth: {}, message: '', job: {} },

  methods: {
    sign: function () {
	  if(this.auth == null){
        app.message = '请登录用户'
	  }else{
      axios({
        method: 'post',
        url: './api/job/' + urlParameter('uuid') + '/user/',
        data: { user_uuid: this.auth.uuid },
        responseType: 'json'
      }).then(response => {
        if (response.data.message) {
          app.message = response.data.message
        } else {
          app.message = '签到成功。'
 
        }
      })
    }
  }
 },

  created: function () {
    this.auth = JSON.parse(sessionStorage.getItem('auth'))

    axios({
      method: 'get',
      url: './api/job/' + urlParameter('uuid'),
      responseType: 'json'
    }).then(response => {
      this.job = response.data.content
    })
  }

})
