import {Component} from "@angular/core";
import {MovieService} from "../../services/movie.service";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
    public popularList;

    constructor(private movieService: MovieService) {
        this.movieService
            .getPopular()
            .subscribe(res => {
                this.popularList = res.results;
            });
    }

    public search(query) {
        this.movieService.searchMovies(query);
    }
}
