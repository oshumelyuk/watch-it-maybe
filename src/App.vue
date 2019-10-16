<template>
  <div id="app">
    <v-app id="inspire">
    <v-app-bar app color="indigo" dark>
      <v-toolbar-title>Popular movies</v-toolbar-title>
      <v-btn v-if="isAuthenticated" class="action-btn" @click="logout" >Logout</v-btn>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        
          <v-col class="text-center">
            <router-view/>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-footer
      color="indigo"
      app
    >
      <span class="white--text">&copy; 2019</span>
    </v-footer>
  </v-app>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import router from './router';

@Component
export default class App extends Vue {
  router: any = router
  isAuthenticated: boolean = this.$store.getters.isAuthenticated;

  logout(e: MouseEvent){
    this.$store.commit("setUnauthenticated");
    this.router.push({ path: '/login' });
    this.isAuthenticated = false;
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#inspire{
  position: relative;
}

.action-btn {
  float:right;
  position: absolute !important;
  right: 40px;
}
</style>
