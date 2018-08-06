import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar


let app = new Vue({
  el: '#app',

  data: { auth: {}, message: '', job: {} },

  methods: {
    submit: function () {
	  if(this.auth == null){
	  app.message = '请登录用户'
	  }else{
      axios({
        method: 'post',
        url: './api/job/judge',
        data: { 
          user_uuid: this.auth.uuid,
          job_uuid: urlParameter('uuid')
         },
        responseType: 'json'
      }).then(response => {
        console.log(response)
        if (response.data.message) {
          app.message = response.data.message
        } else {
          axios({
            method: 'post',
            url: './api/job/' + urlParameter('uuid') + '/user/',
            data: { user_uuid: this.auth.uuid },
            responseType: 'json'
          }).then(response => {
            console.log(response)
            if (response.data.message) {
              app.message = response.data.message
            } else {
              app.message = '简历投递成功。'
            }
          })
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