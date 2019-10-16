import Vue from 'vue';
import Vuex from 'vuex';
import User from './models/User';
import VueCookies from 'vue-cookies-ts';

Vue.use(Vuex);
Vue.use(VueCookies);

interface AppState {
  user?: User;
}

const cookies = Vue.cookies;
const store = new Vuex.Store<AppState>({
  state: {
  },
  mutations: {
    setAuthenticated: (state, username: string) => {
      state.user = new User(username);
      cookies.set('authn', username);
    },
    setUnauthenticated: (state) => {
      state.user = undefined;
      cookies.remove('authn');
    },
  },
  actions: {

  },
  getters: {
    isAuthenticated: (state) => {
      const username = cookies.get('authn');
      return !!username;
    },
  },
});

export default store;
