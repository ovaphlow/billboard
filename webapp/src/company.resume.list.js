//import navbar from './navbar.html'
//document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',

  data: { content: [], message: '', },

  methods: {
  },

  created: function () {
    let auth = JSON.parse(sessionStorage.getItem('authCompany'))
    axios({

      method: 'get',
      url: './api/resume/company/' + auth.uuid,
      responseType: 'json'
    }).then(response => {
      if (response.data.message) {
        this.message = response.data.message

      } else {
        this.content = response.data.content
      }
    })
  }
})
