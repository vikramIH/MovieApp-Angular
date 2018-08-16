import { Component, OnInit } from '@angular/core';
import { MovieManagerService } from '../movie-manager.service';


@Component({
  selector: 'app-display-movies',
  templateUrl: './display-movies.component.html',
  styleUrls: ['./display-movies.component.css'],
  
})

export class DisplayMoviesComponent implements OnInit {

  public movies = [];
   
  constructor( private movieService : MovieManagerService ) { }

  ngOnInit() {
    this.movieService.getMovies()
    .subscribe(data => this.movies = data);
  }

  deleteMovie( myId : number ) {
    console.log(myId);
    if (confirm('Are you sure, you want delete ?')) 
     this.movieService.deleteMovie(myId);
  }

  
  
}
