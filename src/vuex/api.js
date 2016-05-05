import store from './store'
import { showMessage } from './actions'

export default {
  showMessage (msg) {
    showMessage(store, msg)
  }
}
