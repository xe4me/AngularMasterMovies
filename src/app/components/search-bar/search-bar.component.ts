import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {
    @Output('search') search$ = new EventEmitter();

    onKeyupOrClick(value) {
        this.search$.emit(value);
    }
}
