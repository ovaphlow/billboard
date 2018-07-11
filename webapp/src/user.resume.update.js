import navbar from './navbar.html'
import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from 'constants';
document.getElementById('navbar').innerHTML = navbar

let user = JSON.parse(sessionStorage.getItem('auth'))

let app = new Vue({
  el: '#app',

  data: {
    auth: {},
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
        method: 'put',
        url: './api/resume/user/'+ this.auth.uuid,
        data: {
          category: this.resume.category || '',
          name: this.resume.name || '',
          gender: this.resume.gender || '',
          birthday: this.resume.birthday || '',
          degree: this.resume.degree || '',
          major: this.resume.major || '',
          phone: this.resume.phone || '',
          email: this.resume.email || '',
          province: document.getElementById('province').options[document.getElementById('province').options.selectedIndex].text,
          city: document.getElementById('city').options[document.getElementById('city').options.selectedIndex].text
        },
        responseType:'json'
      }).then(response => {
        if(response.data.message){
          this.message = response.data.message
        } else {
          location.href= './user.resume.html'
        }
      })
    }
  },

  created: function () {
    let auth = JSON.parse(sessionStorage.getItem('auth'))

    this.resume.province = ''
    this.resume.city = ''
    this.auth = auth

    axios({
      method: 'get',
      url: './api/resume/user/' + auth.uuid,
      responseType: 'json'
    }).then(response => {
      this.resume = response.data.content
    })

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