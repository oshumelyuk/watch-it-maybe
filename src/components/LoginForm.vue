<template>
  <v-card class="elevation-12">
    <v-toolbar
      color="primary"
      dark
      flat
    >
      <v-toolbar-title>Login form</v-toolbar-title>
      <span v-if="error" class="error">{{error}}</span>
    </v-toolbar>
    <v-card-text>
      <v-form>
        <v-text-field
          label="Login"
          name="login"
          prepend-icon="person"
          type="text"
          v-model="username"
        ></v-text-field>

        <v-text-field
          id="password"
          label="Password"
          name="password"
          prepend-icon="lock"
          type="password"
          v-model="password"
        ></v-text-field>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="primary" @click="login" v-on:keyup.enter="login" >Login</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import AuthApi from '../api/AuthApi';
import { mapMutations } from 'vuex';
import router from '../router';

@Component
export default class LoginForm extends Vue {
  username: string = ''
  password: string = ''
  error: string = ''
  router: any = router

  login(e: MouseEvent){
    if (!this.validateForm()){
      e.preventDefault();
      return false;
    }
    var api = new AuthApi();
    api.authenticate(this.username, this.password).then((isAuthN) => {
      if (isAuthN){
        this.$store.commit("setAuthenticated", this.username);
        this.router.push({ path: '/movies' });
      } else {
        this.error = 'Login or password is incorrect';
      }
    });
  }

  validateForm() {
      const isValid = !!this.username && !!this.password;
      this.error = isValid? "": "Fields are required.";
      return isValid;
  }

  @Watch('username')
  onUsernameChanged(value: string, oldValue: string) {
    if (this.error) this.validateForm();
  }

  @Watch('password')
  onPasswordChanged(value: string, oldValue: string) {
    if (this.error) this.validateForm();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.error{
    color: lightpink;
    background: none !important;
    float: right;
    position: absolute;
    right: 10px;
}
</style>
