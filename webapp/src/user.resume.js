import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

console.log('个人简历编辑页面')

let app = new Vue({
  el: '#app',
  data: {
    resume: {}
  },
  methods: {},
  created: function () {
    this.resume.name = '测试测试'
  }
})