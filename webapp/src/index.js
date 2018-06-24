import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',

  data: {
    content: [],
    message: '',
  },

  methods: {
    filter: function () {
      let category = document.getElementById('category')
      axios({
        method: 'POST',
        url: './api/news/filter',
        data: {
          category: category.value,
        },
        responseType: 'json'
      }).then(response => {
        app.content = response.data.content
        app.message = response.data.message
      })
    },
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
