import Vue from 'vue';
import Vuex from 'vuex';
import User from './models/User';

Vue.use(Vuex);

interface AppState {
  user?: User;
}
const store = new Vuex.Store<AppState>({
  state: {
    user: undefined,
  },
  mutations: {
    setAuthenticated: (state, username: string) => {
      state.user = new User(username);
    },
  },
  actions: {

  },
  getters: {
    isAuthenticated: (state) => {
      const isAuthN =  !!state.user && !!state.user.username;
      return isAuthN;
    },
  },
});

export default store;
