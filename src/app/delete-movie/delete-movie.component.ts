import { Component, OnInit } from '@angular/core';
import { MovieManagerService } from '../movie-manager.service'

@Component({
  selector: 'app-delete-movie',
  templateUrl: './delete-movie.component.html',
  styleUrls: ['./delete-movie.component.css']
})
export class DeleteMovieComponent implements OnInit {

  constructor( private movieService : MovieManagerService ) { }

  ngOnInit() {
  }

  
}
