import { Component, OnInit } from '@angular/core';
import { MovieManagerService } from '../movie-manager.service';

@Component({
  selector: 'app-movie-by-id',
  templateUrl: './movie-by-id.component.html',
  styleUrls: ['./movie-by-id.component.css']
})

export class MovieByIdComponent implements OnInit {

  public movie = [];
  inputId : number; 

  constructor( private movieService : MovieManagerService ) {
     
    this.inputId = 1;
   
  }

  ngOnInit() {
    
  }
  
  sendId( enteredId : number ) {
  this.movieService.getMovieById( enteredId )
    .subscribe(data => this.movie = data);
  }
  
}
