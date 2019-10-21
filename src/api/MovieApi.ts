import MoviesResponse from '../models/MoviesResponse';

class MovieApi  {
    private key: string = '614db58ae5511973fb1886827fa7f623';
    private baseUrl: string = 'https://api.themoviedb.org/3';
    private listMovieUrl: string = '/discover/movie';

    /**
     * listMovies
     */
    public async listMovies() {
        const response = await fetch(this.buildUrl(this.listMovieUrl));
        const jsonResponse = await response.json();
        return jsonResponse;
    }

    private buildUrl(relativeUrl: string): string {
        const queryParams = `api_key=${this.key}`;
        return `${this.baseUrl}${relativeUrl}?${queryParams}`;
    }
}

export default MovieApi;
