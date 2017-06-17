import {Component} from "@angular/core";

@Component({
    selector: 'app-movies',
    templateUrl: './movies.component.html',
    styleUrls: ['./movies.component.css']
})
export class MoviesComponent {
    public movies = [1, 2, 3, 4];

    public search($event) {
        console.log('target', $event.value)
    }
}
