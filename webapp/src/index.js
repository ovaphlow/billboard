import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',
  data: {
    content: [],
    message: '',
  },
  methods: {
    filter: () => {
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
    favorite: event => {
      axios({
        method: 'POST',
        url: './api/user/favorite',
        data: {
          item: event.target.getAttribute('data-uuid'),
          user: localStorage.getItem('auth'),
          type: '招聘'
        },
        responseType: 'json'
      }).then(response => {
        if (response.data.status === 200) {
          event.target.innerHTML = '<i class="fa fa-heart"></i> ' +
              (parseInt(event.target.textContent.trim()) + 1)
        }
      })
    },
    reply: event => {
      window.console.log(event.target.textContent.trim())
      window.console.log(event.target.getAttribute('data-uuid'))
    }
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
