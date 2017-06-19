import {Routes} from '@angular/router';
import {MoviesComponent} from "./components/movies/movies.component";
import {MovieComponent} from "./components/movie/movie.component";
import {SignupComponent} from "./components/signup/signup.component";

export const appRoutes: Routes = [
    {path: '', component: MoviesComponent},
    {path: 'movie/:id', component: MovieComponent},
    {path: 'signup', component: SignupComponent}
];