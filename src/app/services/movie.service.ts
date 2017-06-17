import {Http} from "@angular/http";
import "rxjs/Rx";

export class MovieService {
    apikey: string = 'fed69657ba4cc6e1078d2a6a95f51c8c';
    private apiBaseUrl: string = 'https://api.themoviedb.org/3/';

    constructor(private http: Http) {
    }

    searchMovies(searchStr: string) {
        console.log('MovieServiceService: ', searchStr);
    }

    getPopular() {
        const search = new URLSearchParams();
        search.set('sort_by', 'popularity.desc');
        search.set('api_key', this.apikey);
        return this.http
            .get(`${this.apiBaseUrl}discover/movie`, {search})
            .map(res => res.json())
    }
}
