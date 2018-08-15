let app = new Vue({
  el: '#app',

  data: { content: [], message: '', },

  methods: {
    filter: function () {
      let category = document.getElementById('category')
      axios({
        method: 'get',
        url: './api/job/category/' + category.value,
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
      this.content = response.data.content 
    })
  }
})
