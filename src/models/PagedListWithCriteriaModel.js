import Vue from 'vue'
import Vuex from 'vuex'
import PageStore from '../../src/stores/PageStore'
import Http from '../../src/util/Http'
import ObjPage from '../../src/util/ObjPage'

export default class PagedListWithCriteriaModel {
  constructor (url, pageSize, model) {
    let objPage = new ObjPage()
    objPage.pageSize = pageSize

    Vue.use(Vuex)
    let store = new PageStore(objPage)
    let http = new Http(url)
    objPage.http = http
    objPage.store = store

    model = model || {}
    this.model = model
    this.model.store = store
    this.model.http = http

    this.objPage = objPage
    objPage.model = model

    this.listModel = objPage.rows
    this.pagerModel = objPage
  }
}
