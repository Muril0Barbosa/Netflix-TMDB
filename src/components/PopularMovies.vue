<template>
  <div class="mx-3">
      <h2 class="mt-2 grey--text">Popular Movies</h2>
      <v-container fluid>
          <v-row>
              <v-col cols="12" sm="3" v-for="movie in movies" :key="movie.id">
                  <MovieCard :movie="movie" :genres="genres"/>
              </v-col>
          </v-row>
      </v-container>
  </div>
</template>

<script>
import MovieCard from "@/components/MovieCard.vue";
export default {
  components: {
    MovieCard,
  },
  data: function() {
    return {
      movies: [],
      genres: []
    };
  },
  async mounted() {
    this.ftechGenres();
    try {
      const response = await this.$http.get("/movie/popular");
      console.log('minha reposta', response)
      console.log('minha resposta', response.data.results[0])
      console.log('minha resposta', response.data.results[1].original_title)
      console.log('minha resposta', response.data.results[2].original_title)
      console.log('minha resposta', response.data.results.map((movie)=> movie.original_title))
      this.movies = response.data.results;
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    async ftechGenres() {
      try {
          const response = await this.$http.get("/genre/movie/list");
          this.genres = response.data.genres;
      }catch(err)
      {
          console.log(err);
      }
    },
  },
};
</script>

<style></style>
