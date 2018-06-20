import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let app = new Vue({
  el: '#app',
  data: {
    user: {},
    message: ''
  },
  methods: {
    submit: function () {
      this.message = ''
      if (!!!this.user.account || !!!this.user.password) {
        this.message = '账号或密码不能为空'
        return false
      }
      console.log(md5(this.user.password))
      axios({
        method: 'POST',
        url: './api/user/login',
        data: { account: this.user.account, password: md5(this.user.password) },
        responseType: 'json'
      }).then(response => {
        console.log(response.data.content)
        if (response.data.message === 200) {
          sessionStorage.setItem('auth', JSON.stringify(response.data.content))
          location.href = './user.html'
        } else {
          this.message = '账号或密码错误。'
        }
      })
    }
  }
})