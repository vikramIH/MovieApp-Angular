import { Component, OnInit } from '@angular/core';
import { MovieManagerService } from '../movie-manager.service';


@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent implements OnInit {
   
  
  isAdded : boolean = false;
  constructor( private movieService : MovieManagerService ) {}

  ngOnInit() {}

  addMovie ( movie ) {
    this.movieService.addNewMovie( movie )
      .subscribe( (res : Response) => { console.log(res) });
      this.isAdded = true;
    }

}
