class Movie {
    public id: string;
    public release_date: string;
    public title: string;
    public overview: string;
    public vote_average: number;
    public genre_ids: number[];
    public poster_path: string;
    public popularity: number;
    public vote_count: number;
    public video: boolean;
    public adult: boolean;
    public original_language: string;
    public original_title: string;
}

export default Movie;
