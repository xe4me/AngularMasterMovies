import {Component} from '@angular/core';
import {MovieService} from "../../services/movie.service";

@Component({
    selector: 'app-left-nav',
    templateUrl: './left-nav.component.html',
    styleUrls: ['./left-nav.component.css']
})
export class LeftNavComponent {
    genres: Array<Object>;

    constructor(private movieService: MovieService) {
        this.movieService
            .getGenres()
            .subscribe(res => {
                this.genres = res.genres.slice(0, 20);
            });
    }
    check(thing){
        console.log('thing',thing);
    }
}
