import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { DisplayMoviesComponent } from './display-movies/display-movies.component';
import { MovieManagerService } from './movie-manager.service';
import { MovieByIdComponent } from './movie-by-id/movie-by-id.component';
import { FormsModule } from '@angular/forms';
import { AddMovieComponent } from './add-movie/add-movie.component';
import { DeleteMovieComponent } from './delete-movie/delete-movie.component';
import { UpdateMovieComponent } from './update-movie/update-movie.component';
import { AppRoutingModule } from './app-routing.module';
import { OmdbComponent } from './omdb/omdb.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material'; 
import { MatFormField, MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DisplayMoviesComponent,
    MovieByIdComponent,
    AddMovieComponent,
    DeleteMovieComponent,
    UpdateMovieComponent,
    OmdbComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MatFormFieldModule
  ],
  providers: [MovieManagerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
