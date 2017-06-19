import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {MoviesComponent} from './components/movies/movies.component';
import {MovieCardComponent} from './components/movie-card/movie-card.component';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {MovieService} from "app/services/movie.service";
import {HttpModule} from "@angular/http";
import {LeftNavComponent} from './components/left-nav/left-nav.component';
import {GenreFilterPipe} from './pipes/genre-filter.pipe';
import {MovieComponent} from './components/movie/movie.component';
import {RouterModule} from "@angular/router";
import {appRoutes} from "./app.routes";
import {NavBarComponent} from "./components/nav-bar/nav-bar.component";
import {SignupComponent} from "./components/signup/signup.component";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        AppComponent,
        NavBarComponent,
        MoviesComponent,
        MovieCardComponent,
        SearchBarComponent,
        LeftNavComponent,
        GenreFilterPipe,
        SignupComponent,
        MovieComponent
    ],
    imports: [
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes),
        BrowserModule
    ],
    providers: [MovieService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
