<template>
  <div class="movies">
    <div v-if="movies" class="tileContainer">
      <div v-for="item in movies" v-bind:key="item.id"> 
        <Tile v-bind:id="item.id" 
          v-bind:title="item.title" 
          v-bind:image="getFullPath(item.poster_path)"
          v-bind:description="item.overview" 
          v-bind:detailsLink="getMovieDetailsLink(item.id)" />
      </div>
    </div><div v-else>
      Processing....
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import Tile from '@/components/Tile.vue'; // @ is an alias to /src
import MovieRepository from '../dataProviders/MovieRepository';

@Component({
  components: {
    Tile,
  },
})
export default class Movies extends Vue {
  movies = [];
  created(){
    const dataRepository = new MovieRepository();
    dataRepository.listMovies().then((x) => {
      this.movies = x.results;
    });
  };

  getFullPath(relativePath: string): string{
    return `https://image.tmdb.org/t/p/w600_and_h900_bestv2${relativePath}`;
  };

  getMovieDetailsLink(id: string): string{
    return `movies/${id}`;
  };
}
</script>

<style scoped lang="scss">
.tileContainer{
  display: flex;
  width: 100%;
  max-width: 100%;
  height: auto;
  flex-wrap: wrap;
}
</style>