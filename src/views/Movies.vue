<template>
  <div class="movies">
    <img alt="Vue logo" src="../assets/logo.png">
    <Tile title="First movie"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Tile from '@/components/Tile.vue'; // @ is an alias to /src

@Component({
  components: {
    Tile,
  },
})
export default class Movies extends Vue {}
</script>