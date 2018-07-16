import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',

  data: { content: [], message: '', },

  methods: {
  },

  created: function () {
    axios({
      method: 'GET',
      url: './api/job/',
      responseType: 'json'
    }).then(response => {
      if (response.data.message === 200) {
        this.content = response.data.content
      } else {
        this.message = '服务器异常。'
      }
    })
  }
})
