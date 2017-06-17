import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {MovieService} from "app/services/movie.service";
import {HttpModule} from "@angular/http";

@NgModule({
    declarations: [
        AppComponent,
        MoviesComponent,
        MovieCardComponent,
        SearchBarComponent
    ],
    imports: [
        HttpModule,
        BrowserModule
    ],
    providers: [MovieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
