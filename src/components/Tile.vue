<template>
  <div class="tile" v-if="image">
    <a :href="detailsLink" >
      <img :src="image" :alt="title" class="tileImage" />
      <div class="title">{{title}}</div>
      <div class="description">{{description}}</div>
    </a>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Tile extends Vue {
  @Prop() public title!: string;
  @Prop() public image!: string;
  @Prop() public description!: string;
  @Prop() public id!: string;
  @Prop() public detailsLink: string;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tile{
  flex-grow: 1;
  margin: 10px;
  padding: 2px;
  width: 350px;
  position: relative;
}

.tile img{
  height : 500px;
  width  : 100%;
}

.tile .title{
  width: 100%;
  font-size: 1.2em;
}
.tile .description{
  visibility: hidden;
  position: absolute;
  background: rgba(255, 255, 255, 0.7);
  top: 0;
  left: 0;
  text-align:left;
  padding: 10px;
  color: black;
  font-size: 1.2em;
  font-family: Arial;
  overflow: hidden;
  height: 100%;
}
.tile:hover .description{
  visibility: visible;
}

.tile a {
  text-decoration: none;
  color: black;
}

</style>
