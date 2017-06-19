import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
    movie: Object;

    constructor(private movieServices: MovieService,
                private router: ActivatedRoute) {

    }

    ngOnInit() {
        this.router
            .params
            .subscribe((params) => {
                const id = params['id'];
                this.getMovie(id);
            })
    }

    private getMovie(id: any) {
        this.movieServices
            .getMovie(id)
            .subscribe(movie => {
                this.movie = movie;
            });
    }
}
