import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {MovieService} from '../../services/movie.service';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
    selector: 'app-movie',
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
    movie: Object;
    reviews: Array<Object>;
    similarMovies: Array<Object>;
    cast: Array<Object>;
    video: Object;

    constructor(private movieService: MovieService,
                private sanitizer: DomSanitizer,
                private router: ActivatedRoute) {

    }

    // subscribe to route parameter changes and if we got the id, start getting movie details for that id
    ngOnInit() {
        this.router
            .params
            .subscribe((params) => {
                const id = params['id'];
                this.getMovie(id);
                this.getMovieReviews(id);
                this.getMovieCredits(id);
                this.getMovieVideos(id);
                this.getSimilarMovies(id);
            });
    }

    private getMovie(id: any) {
        this.movieService
            .getMovie(id)
            .subscribe(movie => {
                this.movie = movie;
            });
    }

    private getMovieReviews(id: any) {
        this.movieService.getMovieReviews(id).subscribe(res => {
            this.reviews = res.results;
        });
    }

    private getMovieCredits(id: any) {
        this.movieService.getMovieCredits(id).subscribe(res => {
            res.cast = res.cast.filter((item) => {
                return item.profile_path
            });
            this.cast = res.cast.slice(0, 4);
        });
    }

    private getMovieVideos(id: any) {
        this.movieService.getMovieVideos(id).subscribe(res => {
            if (res.results && res.results.length) {
                this.video = res.results[0];
                this.video['url'] = this.sanitizer.bypassSecurityTrustResourceUrl('https://www.youtube.com/embed/' + this.video['key']);
            }
        });
    }

    private getSimilarMovies(id: any) {
        this.movieService.getSimilarMovies(id).subscribe(res => {
            console.log(res.results);
            this.similarMovies = res.results.slice(0, 12);
        });
    }
}
