import {Component} from "@angular/core";

@Component({
    selector: 'app-movie-card',
    templateUrl: './movie-card.component.html',
    styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent {
    public movie = {
        poster_path: 'assets/troy.jpg',
        release_date: '10/10/1987',
        vote_average: 980,
        title: 'Troy'
    };

}
