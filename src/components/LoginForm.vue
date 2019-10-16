<template>
<v-card>
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
        <v-btn color="primary">Login</v-btn>
    </v-card-actions>
</v-card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class LoginForm extends Vue {
  @Prop() public username: string;
  @Prop() public password: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">


</style>
