import {Injectable} from "@angular/core";
import {Http, URLSearchParams} from "@angular/http";
import "rxjs/Rx";

@Injectable()
export class MovieService {
    apikey: string;
    private apiBaseUrl: string = 'https://api.themoviedb.org/3/';

    constructor(private http: Http) {
        this.apikey = 'fed69657ba4cc6e1078d2a6a95f51c8c';
    }

    getPopular() {
        const search = new URLSearchParams();
        search.set('sort_by', 'popularity.desc');
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}discover/movie`, {search})
            .map(res => res.json())
    }

    getInTheaters() {
        const search = new URLSearchParams();
        search.set('primary_release_date.gt', '2015-10-20');
        search.set('primary_release_date.lte', '2015-12-20');
        search.set('sort_by', 'popularity.desc');
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}discover/movie`, {search})
            .map(res => res.json())
    }

    getTopRatedMovies() {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}movie/top_rated`, {search})
            .map(res => res.json())
    }

    searchMovies(searchStr: string) {
        const search = new URLSearchParams();
        search.set('sort_by', 'popularity.desc');
        search.set('query', searchStr);
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}search/movie`, {search})
            .map(res => res.json())
    }

    getMovie(id: string) {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}movie/${id}`, {search})
            .map(res => res.json())
    }

    getGenres() {
        const search = new URLSearchParams();
        search.set('language', 'en-US');
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}genre/movie/list`, {search})
            .map(res => res.json())
    }

    getMoviesByGenre(id: string) {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}genre/${id}/movies`, {search})
            .map(res => res.json())
    }

    getMovieReviews(id: string) {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}movie/${id}/reviews`, {search})
            .map(res => res.json())
    }

    getMovieVideos(id: string) {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}movie/${id}/videos`, {search})
            .map(res => res.json())
    }

    getSimilarMovies(id: string) {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}movie/${id}similar`, {search})
            .map(res => res.json())
    }

    getMovieCredits(id: string) {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}movie /${id}/credits`, {search})
            .map(res => res.json())
    }

    getUpComingMovies() {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}movie/upcoming`, {search})
            .map(res => res.json())
    }

    getPopularSeries() {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`
        ${this.apiBaseUrl}tv/popular`, {search})
            .map(res => res.json())
    }

    getTopRatedSeries() {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}tv/top_rated`, {search})
            .map(res => res.json())
    }

    getSerieDetails(id: string) {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}tv/${id}`, {search})
            .map(res => res.json())
    }

    getSerieVideos(id: string) {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}tv/${id}videos`, {search})
            .map(res => res.json())
    }

    getPersonDetail(id: string) {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}person /${id}`, {search})
            .map(res => res.json())
    }

    getPersonCast(id: string) {
        const search = new URLSearchParams();
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}person/${id}movie_credits`, {search})
            .map(res => res.json())
    }
}
