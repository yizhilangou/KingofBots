import { createStore } from 'vuex'
import ModuleUser from './user'
import MoudulePk from './pk'
import MouduleRecord from './record'

export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    user: ModuleUser,
    pk: MoudulePk,
    record: MouduleRecord
  }
})
