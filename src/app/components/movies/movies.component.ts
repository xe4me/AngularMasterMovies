import {Component} from "@angular/core";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
    public movies = [
        {
            poster_path: 'assets/troy.jpg',
            release_date: '10/10/1987',
            vote_average: 980,
            title: 'Troy'
        },
        {
            poster_path: 'assets/shawshank.jpg',
            release_date: '10/10/2012',
            vote_average: 2000,
            title: 'Shaw shank Redemption'
        }
    ];

    public search($event) {
        console.log('target', $event.value)
    }
}
