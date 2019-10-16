import Movie from './Movie';

class MoviesResponse {

    public page: number;
    public total_results: number;
    public total_pages: number;
    public results: Movie[];
}

export default MoviesResponse;
