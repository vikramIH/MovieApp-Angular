import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';
import { MovieByIdComponent } from './movie-by-id/movie-by-id.component';
import { OmdbComponent } from './omdb/omdb.component';

const routes: Routes = [
    { path: 'displaymovies', component: DisplayMoviesComponent },
    { path: 'addmovie', component: AddMovieComponent },
    { path: 'updatemovie/:id', component: UpdateMovieComponent },
    { path: 'deletemovie', component: DisplayMoviesComponent },
    { path: 'moviebyid', component: MovieByIdComponent },
    { path: 'search', component: OmdbComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}