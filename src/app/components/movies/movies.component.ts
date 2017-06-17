import {Component} from "@angular/core";
import {MovieService} from "../../services/movie.service";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
    public searchList;
    public popularList;
    public theatersList;
    public topRatedList;


    constructor(private movieService: MovieService) {
        this.movieService.getPopular().subscribe(res => {
            this.popularList = res.results;
        });
        this.movieService.getInTheaters().subscribe(res => {
            this.theatersList = res.results;
        });
        this.movieService.getTopRatedMovies().subscribe(res => {
            this.topRatedList = res.results;
        });
    }

    public search(query) {
        this.movieService
            .searchMovies(query)
            .subscribe(res => {
                this.searchList = res.results;
            });
    }
}
