import Vuex from 'vuex'

export default class PageStore extends Vuex.Store {
  constructor (objPage) {
    super({
      state: {
        objPage: objPage
      },

      mutations: {
        CRITERIA_CHANGED (state) {
          state.objPage.model.error = '测试'
          state.objPage.model.hasError = true
          state.objPage.http.npost(state.objPage.http.condition, function (response) {
            if (response.data.n === 0) {
              state.objPage.totalPage = 0
              return
            }
            state.objPage.totalPage = response.data.n / state.objPage.pageSize | 0 + 1
            state.objPage.http.post(1, state.objPage.pageSize, state.objPage.http.condition, function (response) {
              state.objPage.refresh(response.data)
            }, function (response) {
              state.objPage.model.hasError = true
              state.objPage.model.error = '提取数据出错，请重试'
              console.log('提取数据出错，请重试')
            })
          }, function (response) {
            state.objPage.model.hasError = true
            state.objPage.model.error = '提取数据出错，请重试'
            console.log('提取数据出错，请重试')
          })
        },

        PAGE_CHANGED (state) {
          state.objPage.model.error = null
          state.objPage.model.hasError = false
          if (state.objPage.totalPage === 0) {
            return
          }
          state.objPage.pageIndex = Math.max(1, Math.min(state.objPage.pageIndex, state.objPage.totalPage))
          state.objPage.http.post(state.objPage.pageIndex, state.objPage.pageSize, state.objPage.http.condition, function (response) {
            state.objPage.gotoPage(response.data)
          }, function (response) {
            state.objPage.model.hasError = true
            state.objPage.model.error = '提取数据出错，请重试'
            console.log('提取数据出错，请重试')
          })
        }
      }
    })
  }
}
