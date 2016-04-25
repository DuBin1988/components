import Vue from 'vue'

export default class Http {
  constructor (url) {
    this.url = url
  }

  get (param, succeed, fail) {
    Vue.http.get(this.url + '?' + encodeURIComponent(param)).then(succeed, fail)
  }

  post (pageNo, pageSize, requestbody, succeed, fail) {
    Vue.http.post(this.url + '?pageNo=' + pageNo + '&pageSize=' + pageSize, JSON.stringify(requestbody)).then(succeed, fail)
  }

  npost (requestbody, succeed, fail) {
    Vue.http.post(this.url + '/n', JSON.stringify(requestbody)).then(succeed, fail)
  }
}
