import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',

  data: { resumelist: [], message: '', },

  methods: {
  },

  created: function () {
    axios({
      method: 'GET',
      url: './api/job/',   //后端的地址
      responseType: 'json'
    }).then(response => {
      if (response.data.message === 200) {
        this.resumelist = response.data.resumelist
      } else {
        this.message = '服务器异常。'
      }
    })
  }
})
