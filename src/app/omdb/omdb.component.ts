import { Component, OnInit } from '@angular/core';
import { MovieManagerService } from '../movie-manager.service';
import { Omdb } from '../omdb';
import { HttpClient } from '@angular/common/http';

@Component({
selector: 'app-omdb',
templateUrl: './omdb.component.html',
styleUrls: ['./omdb.component.css']
})
export class OmdbComponent implements OnInit {

private movie;
check : boolean = false;
movieObj : object = {};
private addUrl: string = "http://localhost:8080/api/v1/movie";
constructor(private movieService: MovieManagerService, private http: HttpClient) {  
}
ngOnInit() {
 this.movie = new Omdb();
}

getMoviesByTitle() {
this.check = true
  this.movieService.getPostFromOmdb(this.movie.Title).subscribe(movies=> {
    this.movie = movies;
  });
}

addMovieFromOmdb (movie) {
    this.movieObj = {
      "id"       : Math.floor(Math.random()*1000),
      "title"    : movie.Title,
      "year"     : movie.Year,
      "genre"    : movie.Genre,
      "director" : movie.Poster
    }
   this.http.post( this.addUrl, this.movieObj )
            .subscribe( (res : Response) => { console.log(res) });
}

}