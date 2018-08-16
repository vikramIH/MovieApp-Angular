import { Component, OnInit } from '@angular/core';
import { MovieManagerService } from '../movie-manager.service';
import { HttpClient } from '@angular/common/http';
import { Response, Headers } from '@angular/http';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';



@Component({
  selector: 'app-update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
   
  data:object = {}; 
  isUpdated: boolean;
  id: number;
  movies = [];
  movieObj: object = {};
  private headers = new Headers({ 'Content-Type': 'application/json'});

  constructor( private movieService : MovieManagerService, 
               private router: Router,
               private route: ActivatedRoute,
               private http: HttpClient) {}
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = +params['id'];
    });
    this.http.get("http://localhost:8080/api/v1/movies").subscribe(
      (res: Response) => {
        this.movies = res.json();
        for( var i = 0; i < this.movies.length; i++) {
          if( parseInt(this.movies[i].id) === this.id ) {
            this.data = this.movies[i];
            break;
          }
        }
      }
    )
  }

  updateMovie( movie ) {
    this.movieObj = {
      "id"       : movie.id,
      "title"    : movie.title,
      "year"     : movie.year,
      "genre"    : movie.genre,
      "director" : movie.director
    };
    const updateUrl = "http://localhost:8080/api/v1/movie/" + this.id;
    this.http.put(updateUrl, JSON.stringify(this.movieObj) )
  }
}
