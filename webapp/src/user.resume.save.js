import navbar from './navbar.html'
document.getElementById('navbar').innerHTML = navbar

let user = JSON.parse(sessionStorage.getItem('auth'))

let app = new Vue({
  el: '#app',

  data: {
    resume: {},
    misc: {},
    message: ''
  },

  methods: {
    changeProvince: function() {
      document.getElementById('city').innerHTML = ''
      document.getElementById('city').options.add(new Option('未选择', ''))

      for (let key in this.misc.region) {
        if (key.substr(0, 2) === document.getElementById('province').value.substr(0, 2) && key.substr(2, 4) !== '0000') {
          if (document.getElementById('province').options[document.getElementById('province').options.selectedIndex].text.indexOf('市') !== -1) {
            document.getElementById('city').options.add(new Option(this.misc.region[key], key))
          } else {
            if (key.substr(4, 2) === '00') {
              document.getElementById('city').options.add(new Option(this.misc.region[key], key))
            }
          }
        }
      }
    },

    submit: function() {
      this.message = ''

      axios({
        method: 'post',
        url: './api/resume/'+ user.uuid +'/',
        data: {
          name: this.resume.name || '',
          gender: this.resume.gender || '',
          birthday: this.resume.birthday || '',
          phone: this.resume.phone || '',
          email: this.resume.email || '',
          province: this.resume.province || '',
          city: this.resume.city || ''
        },
        responseType:'json'
      }).then(response => {
        if(response.data.message){
          this.message = response.data.message
        }else{
          location.href= './user.html'
        }
      })
    }
  },

  created: function () {
    this.resume.province = ''
    this.resume.city = ''

    axios({
      method: 'GET',
      url: './assets/data/region.json',
      responseType: 'json'
    }).then(response => {
      this.misc.region = response.data
      for (let key in response.data) {
        if (key.substr(2, 4) === '0000') {
          document.getElementById('province').options.add(new Option(response.data[key], key))
        }
      }
    })
  }
})